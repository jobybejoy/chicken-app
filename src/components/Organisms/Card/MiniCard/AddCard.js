import React, { Component } from 'react'
import Text from '../../../Atoms/Text'
import './style.css'

import AddIcon from '@material-ui/icons/AddCircleOutline'

export class MiniCard extends Component {

  render() {

    const { loading, title, icon, className } = this.props;

    if (loading) {
      return (
        <div className={"minicard container loading "}>
          <span className={'image'} />
          <span className={'text'} />
        </div>
      )
    }

    return (
      <div className={"minicard container bordered invisible " + (className && className)}>
        {/* {
          icon ? */}
        <AddIcon className={'text-brand icon'} />
        {/* : <span className={'loading image'} />
        } */}
        <Text className={'text text-brand'} varient="body2semibold">{title}</Text>
      </div>
    )
  }
}

MiniCard.defaultProps = {

  onClick: () => { },
}

export default MiniCard
