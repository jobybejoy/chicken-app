import React, { Component } from 'react'
import './style.css'

import { Highlight } from 'react-instantsearch-dom';
import Text from '../../Atoms/Text'

export class SuggestionItem extends Component {
  render() {

    const { suggestion } = this.props

    return (
      <div className={'suggestion container'}>
        {/* <img className={'user_image'} src={user.avatarUrl} alt="" /> */}
        {/* <div className={'i2'}> */}
        <Text className={"filterText"} component="div" varient="body2" >
          {suggestion}
        </Text>
        {/* </div> */}
        {/* <Text className={"order_id"} component="div" varient="h4" >{'#' +}</Text> */}
      </div>
    )
  }
}

export default SuggestionItem
