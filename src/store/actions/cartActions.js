import { actionTypes } from "redux-firestore";

export const addItem = (item) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {

    // return dispatch({ type: 'ADD_FIRST_TIME_ITEM', items: getState().items.items, newItem: item })
    // LOGIC
    //If ( item not in cart )
    // push item with subItem to cart
    //Else 
    // ITEM IS IN CART
    // Then if ( subItem not in Cart )
    // push subItem to cart item 
    const state = getState()
    // console.log(state);

    const cart = state.cart
    const items = state.items

    // console.log('TO ADD ITEM', item);
    // console.log('AND SUBITEM', item.subItem);
    // console.log('FROM AVAILABLE ITEMs', items);

    const cartItemIndex = cart.items.findIndex(c => item.name === c.name)
    if (cartItemIndex === -1) {
      // Item not in cart (push item and subItm to cart)
      const subItem = item.subItems.find(it => it.name === item.subItem.name)
      const price = subItem.price
      const newSubItem = {
        ...subItem,
        count: 1,
        subPrice: price
      }

      const newItem = {
        name: item.name,
        url: item.url,
        subItems: [{ ...newSubItem }],
        subTotal: price
      }

      // console.log('This Itemm  is in ', newItem);


      //* [FIREBASE] Add new Item To cart and increase total by "subTotal"
      const auth = state.firebase.auth
      const db = getFirestore()
      db.collection("carts").doc(auth.uid).set({
        items: [
          newItem,
          ...cart.items
        ],
        total: cart.total + price
      })

      dispatch({ type: 'ADD_ITEM_TO_CART', newItem, price })
    } else {
      // Item is in cart
      const cartItem = cart.items[cartItemIndex]
      const cartSubItemIndex = cart.items[cartItemIndex].subItems.findIndex(c => item.subItem.name === c.name)
      if (cartSubItemIndex === -1) {
        // SubItem Not in cart ( push subItem into cart )
        const subItem = item.subItems.find(it => it.name === item.subItem.name)
        // console.log(subItem);

        const price = subItem.price

        const newItem = {
          ...cartItem,
          subItems: [
            ...cartItem.subItems,
            {
              ...subItem,
              count: 1,
              subPrice: price
            }
          ],
          subTotal: cartItem.subTotal + price
        }

        const newItems = cart.items.map((item, index) => {
          if (item.name === newItem.name) { return newItem }
          return item
        })

        //* [FIREBASE] Add new subItem Item To cart and increase total by "subTotal" and "total"
        const auth = state.firebase.auth
        const db = getFirestore()
        db.collection("carts").doc(auth.uid).set({
          items: newItems,
          total: cart.total + price
        })

        dispatch({ type: 'ADD_SUBITEM_TO_CART', newItems, price })
      }
    }
  }
}


export const removeItem = (item) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // return dispatch({ type: 'REMOVE_ITEM', item })

    // LOGIC
    //If ( item in cart )
    //  Then if (subItem in Cart )
    //      Then if(last subItem )
    //        remove item
    //      else
    //        remove SubItem 
    //  Else
    //    remove Item
    // 
    // push subItem to cart item 

    const state = getState()
    const cart = state.cart
    const items = state.items

    const cartItemIndex = cart.items.findIndex(c => item.name === c.name)
    if (cartItemIndex !== -1) {
      // Item in cart
      const cartItem = cart.items[cartItemIndex]
      if (item.subItem) {
        const cartSubItemIndex = cart.items[cartItemIndex].subItems.findIndex(s => item.subItem.name === s.name)
        if (cartSubItemIndex !== -1) {
          // SubItem in cart
          const cartSubItem = cartItem.subItems[cartSubItemIndex]
          const price = cart.items[cartItemIndex].subItems[cartSubItemIndex].price

          const otherCartSubItems = cart.items[cartItemIndex].subItems.filter(i => item.subItem.name !== i.name)

          if (otherCartSubItems.length === 0) {

            // Last Item Remve Item
            // console.log('LAST subITEM RM ITEM');


            const otherCartItems = cart.items.filter(i => item.name !== i.name)
            // const otherCartItems = cart.items.map((i, index) => {
            //   if (i.name !== item.name) { return i }
            // })

            // console.log('last item to remove', cartSubItem);

            //* [FIREBASE] Remove Item From cart and decrease total by "price"
            const auth = state.firebase.auth
            const db = getFirestore()
            db.collection("carts").doc(auth.uid).set({
              items: otherCartItems,
              total: cart.total - price
            })

            dispatch({ type: 'REMOVE_ITEM_FROM_CART', cartItems: otherCartItems, price })

          } else {
            // Not Last subItem
            const newItem = {
              ...cartItem,
              subItems: [
                ...otherCartSubItems,
              ],
              subTotal: cartItem.subTotal - price
            }

            // console.log('N- Item', newItem);


            const newItems = cart.items.map((item, index) => {
              if (item.name === newItem.name) { return newItem }
              return item
            })

            //* [FIREBASE] Add new subItem Item To cart and increase total by "subTotal" and "total"
            const auth = state.firebase.auth
            const db = getFirestore()
            db.collection("carts").doc(auth.uid).set({
              items: newItems,
              total: cart.total - price
            })

            dispatch({ type: 'REMOVE_SUBITEM_FROM_CART', newItems, price })

          }
        }

      }

    }

  }
}

export const addCountToSubItem = (item) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {

    // May have to take the logic hear to talk to backend
    // return dispatch({ type: 'ADD_SUBITEM_COUNT', item })

    // item { name , subItem }

    const state = getState()
    const cart = state.cart
    const items = state.items

    const cartItemIndex = cart.items.findIndex(i => i.name === item.name)
    if (cartItemIndex !== -1) {
      const cartItem = cart.items[cartItemIndex]
      const cartSubItemIndex = cart.items[cartItemIndex].subItems.findIndex(i => i.name === item.subItem)
      // if (cartSubItemIndex !== -1) {
      const cartSubItem = cart.items[cartItemIndex].subItems[cartSubItemIndex]
      const price = cartSubItem.price
      if (cartSubItem.count < cartSubItem.availableCount) {

        // Increase +1 price aswell
        const newSubItems = cart.items[cartItemIndex].subItems.map((s, index) => {
          if (index === cartSubItemIndex) {
            return {
              ...cartSubItem,
              count: cartSubItem.count + 1,
              subPrice: cartSubItem.subPrice + price
            }
          }
          return s
        })

        const newItems = cart.items.map((i, index) => {
          if (i.name === item.name) {
            return {
              ...cartItem,
              subItems: newSubItems,
              subTotal: cartItem.subTotal + price
            }
          }
          return i
        })


        //* [FIREBASE] Increment SubItem Count To cart and increase total by "price"
        //* [FIREBASE] [later] May have to use increment instead of replacing the entire obj
        const auth = state.firebase.auth
        const db = getFirestore()
        db.collection("carts").doc(auth.uid).set({
          items: newItems,
          total: cart.total + price
        })

        return dispatch({ type: 'ADD_COUNT_SUBITEM', newItems, price })

      }
      // }

    }

  }
}

export const subtractCountToSubItem = (item) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {

    //*May have to take the logic hear to talk to backend
    // return dispatch({ type: 'SUBT_SUBITEM_COUNT', item })

    const state = getState()
    const cart = state.cart
    const items = state.items

    const cartItemIndex = cart.items.findIndex(i => i.name === item.name)
    if (cartItemIndex !== -1) {
      const cartItem = cart.items[cartItemIndex]
      const cartSubItemIndex = cart.items[cartItemIndex].subItems.findIndex(i => i.name === item.subItem)
      // if (cartSubItemIndex !== -1) {
      const cartSubItem = cart.items[cartItemIndex].subItems[cartSubItemIndex]
      const price = cartSubItem.price

      if (cartSubItem.count > 0) {

        const newSubItems = cart.items[cartItemIndex].subItems.map((s, index) => {
          if (index === cartSubItemIndex) {
            return {
              ...cartSubItem,
              count: cartSubItem.count - 1,
              subPrice: cartSubItem.subPrice - price
            }
          }
          return s
        })

        const newItems = cart.items.map((i, index) => {
          if (i.name === item.name) {
            return {
              ...cartItem,
              subItems: newSubItems,
              subTotal: cartItem.subTotal - price
            }
          }
          return i
        })

        //* [FIREBASE] Increment SubItem Count To cart and decrement total by "price"
        //* [FIREBASE] [later] May have to use decrement instead of replacing the entire obj
        const auth = state.firebase.auth
        const db = getFirestore()
        db.collection("carts").doc(auth.uid).set({
          items: newItems,
          total: cart.total - price
        })

        return dispatch({ type: 'SUBT_COUNT_SUBITEM', newItems, price })

      }


    }
  }
}

export const setCountToSubItem = (item, value) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {

    //* [Firebase] Incomplete Not Liinked with firebase
    return dispatch({ type: 'SET_SUBITEM_COUNT', item, value })
  }
}




export const getCart = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {

    //make async call to DB
    const firestore = getFirestore();
    const auth = getState().firebase.auth

    // db.collection("cities")
    //   .onSnapshot(function (doc) {
    //     console.log("Current data: ", doc.data());
    //   });

    const docRef = firestore.collection("carts").doc(auth.uid);

    docRef.onSnapshot((doc) => {
      if (doc.exists) {
        const cart = doc.data();
        dispatch({ type: 'SET_CART', cart })
      }
    });



  }
}

export const addDeliveryType = (location) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {

    const auth = getState().firebase.auth
    const db = getFirestore()
    db.collection("carts").doc(auth.uid).set({
      delivery_type: location
    }, { merge: true })
    return dispatch({ type: 'SET_ORDER_DELIVERY', location: location });
  }
}

export const setPaymentMethod = (method) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const auth = getState().firebase.auth
    const db = getFirestore()
    db.collection("carts").doc(auth.uid).set({
      payment: {
        method: method
      }
    }, { merge: true })
    return dispatch({ type: 'SET_ORDER_PAYMENT', method: method });
  }
}



