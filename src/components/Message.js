import React from 'react'

export default class Message extends React.Component {
  static propTypes = {
    visible: React.PropTypes.string,
    text: React.PropTypes.string
  }
  render () {
    return <h1 style={{textAlign: 'center', margin: '0 auto'}} className={this.props.visible}>{this.props.text}</h1>
  }
}
