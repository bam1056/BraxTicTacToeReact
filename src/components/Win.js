import React from 'react'

export default class Win extends React.Component {
  static propTypes = {
    winner: React.PropTypes.string
  }
  render () {
    return <h1 style={{textAlign: 'center', margin: '0 auto'}}>{this.props.winner}'s Win!</h1>
  }
}
