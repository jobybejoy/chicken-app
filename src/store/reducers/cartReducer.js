
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
let item = {}
let subItem = {}
let itemIndex = null
let subItemIndex = null
let subTotal = null
let total = null


const cartReducer = (state = initState, action) => {
  switch (action.type) {

    // DONE update the Total and subTotal
    // DONE Use let for the variables.
    // DONE Add subitem, Item
    // TODO Delete / Remove Item ---- Have to figure out ----

    case 'ADD_ITEM':
      console.log('ADD ITEM TO CART');

      // LOGIC
      //If item in cart
      // Then if subItem in Cart 
      //  Do nothing
      // Else push subItem to cart item
      //Else push item with subItem to cart

      const { newItem } = action

      items = state.items

      itemIndex = items.findIndex(i => i.name === newItem.name)

      if (itemIndex !== -1) {
        // ITEM IN CART
        subItemIndex = items[itemIndex].subItems.findIndex(subItem => subItem.name === newItem.subItem.name)
        console.log(itemIndex);
        console.log(subItemIndex);

        if (subItemIndex !== -1) {
          // Do Nothing
          console.log('Do nothing');
        } else {
          //Push subItem into cart
          console.log('Push subItem into cart');

          let newSubItem = newItem.subItem
          newSubItem.count = 1;
          newSubItem.subPrice = newSubItem.price

          let i = items[itemIndex]
          console.log('iiiiii', i);
          i = {
            ...i,
            subItems: [
              ...i.subItems,
              newSubItem
            ]
          }
          console.log('iiiiii', i);

          // ! Mutating the element have to find alternative!! after v1 !
          items[itemIndex] = i

          return {
            ...state,
            items: items
          }
        }
      } else {
        // push item with subItem to cart
        console.log('push item with subItem to cart');
        return {
          ...state,
          items: [
            ...state.items,
            {
              ...newItem,
              subItems: [{ ...newItem.subItem, count: 1, subPrice: newItem.subItem.price }]
            }
          ]
        }
      }
      return state

    case 'ADD_SUBITEM':
      //* Add SubItem to cart 
      items = state.items
      itemIndex = items.findIndex((item) => item.name === action.item.name)
      subItemIndex = items[itemIndex].subItems.findIndex((subItem) => subItem.name === action.item.subItem)

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

        //IF count is 0 then remove subItem

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