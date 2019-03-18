import React, { Component } from 'react'
import Text from '../../../Atoms/Text'
import ItemCounter from '../../../Organisms/ItemCounter'

import './style.css'

export class SubItem extends Component {

  render() {

    const { item, loading, className } = this.props;

    if (loading) {
      return (
        <div className={"subitem loading " + className}>
          <div className="header">
            <div className={'item left'}>
              <div className={'name'}></div>
              <div className={'price'}></div>
            </div>
            <div className={'item right'}>
            </div>
          </div>
          <div className={'body'}>
            <div className={'counterbtn'}></div>
          </div>
        </div>
      )
    }

    return (
      <div className={"subitem " + className}>
        <div className="header">
          <div className={'item left'}>
            <Text varient={'h3'} component={'div'} className={'name'}>{item.name}</Text>
            <Text varient={'body2semibold'} component={'div'} className={'price'}>{item.price}</Text>
          </div>
          <div className={'item right'}>
            <Text varient={'h4'} component={'div'} className={'available Count'}>{item.availableCount}</Text>
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
    availableCount: 25
  },
  loading: false,
}

export default SubItem
