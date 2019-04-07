export const addItem = (item) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    return dispatch({ type: 'ADD_ITEM', item })
  }
}

export const addCountToSubItem = (item) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {

    //*May have to take the logic hear to talk to backend
    return dispatch({ type: 'ADD_SUBITEM_COUNT', item })
  }
}