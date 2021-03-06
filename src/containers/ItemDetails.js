import React, { Component } from 'react'

import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

import PullOver from '../components/Molecules/PullOver'
import ItemDetailsComponent from '../components/Templates/ItemDetails'

import { addCountToSubItem, subtractCountToSubItem, addItem, removeItem, setCountToSubItem } from '../store/actions/cartActions'
import { getAllItems } from '../store/actions/itemsActions'
export class ItemDetails extends Component {

  componentDidMount() {
    this.props.getAllItems();
  }

  render() {

    const { item, subItemsCartCount, cartItem } = this.props

    if (item) {
      return (
        <React.Fragment>
          <ItemDetailsComponent item={item} subItemsCartCount={subItemsCartCount}
            functions={
              {
                addCount: (item) => this.props.addCount({ name: item.name, subItem: item.subItem }),
                subCount: (item) => this.props.subCount({ name: item.name, subItem: item.subItem }),
                addItem: (item) => this.props.addItem(item),
                removeItem: (item) => this.props.removeItem(item),
                setItemValue: (item, value) => this.props.setItemValue(item, value)
              }
            }
          />
          {
            cartItem &&
            <PullOver {...this.props}
              label="Sub Total" price={cartItem ? cartItem.subTotal + ' AED' : '0 AED'}
              cta_label="CART" cta_to="/cart" />
          }

        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <ItemDetailsComponent loading={true} />
        </React.Fragment>
      )
    }
  }
}

const mapStateToProps = (state, ownProps) => {

  const id = ownProps.match.params.id;

  console.log(state.items);

  // const items = state.firestore.data.items;
  const items = state.items.items
  if (items) {
    const item = items ? items.find(i => i.id === id) : null;

    const cartItem = state.cart.items.find(i => i.name === item.name)

    let res = []
    if (item) {
      res = Array.from(Array(item.subItems.length), () => 0);
    }

    if (cartItem) {
      cartItem.subItems.map(s => {
        const index = item.subItems.findIndex(item => item.name === s.name)
        // * Might be mutating this !! Take care of it.
        res[index] = s.count
      })
    };

    const subItemsCartCount = [...res]

    return {
      item: item,
      cartItem: cartItem,
      subItemsCartCount: subItemsCartCount
    }
  }
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: (item) => dispatch(addCountToSubItem(item)),
    subCount: (item) => dispatch(subtractCountToSubItem(item)),
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItem(item)),
    setItemValue: (item, value) => dispatch(setCountToSubItem(item, value)),

    getAllItems: () => dispatch(getAllItems()),
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'items' }
  ])
)(ItemDetails)
