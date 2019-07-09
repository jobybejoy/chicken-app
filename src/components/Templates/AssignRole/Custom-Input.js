import React, { Component } from 'react'
import './style.css'
import Text from '../../Atoms/Text'
import Button from '../../Atoms/Button'

import SearchIcon from '@material-ui/icons/Search'

export class Input extends Component {

  render() {

    console.log('Input ', this.props);


    const { name, value, className, varient, image } = this.props
    const { currentRefinement, isSearchStalled, refine } = this.props

    if (varient === "FILTER") {
      return (
        <div className="filterContainer">
          <input
            type="search"
            className={"custom-input filter filterText " + className}
            autoComplete={"false"}
            placeholder="Enter user's email"
            name={name} id={name}
            onChange={event => refine(event.currentTarget.value)}
            // required="true"
            value={currentRefinement}
          />
          <Button className="filterBtn" varient={'FAB'} name={'primary'}
            onClick={() => this.props.onSubmit()}
          >
            <SearchIcon />
          </Button>
        </div>
      )
    }

    return (

      <input
        type="text"
        className={"custom-input " + className}
        autoComplete={"false"}
        name={name} id={name}
        onChange={this.props.onChange}
        value={value} />
    )

  }
}

export default Input
