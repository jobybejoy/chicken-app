import React, { Component } from 'react'
import './style.css'
import ItemHeader from '../../../components/Organisms/Card/ItemHeader'
import SubItem from '../../../components/Organisms/Card/SubItem'

export class ItemDetails extends Component {

  render() {

    const { item, loading, subItemsCartCount, functions } = this.props

    const { subItems } = item;

    if (loading) {
      return (
        <div className={"page container"}>
          <ItemHeader className={'contain-item'} loading />
          <SubItem className={'contain-item'} loading />
        </div>
      )
    }

    return (
      <div className={"page container"}>
        <ItemHeader className={'contain-item'} item={item} />
        {subItems && subItems.map((subItem, index) => {
          return <SubItem className={'contain-item'} functions={functions} count={subItemsCartCount[index] || 0} item={item} subItem={subItem} />
        })}
      </div>
    )
  }
}

ItemDetails.defaultProps = {
  item: {},
  loading: false,
}

export default ItemDetails
