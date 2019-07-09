import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import AddItemComponent from '../../components/Templates/AddItem'

import { addItem } from '../../store/actions/adminActions'



export class AddItem extends Component {

  componentDidMount() {
    // this.props.AddItem();
  }

  render() {

    return (
      <React.Fragment>
        <AddItemComponent
          functions={
            { addItem: (item) => this.props.addItem(item) }
          }
          {...this.props}
        />
      </React.Fragment>
    )
  }
}

const MapStateToProps = (state) => {
  return {
    // orders: state.firestore.ordered.orders,
    // admin: state.admin.orders
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => dispatch(addItem(item)),
  }
}

export default compose(
  connect(MapStateToProps, mapDispatchToProps),
)(AddItem)
