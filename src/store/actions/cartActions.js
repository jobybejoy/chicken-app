export const addItem = (item) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {

    return dispatch({ type: 'ADD_FIRST_TIME_ITEM', items: getState().items.items, newItem: item })
  }
}

export const removeItem = (item) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    return dispatch({ type: 'REMOVE_ITEM', item })
  }
}

export const addCountToSubItem = (item) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {

    //*May have to take the logic hear to talk to backend
    return dispatch({ type: 'ADD_SUBITEM_COUNT', item })
  }
}

export const subtractCountToSubItem = (item) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {

    //*May have to take the logic hear to talk to backend
    return dispatch({ type: 'SUBT_SUBITEM_COUNT', item })
  }
}

export const setCountToSubItem = (item, value) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    return dispatch({ type: 'SET_SUBITEM_COUNT', item, value })
  }
}