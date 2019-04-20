const itemsList = [
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
      // { name: 'Fish', price: 20, subPrice: (20 * 10), availableCount: 25, count: 22 },
    ],
    subTotal: 200
  },
]


const initState = {
  // items: itemsList,
  items: [],
  // total: 420,
  total: 0,
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
    // DONE Delete / Remove Item ---- Have to figure out ----
    // TODO make all the methods with immutablilty 
    // ! Issue last remove doesnt subtract from total 

    case 'REMOVE_ITEM':
      items = state.items
      itemIndex = items.findIndex(i => action.item.name === i.name)

      if (itemIndex !== -1) {
        console.log('Item in cart ', itemIndex);
        if (action.item.subItem) {
          subItemIndex = items[itemIndex].subItems.findIndex(s => action.item.subItem.name === s.name)
          console.log('SubItem index : ', subItemIndex);

          if (subItemIndex !== -1) {
            console.log('subItem in cart');
            const otherSubItems = items[itemIndex].subItems.filter(s => action.item.subItem.name !== s.name)

            if (otherSubItems.length === 0) {
              console.log('Last SubItem, So Remove Item');
              const otherItems = items.filter(i => action.item.name !== i.name)
              const price = items[itemIndex].subItems[subItemIndex].price

              return {
                ...state,
                items: otherItems,
                total: state.total - price
              }
            } else {
              console.log('More than One SubItem, Remove SubItem');
              const price = items[itemIndex].subItems[subItemIndex].price
              let newSubTotal = price * items[itemIndex].subItems[subItemIndex].count

              items[itemIndex].subItems = otherSubItems
              items[itemIndex].subTotal -= newSubTotal

              return {
                ...state,
                items: items,
                total: state.total - price
              }
            }

          } else {
            console.log('SubItem is not in cart');
          }
        } else {
          console.log('Item in Cart , remove Item');
          const otherItems = items.filter(i => action.item.name !== i.name)
          return {
            ...state,
            items: otherItems,

          }
        }
      } else {
        console.log('Item not in Cart');
      }


      return state
      break;

    case 'ADD_FIRST_TIME_ITEM':
      console.log('ADD ITEM TO CART');

      // LOGIC
      //If item in cart
      // Then if subItem in Cart 
      //  Do nothing
      // Else push subItem to cart item
      //Else push item with subItem to cart

      const { newItem } = action

      items = [...state.items]

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

          let newSubItem = newItem.subItems.find(it => it.name === newItem.subItem.name)
          newSubItem.count = 1;
          newSubItem.subPrice = newSubItem.price


          let i = { ...items[itemIndex] }
          console.log('iiiiii', i);
          i = {
            ...i,
            subItems: [
              ...i.subItems,
              newSubItem
            ],
            subTotal: i.subTotal + newSubItem.price,
          }
          console.log('iiiiii', i);

          // ! Mutating the element have to find alternative!! after v1 !
          items[itemIndex] = i

          return {
            ...state,
            items: items,
            total: state.total + newSubItem.price
          }
        }
      } else {
        // push item with subItem to cart
        console.log('push item with subItem to cart,item not in cart');

        //Find Item then subItem , push with new count and subPrice
        // items = action.items
        // item = items.find(i => i.name === newItem.name)
        // subItem = item.find(s => s.name === newItem.subItem.name)
        const newSubItem = newItem.subItems.find(it => it.name === newItem.subItem.name)

        return {
          ...state,
          items: [
            ...state.items,
            {
              name: newItem.name,
              url: newItem.url,
              subItems: [{ ...newSubItem, count: 1, subPrice: newSubItem.price }],
              subTotal: newSubItem.price
            }
          ],
          total: state.total + newSubItem.price
        }
      }
      // return state
      break;

    // case 'ADD_SUBITEM':
    //   //* Add SubItem to cart 
    //   items = state.items
    //   itemIndex = items.findIndex((item) => item.name === action.item.name)
    //   subItemIndex = items[itemIndex].subItems.findIndex((subItem) => subItem.name === action.item.subItem)
    //   break

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
      break;

    case 'SUBT_SUBITEM_COUNT':
      console.log('SUBTRCT SUBITEM COUNT TO CART');

      items = [...state.items]
      console.log('Items', items);

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

      if (action.value !== items[itemIndex].subItems[subItemIndex].count) {
        items[itemIndex].subItems[subItemIndex].count = action.value;
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