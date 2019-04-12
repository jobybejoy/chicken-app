import React, { Component } from 'react'
import { createItem } from '../../store/actions/itemsActions'
import { connect } from 'react-redux'

import { addItem, removeItem } from '../../store/actions/cartActions'


export class Temp extends Component {

  onSubmit(e) {
    // this.props.createItem(this.state);

    this.props.createItem({ name: 'TEST', url: 'TEST', subItems: [{ name: 'Meat', price: 24, availableCount: 124 }] });
  }

  addItem() {
    this.props.addItem({ name: 'TEST', url: 'TEST', subItem: { name: 'Meat', price: 24, availableCount: 124 } });
  }

  removeItem() {
    this.props.removeItem({ name: 'Duck', url: 'TEST', });
  }

  render() {

    // console.log(this.props);


    return (
      <div>
        <button onClick={() => { this.onSubmit() }}>ADD ITEM</button>

        <button onClick={() => { this.addItem() }}>Add TEST Item TO CART</button>

        <button onClick={() => { this.removeItem() }}>REMOVE CHICKEN MEAT</button>

      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createItem: (item) => dispatch(createItem(item)),
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItem(item))
  }
}

export default connect(null, mapDispatchToProps)(Temp)
