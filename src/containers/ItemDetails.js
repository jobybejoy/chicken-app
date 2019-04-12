import React, { Component } from 'react'

import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

import ItemDetailsComponent from '../components/Templates/ItemDetails'

import { addCountToSubItem, subtractCountToSubItem, addItem, removeItem, setCountToSubItem } from '../store/actions/cartActions'

export class ItemDetails extends Component {

  render() {

    const { item, subItemsCartCount } = this.props

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
  // const items = state.firestore.data.items;
  const items = state.items.items
  const item = items ? items[id] : null;

  const cartItem = state.cart.items.find(i => i.name === item.name)

  let res = Array.from(Array(item.subItems.length), () => 0);

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
    subItemsCartCount: subItemsCartCount
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: (item) => dispatch(addCountToSubItem(item)),
    subCount: (item) => dispatch(subtractCountToSubItem(item)),
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItem(item)),
    setItemValue: (item, value) => dispatch(setCountToSubItem(item, value))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'items' }
  ])
)(ItemDetails)
