import React, { Component } from 'react'
import { createItem } from '../../store/actions/itemsActions'
import { connect } from 'react-redux'

import { addItem } from '../../store/actions/cartActions'


export class Temp extends Component {

  onSubmit(e) {
    // this.props.createItem(this.state);

    this.props.createItem({ name: 'TEST', url: 'TEST', subItems: [{ name: 'Meat', price: 24, availableCount: 124 }] });
  }

  addItem(value) {
    this.props.addItem({ name: 'Duck', subItem: 'Meat', value: value });
  }

  render() {

    // console.log(this.props);


    return (
      <div>
        <button onClick={() => { this.onSubmit() }}>ADD ITEM</button>

        <button onClick={() => { this.addItem(30) }}>Add Item TO CART</button>
        <button onClick={() => { this.addItem(30) }}>SET at 30</button>
        <button onClick={() => { this.addItem(40) }}>Set at 40</button>

      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createItem: (item) => dispatch(createItem(item)),
    addItem: (item) => dispatch(addItem(item))
  }
}

export default connect(null, mapDispatchToProps)(Temp)
