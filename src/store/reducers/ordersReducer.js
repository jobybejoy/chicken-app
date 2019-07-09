
const initState = {
  past: [],
  live: [],
  pending: [
    // {
    //   items: [],
    //   delivery_type: {
    //     name: '',
    //     location: {}
    //   },
    //   payment_type: {
    //     name: '',
    //     details: {}
    //   },
    //   order_id: '',
    //   status: ''
    // }
  ],
  orders: [],
  order: {},
  order_status: '',
  error: ""
}

const ordersReducer = (state = initState, action) => {
  switch (action.type) {

    case 'SET_ALL_ORDERS':
      return {
        ...state,
        orders: action.orders
      }

    case 'SET_MY_ORDERS':
      return {
        ...state,
        myOrders: action.orders
      }

    case 'SET_ORDER':
      return {
        ...state,
        order: action.order
      }

    case 'ORDER_ERROR':
      return {
        ...state,
        error: action.error
      }

    default: return state;
  }
}

export default ordersReducer 