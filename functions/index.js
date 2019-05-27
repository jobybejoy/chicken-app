/* eslint-disable promise/no-nesting */
/* eslint-disable promise/always-return */
const functions = require('firebase-functions');
const admin = require('firebase-admin');

const cors = require('cors')({ origin: true });

admin.initializeApp();

var db = admin.firestore();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

// TODO Add the order Listing with the users!
// TODO Reduce the count from total 


//Order Functions
exports.submitOrder = functions.https.onRequest((request, response) => {

  cors(request, response, () => {
    // console.log('Request!!', request);

    // if (request.method !== "POST" || request.method !== "OPTIONS") {
    //   return response.status(400).send("Invalid Request Type");
    // }

    const uid = request.body.uid

    var order_id = undefined
    let user = undefined

    admin.auth().getUser(uid)
      .then((userRecord) => {
        // See the UserRecord reference doc for the contents of userRecord.
        user = userRecord.toJSON()
      })
      .catch((error) => {
        console.log('Error fetching user data:', error);
      });

    const metaRef = db.collection('meta').doc('orders');
    const el = metaRef.get()
      .then((doc) => {
        order_id = doc.data().order_id

        const cartRef = db.collection('carts').doc(uid);
        const getDoc = cartRef.get()
          .then(doc => {
            if (!doc.exists) {
              console.log('No such document!');
            } else {
              const order = doc.data();

              if (order.items.length === 0) {
                return response.status(400).send('Cart Empty');
              }

              if (order.delivery_type === undefined) {
                return response.status(400).send('Deliv Not Defined');
              }
              if (order.payment === undefined) {
                return response.status(400).send('Payment Not Defined');
              }

              console.log(order_id);
              const timestamp = admin.firestore.FieldValue.serverTimestamp()

              // console.log('USER', user);

              const newOrder = {
                ...order,
                order_id: order_id,
                user: {
                  name: user.displayName,
                  photoURL: user.photoURL,
                  email: user.email,
                  uid: user.uid,
                  phoneNumber: user.phoneNumber || null
                },
                orderedAt: timestamp
              }

              // if (order_id) {

              // eslint-disable-next-line promise/no-nesting
              var addDoc = db.collection('orders').add(newOrder).then(ref => {
                console.log('Added document with ID: ', ref.id);


                // Clean Cart 
                cartRef.set({
                  items: [],
                  total: 0,
                })

                // Increment Order Id
                metaRef.set({ order_id: newOrder.order_id + 1 }, { merge: true })
                // batch.set(statsRef, { storyCount: increment }, { merge: true });

                return response.status(200).send({
                  id: ref.id,
                  order_id: newOrder.order_id
                });
              });

              // }


              // return response.status(200).send('ORDER DONE');
            }


          })

      })
      .catch(err => {
        console.log('Error getting document', err);
      });
    //   .then((snapshot) => {
    //   // return snapshot.val();
    // });

    // return response.status(200).send(getDoc);

    // return response.status(200).send(request.body)

    // response.send("Hello from Firebase!");

  });
});
