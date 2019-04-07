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