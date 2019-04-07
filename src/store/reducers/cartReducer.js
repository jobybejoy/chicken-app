
const initState = {
  items: [
    {
      name: "Chicken",
      url: "Comin Soon",
      subItems: [
        { name: 'Meat', price: 20, subPrice: (20 * 10), availableCount: 25, count: 10 },
        { name: 'Egg', price: 1, subPrice: (1 * 20), availableCount: 223, count: 20 },
      ],
      subTotal: 220
    },
    {
      name: "Duck",
      url: "Comin Soon",
      subItems: [
        { name: 'Meat', price: 20, subPrice: (20 * 10), availableCount: 25, count: 10 },
      ],
      subTotal: 200
    },
    {
      name: "Fish",
      url: "Comin Soon",
      subItems: [
        { name: 'Meat', price: 20, subPrice: (20 * 10), availableCount: 25, count: 10 },
      ],
      subTotal: 200
    },
    {
      name: "Nuts",
      url: "Comin Soon",
      subItems: [
        { name: 'Meat', price: 20, subPrice: (20 * 10), availableCount: 25, count: 10 },
      ],
      subTotal: 200
    }
  ],
  total: 820,
  cartError: ''
}

let items = {}
let itemIndex = null
let subItemIndex = null
let subTotal = null
let total = null


const cartReducer = (state = initState, action) => {
  switch (action.type) {
    // case 'ADD_ITEM': console.log('ADDING ITEM');
    //   const { item } = action
    //   return {
    //     ...state,
    //     items: [
    //       ...state.items,
    //       item
    //     ]
    //   }

    // DONE update the Total and subTotal
    // DONE Use let for the variables.
    // TODO Add subitem, Item
    // TODO Delete / Remove Item ---- Have to figure out ----

    case 'ADD_ITEM':
      console.log('ADD ITEM TO CART');
      // Add Item to cart : Given item is not in cart
      return {
        ...state,
        items: [
          ...state.items,
          action.item
        ]
      }

    case 'ADD_SUBITEM_COUNT':
      console.log('ADD SUBITEM COUNT TO CART');

      items = state.items
      itemIndex = items.findIndex((item) => item.name === action.item.name)
      subItemIndex = items[itemIndex].subItems.findIndex((subItem) => subItem.name === action.item.subItem)

      if (items[itemIndex].subItems[subItemIndex].count < items[itemIndex].subItems[subItemIndex].availableCount) {
        items[itemIndex].subItems[subItemIndex].count += 1;
        items[itemIndex].subItems[subItemIndex].subPrice += items[itemIndex].subItems[subItemIndex].price
        items[itemIndex].subTotal += items[itemIndex].subItems[subItemIndex].price
      } else {
        return {
          ...state,
          cartError: 'Request > than available'
        }
      }

      return {
        ...state,
        total: state.total + items[itemIndex].subItems[subItemIndex].price,
        items: items
      }

    case 'SUBT_SUBITEM_COUNT':
      console.log('SUBTRCT SUBITEM COUNT TO CART');

      items = state.items
      itemIndex = items.findIndex((item) => item.name === action.item.name)
      subItemIndex = items[itemIndex].subItems.findIndex((subItem) => subItem.name === action.item.subItem)

      if (items[itemIndex].subItems[subItemIndex].count > 0) {
        items[itemIndex].subItems[subItemIndex].count -= 1;
        items[itemIndex].subItems[subItemIndex].subPrice -= items[itemIndex].subItems[subItemIndex].price
        items[itemIndex].subTotal -= items[itemIndex].subItems[subItemIndex].price
      } else {
        return {
          ...state,
          cartError: 'Request < than 0'
        }
      }

      return {
        ...state,
        total: state.total - items[itemIndex].subItems[subItemIndex].price,
        items: items
      }

    case 'SET_SUBITEM_COUNT':
      console.log('SET SUBITEM COUNT TO CART');

      items = state.items
      itemIndex = items.findIndex((item) => item.name === action.item.name)
      subItemIndex = items[itemIndex].subItems.findIndex((subItem) => subItem.name === action.item.subItem)

      if (action.item.value !== items[itemIndex].subItems[subItemIndex].count) {
        items[itemIndex].subItems[subItemIndex].count = action.item.value;
        items[itemIndex].subItems[subItemIndex].subPrice = items[itemIndex].subItems[subItemIndex].price * items[itemIndex].subItems[subItemIndex].count

        subTotal = 0; total = 0;
        items[itemIndex].subItems.map((subItem) => {
          subTotal += subItem.subPrice
        })
        items[itemIndex].subTotal = subTotal

        items.map((item) => {
          total += item.subTotal
        })

      } else {
        return {
          ...state,
          cartError: 'Invalid value passed!'
        }
      }

      return {
        ...state,
        total: total,
        items: items
      }



    default: return state;
  }
}

export default cartReducer 