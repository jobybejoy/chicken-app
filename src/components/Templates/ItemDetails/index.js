import React, { Component } from 'react'
import './style.css'
import ItemHeader from '../../../components/Organisms/Card/ItemHeader'
import SubItem from '../../../components/Organisms/Card/SubItem'

export class ItemDetails extends Component {


  render() {

    const { item, subitems, loading } = this.props;

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
        {subitems.map((item) => {
          return <SubItem className={'contain-item'} item={item} />
        })}
      </div>
    )
  }
}

ItemDetails.defaultProps = {
  item: {
    name: 'Ducky',
    url: 'coming soon'
  },
  subitems: [
    { name: "Meat", price: '50 AED', availableCount: 25 },
    { name: "Egg", price: "01 AED", availableCount: 200 }
  ],
  loading: false,
}

export default ItemDetails
