export const createItem = (item) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {

    //make async call to DB
    const firestore = getFirestore();

    firestore.collection('items').add({
      ...item,
      creatorName: 'John Doe',
      creatorId: 123456,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_ITEM', item: item })
    }).catch((error) => {
      dispatch({ type: 'CREATE_ITEM_ERROR', error: error })
    })

  }
}

export const getAllItems = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {

    //make async call to DB
    const firestore = getFirestore();

    // db.collection("cities")
    //   .onSnapshot(function (doc) {
    //     console.log("Current data: ", doc.data());
    //   });

    const docRef = firestore.collection("items");

    docRef.onSnapshot((querySnapshot) => {
      const items = querySnapshot.docs.map(doc => doc.data());
      dispatch({ type: 'SET_ITEMS', items: items })
    });

  }
}

export default getAllItems