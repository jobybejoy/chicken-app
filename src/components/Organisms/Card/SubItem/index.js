import React, { Component } from 'react'
import Text from '../../../Atoms/Text'
import ItemCounter from '../../../Organisms/ItemCounter'

import './style.css'

//TODO Price Formating has to be done!!

export class SubItem extends Component {

  render() {

    const { subItem, loading, className, count, item, functions } = this.props;

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
            <Text varient={'h3'} component={'div'} className={'name'}>{subItem.name}</Text>
            <Text varient={'body2semibold'} component={'div'} className={'price'}>{subItem.price + " AED"}</Text>
          </div>
          <div className={'item right'}>
            <Text varient={'h4'} component={'div'} className={'available Count'}>{subItem.availableCount}</Text>
            <Text varient={'body2semibold'} component={'div'} className={'available Label'}>AVAILABLE</Text>
          </div>
        </div>
        <div className={'body'}>
          <ItemCounter withChip={true} name={subItem.name} count={count} item={item} subItem={subItem} maxCountValue={subItem.availableCount} functions={functions} />
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
