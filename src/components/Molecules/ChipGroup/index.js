import React, { Component } from 'react'
import Chip from '../../Atoms/Chip'
import './style.css'

export class ChipGroup extends Component {

  // TODO : On click Select the element/ CSS and JS selected value to parent
  // TODO : Horizontal Scroll
  // TODO : Work Chip along with this counter!!
  // Try React Fragment without div as container.

  render() {
    const { propData, className } = this.props;

    return (
      <div className={'chipgroup ' + className}>
        {
          propData.map((d, index) => {
            return <Chip key={index} text={d} />
          })
        }
      </div>
    )
  }
}

ChipGroup.defaultProps = {
  propData: [10, 20, 30, 40, 50],
  onClick: () => { },
  disabled: false,
}

export default ChipGroup
