import React, { Component } from 'react'
import Text from '../../../Atoms/Text'
import './style.css'

import ItemImage from '../../../../assets/images/87634548-white-goose-anser-anser-domesticus-isolated-on-a-white-background.jpg'

export class ItemHeader extends Component {

  render() {

    const { loading, item, image, className } = this.props;

    if (loading) {
      return (
        <div className={"itemheader container loading " + className}>
          <span className={'image'} />
          <span className={'text'} />
        </div>
      )
    }

    return (
      <div className={"itemheader container " + className}>
        {
          item.url ?
            <img src={item.url || ItemImage} className={'image'} /> : <span className={'loading image'} />
        }
        <Text className={'text'} varient="body2semibold">{item.name}</Text>
      </div>
    )
  }
}

ItemHeader.defaultProps = {
  item: {
    name: 'default Name',
    url: 'default url'
  },
  onClick: () => { },
}

export default ItemHeader
