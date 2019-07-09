import React, { Component } from 'react'
import './style.css'
import MetaCard from './MetaCard'
import { Link } from 'react-router-dom'

export class Dashboard extends Component {
  render() {

    const { meta } = this.props

    return (
      <div className={'dashboard container'}>
        <Link to={'/all/users'}><MetaCard name="Users" value={meta.users} className={'orange'} /></Link>
        <Link to={'/all/items'}><MetaCard name="Items" value={meta.items} className={'purple'} /></Link >
        <Link to={'/all/orders'}><MetaCard name="Orders" value={meta.orders} className={'green'} /></Link >
        <Link to={'/all/issues'}><MetaCard name="Issues" value={meta.issues} className={'red'} /></Link >
      </div >
    )
  }
}

export default Dashboard
