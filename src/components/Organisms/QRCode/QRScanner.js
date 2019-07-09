import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import QrReader from 'react-qr-reader'
import Button from '../../Atoms/Button'

import './style.css'

// * Add redirect setting option

export class QRScanner extends Component {
  state = {
    url: '',
    order_id: null,
    uid: null,
    redirect: false
  }

  handleScan = data => {
    if (data) {
      const [protocol, n, hostname, deliver, order, order_id, user_id] = data.split('/')
      this.setState({
        url: data,
        order_id: order_id,
        uid: user_id
      })
      // this.props.history.push('/deliver/order/' + order_id + '/' + user_id)
    }
  }

  handleError = err => {
    console.log('An Error has occured');

    console.error(err)
  }

  toggleRedirect() {
    this.setState({
      redirect: this.state.redirect === true ? false : true
    })
  }


  render() {
    console.log(this.props);

    return (
      <div>
        <QrReader
          delay={500}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '100%' }}
        />

        <div className="btn-container">
          {/* <Button varient={this.state.redirect == true ? 'PRIMARY' : 'OUTLINE'} size={'MEDIUM'} name={'primary'}
            onClick={() => this.toggleRedirect()}>
            Redirect {this.state.redirect + " "}
          </Button> */}
          {
            this.state.url !== "" ?
              <React.Fragment>
                <Button varient={'PRIMARY'} name={'primary'} disabled={this.state.url === ""}
                  onClick={() => this.props.history.push('/deliver/order/' + this.state.order_id + '/' + this.state.uid)}>
                  Deliver Order {this.state.order_id}
                </Button>

              </React.Fragment>
              :
              <Button varient={'PRIMARY'} name={'primary'} disabled={true}>No Result</Button>
          }
        </div>

      </div>
    )
  }
}

export default QRScanner