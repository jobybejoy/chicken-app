import React, { Component } from 'react'
import './style.css'

export const TextVarient = {
  h1: 'h1 heading',
  h2: 'h2 heading',
  h3: 'h3 heading',
  h4: 'h4 heading',
  h5: 'h5 heading',
  h6: 'h6 heading',
  body1: 'body1',
  body1link: 'body1 text_link semibold',
  body2: 'body2',
  body2semibold: 'body2 semibold',
  subheading: 'subheading',
  subheadinglink: 'subheading text_link',
  caption: 'caption',
  qoute: 'qoute',
  buttonText: 'buttonText',
  label: 'label',

  body: 'body',
}

export const TextComponent = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body: 'p',
  p: 'p',
  a: 'a'
}

export class Text extends Component {



  render() {

    const { varient, component } = this.props;

    let Component = component ? TextComponent[component] : 'p'

    return (
      <Component className={"text " + TextVarient[varient]}>
        {this.props.children}
      </Component>
    )
  }
}

Text.defaultProps = {
  varient: 'body1',
  component: 'body',
}

export default Text
