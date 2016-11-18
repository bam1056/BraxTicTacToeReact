import React, { Component } from 'react'
import GameBoard from './GameBoard'

export default class App extends Component {
  render () {
    return <div>
      <h1 style={{textAlign: 'center'}}>Tic Tac Toe</h1>
      <GameBoard />
    </div>
  }
}
