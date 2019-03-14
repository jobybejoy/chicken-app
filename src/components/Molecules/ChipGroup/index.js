import React, { Component } from 'react'
import Chip from '../../Atoms/Chip'
import './style.css'

export class ChipGroup extends Component {

  // TODO : On click Select the element/ CSS and JS selected value to parent
  // TODO : Horizontal Scroll
  // Try React Fragment without div as container.

  render() {
    const { propData, className } = this.props;

    return (
      <div className={'chipgroup ' + className}>
        {
          propData.map((d, index) => {
            return <Chip key={index} text={d.value} />
          })
        }
      </div>
    )
  }
}

ChipGroup.defaultProps = {
  propData: [{ value: 10 }, { value: 20 }, { value: 30 }],
  onClick: () => { },
  disabled: false,
}

export default ChipGroup
