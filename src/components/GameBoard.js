import React, { Component } from 'react'
import Win from './Win'
import Message from './Message'
const BOARD = Array(3).fill([0, 0, 0])

export default class GameBoard extends Component {
  constructor () {
    super()
    this.state = {
      won: false,
      currentScreen: 'Game',
      currentTurn: 'X',
      gameState: [[NaN, NaN, NaN], [NaN, NaN, NaN], [NaN, NaN, NaN]]
    }
  }

  checkForWinner = () => {
    const { gameState } = this.state
    if (
      (gameState[0][0] === gameState[0][1] && gameState[0][1] === gameState[0][2]) || (gameState[1][0] === gameState[1][1] && gameState[1][1] === gameState[1][2]) || (gameState[2][0] === gameState[2][1] && gameState[2][1] === gameState[2][2]) || (gameState[0][0] === gameState[1][1] && gameState[1][1] === gameState[2][2]) || (gameState[0][2] === gameState[1][1] && gameState[1][1] === gameState[2][0]) || (gameState[0][0] === gameState[1][0] && gameState[1][0] === gameState[2][0]) || (gameState[0][1] === gameState[1][1] && gameState[1][1] === gameState[2][1]) || (gameState[0][2] === gameState[1][2] && gameState[1][2] === gameState[2][2])
    ) {
      return true
    }
    return false
  }

  handleClick = (e) => {
    if (e.target.textContent !== '') {
      return false
    }
    e.target.textContent = this.state.currentTurn
    let currentMoveIndex = e.target.id.split('')
    let newGameState = this.state.gameState.slice()
    newGameState[currentMoveIndex[0]][currentMoveIndex[1]] = this.state.currentTurn
    this.setState({
      currentTurn: this.state.currentTurn === 'X' ? 'O' : 'X',
      gameState: newGameState
    })
    if (this.checkForWinner()) this.setState({currentScreen: 'Win', won: true})
  }

  render () {
    const gameboard = this.state.currentScreen === 'Game' ? BOARD.map((row, i) => {
      return row.map((cell, j) => <div key={j} id={`${i}${j}`} onClick={this.handleClick} style={{backgroundColor: 'red', width: '100px', height: '100px', border: '2px solid black', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center'}} />)
    }
  ) : <Win winner={this.state.currentTurn === 'X' ? 'O' : 'X'} />
    return <div className='gameboard' style={{display: 'flex', flexWrap: 'wrap', width: '325px', margin: '0 auto'}}>
      {gameboard}
      <Message visible={this.state.won ? 'no' : 'yes'} text={`It's ${this.state.currentTurn}'s Turn`} />
    </div>
  }
}
