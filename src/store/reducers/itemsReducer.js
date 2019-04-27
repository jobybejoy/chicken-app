
const initState = {
  items: [
    {
      name: "Chicken", url: "Comin Soon", id: '0',
      subItems: [
        { name: 'Meat', price: 20, subPrice: (20 * 10), availableCount: 25 },
        { name: 'Egg', price: 1, subPrice: (1 * 20), availableCount: 223 },
      ]
    },
    {
      name: "Duck", url: "Comin Soon", id: '1',
      subItems: [
        { name: 'Meat', price: 23, subPrice: (1 * 20), availableCount: 215 },
        { name: 'Egg', price: 1, subPrice: (1 * 20), availableCount: 150 },
      ]
    },
    {
      name: "Kadaknath", url: "Comin Soon", id: '2',
      subItems: [
        { name: 'Fish', price: 1, availableCount: 223 },
        { name: 'Meat', price: 20, availableCount: 25 },
        { name: 'Egg', price: 1, availableCount: 223 },
      ]
    },
    {
      name: "TEST", url: "Comin Soon", id: '3',
      subItems: [
        { name: 'Fish', price: 1, availableCount: 223 },
        { name: 'Meat', price: 20, availableCount: 25 },
        { name: 'Egg', price: 1, availableCount: 223 },
      ]
    }
  ]
}

const itemsReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_ITEM":
      console.log('created Item', action.item);
      return state;
    case 'CREATE_ITEM_ERROR':
      console.log('create item error', action.error);
      return state;
    default: return state;
  }
}

export default itemsReducer 