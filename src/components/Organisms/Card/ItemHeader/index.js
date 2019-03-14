import React, { Component } from 'react'
import Text from '../../../Atoms/Text'
import './style.css'

import ItemImage from '../../../../assets/images/87634548-white-goose-anser-anser-domesticus-isolated-on-a-white-background.jpg'

export class ItemHeader extends Component {

  render() {

    const { loading } = this.props;

    if (loading) {
      return (
        <div className={"itemheader container loading"}>
          <span className={'image'} />
          <span className={'text'} />
        </div>
      )
    }

    return (
      <div className={"itemheader container"}>
        <img src={ItemImage} className={'image'} />
        <Text className={'text'} varient="body2semibold">Duck</Text>
      </div>
    )
  }
}

ItemHeader.defaultProps = {

  onClick: () => { },
}

export default ItemHeader
