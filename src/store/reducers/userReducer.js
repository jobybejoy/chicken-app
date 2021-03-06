
const initState = {
  locations: []
}

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_ITEM":
      console.log('created Item', action.item);
      return state;
    case 'CREATE_ITEM_ERROR':
      console.log('create item error', action.error);
      return state;
    case 'SET_LOCATION':
      return {
        ...state,
        locations: action.locations
      }
    default: return state;
  }
}

export default userReducer 