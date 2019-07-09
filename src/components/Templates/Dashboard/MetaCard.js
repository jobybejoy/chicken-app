import React, { Component } from 'react'
import SV from '../../../assets/Vector.svg'
import Text from '../../Atoms/Text'

export class MetaCard extends Component {
  render() {

    const { name, value, className, onClick } = this.props

    return (
      <div className={'metaCard ' + className}>
        <Text className={"metaName"} component="div" varient="h3">{name}</Text>
        <img src={SV} className={"metaSVG"} />
        <Text className={"metaCount"} component="div" varient="h1">{value}</Text>
      </div>
    )
  }
}

export default MetaCard
