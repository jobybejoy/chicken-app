import React, { Component } from 'react'

import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

import ItemDetailsComponent from '../components/Templates/ItemDetails'

export class ItemDetails extends Component {

  render() {

    const { item } = this.props

    if (item) {
      return (
        <React.Fragment>
          <ItemDetailsComponent item={item} />
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
  const items = state.firestore.data.items;
  const item = items ? items[id] : null;
  return {
    item: item
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'items' }
  ])
)(ItemDetails)
