import React, { Component } from 'react'
import Text from '../../../Atoms/Text'
import './style.css'

import ItemImage from '../../../../assets/images/87634548-white-goose-anser-anser-domesticus-isolated-on-a-white-background.jpg'

export class MiniCard extends Component {

  render() {

    const { loading, name, image, className } = this.props;

    if (loading) {
      return (
        <div className={"minicard container loading "}>
          <span className={'image'} />
          <span className={'text'} />
        </div>
      )
    }

    return (
      <div className={"minicard container " + (className && className)}>
        {
          image ?
            <img src={ItemImage} className={'image'} /> : <span className={'loading image'} />
        }
        <Text className={'text'} varient="body2semibold">{name || 'Duck'}</Text>
      </div>
    )
  }
}

MiniCard.defaultProps = {

  onClick: () => { },
}

export default MiniCard
