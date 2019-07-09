
const initState = {
  allUsers: [],
  allAdmins: [],
  allManagers: [],
  userProfile: {},
  success: null,
  error: null
}

const ordersReducer = (state = initState, action) => {
  switch (action.type) {

    case 'SET_ALL_USERS':
      return {
        ...state,
        allUsers: action.users
      }

    case 'SET_ALL_ADMINS':
      return {
        ...state,
        allAdmins: action.admins
      }

    case 'SET_ALL_MANAGERS':
      return {
        ...state,
        allManagers: action.managers
      }

    case 'SET_ALL_DELIVERYBOYS':
      return {
        ...state,
        allDeliveryBoys: action.deliveryBoys
      }

    case 'SET_USER_PROFILE':
      return {
        ...state,
        userProfile: action.user
      }

    case 'SET_USER_ROLES':
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          roles: action.roles
        }
      }

    case 'ORDER_STATUS_UPDATE_SUCCESS':
      return {
        ...state,
        success: action.success
      }

    case 'ORDER_STATUS_UPDATE_ERROR':
      return {
        ...state,
        error: action.error
      }

    case 'SET_META_DATA': {
      return {
        ...state,
        meta: action.meta
      }
    }

    case 'ERROR':
      return {
        ...state,
        error: action.error
      }

    default: return state;
  }
}

export default ordersReducer 