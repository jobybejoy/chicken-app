import React, { Component } from 'react'
import Text from '../../Atoms/Text'
import Button from '../../Atoms/Button'

import AddIcon from '@material-ui/icons/Add'
import SubIcon from '@material-ui/icons/Remove'

import './style.css'

export class Counter extends Component {

  // TODO : Get the counter working !!

  render() {

    return (
      <div className={"counter container"}>
        <Button className={"leftBtn"} varient={'FAB'}>
          <SubIcon />
        </Button>

        <Text className={'itemCount'} varient={'caption'}>
          Chicken 02
        </Text>

        <Button className={"rightBtn"} varient={'FAB'}>
          <AddIcon />
        </Button>
      </div>
    )
  }
}

Counter.defaultProps = {

  onClick: () => { },
}

export default Counter
