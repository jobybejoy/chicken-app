import React, { Component } from 'react'
import Text from '../../../Atoms/Text'
import ItemCounter from '../../../Organisms/ItemCounter'

import './style.css'

export class SubItem extends Component {

  render() {

    const { item } = this.props;

    return (
      <div className={"subitem"}>
        <div className="header">
          <div className={'item left'}>
            <Text varient={'h3'} component={'div'} className={'name'}>{item.name}</Text>
            <Text varient={'body2semibold'} component={'div'} className={'price'}>{item.price}</Text>
          </div>
          <div className={'item right'}>
            <Text varient={'h4'} component={'div'} className={'available Count'}>{item.availableQuantity}</Text>
            <Text varient={'body2semibold'} component={'div'} className={'available Label'}>AVAILABLE</Text>
          </div>
        </div>
        <div className={'body'}>
          <ItemCounter />
        </div>
      </div>
    )
  }
}

SubItem.defaultProps = {
  item: {
    name: 'Egg',
    price: '01 AED',
    availableQuantity: 25
  }
}

export default SubItem
