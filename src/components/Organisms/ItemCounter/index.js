import React, { Component } from 'react'
import './style.css'
import ChipGroup from '../../Molecules/ChipGroup'
import Counter from '../../Molecules/Counter'


export class ItemCounter extends Component {
  render() {
    const { name, text } = this.props
    return (
      <React.Fragment>
        <ChipGroup propData={[15, 30, 45, 60, 75, 100]} />
        <Counter maxCountValue={10} />
      </React.Fragment>
    )
  }
}

ItemCounter.defaultProps = {
  onClick: () => { },
}

export default ItemCounter
