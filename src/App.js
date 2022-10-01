/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/button-has-type */
import {Component} from 'react'

import Popup from 'reactjs-popup'

import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    showResult: false,
    gameResult: '',
    score: 0,
    yourImage: '',
    opponentImage: '',
  }

  onClickRock = () => {
    const yourImage = choicesList[0]
    const opponentImage = choicesList[Math.floor(Math.random() * 10)]
    if (opponentImage.id === 'SCISSORS') {
      this.setState(prevState => ({
        showResult: true,
        gameResult: 'YOU WON',
        score: prevState.score + 1,
        yourImage: yourImage.imageUrl,
        opponentImage: opponentImage.imageUrl,
      }))
    } else if (opponentImage.id === 'PAPER') {
      this.setState(prevState => ({
        showResult: true,
        gameResult: 'YOU LOSE',
        score: prevState.score - 1,
        yourImage: yourImage.imageUrl,
        opponentImage: opponentImage.imageUrl,
      }))
    } else {
      this.setState(prevState => ({
        showResult: true,
        gameResult: 'IT IS DRAW',
        score: prevState.score + 0,
        yourImage: yourImage.imageUrl,
        opponentImage: opponentImage.imageUrl,
      }))
    }
  }

  onClickScissor = () => {
    const yourImage = choicesList[1]
    const opponentImage = choicesList[Math.floor(Math.random() * 2)]
    if (opponentImage.id === 'PAPER') {
      this.setState(prevState => ({
        showResult: true,
        gameResult: 'YOU WON',
        score: prevState.score + 1,
        yourImage: yourImage.imageUrl,
        opponentImage: opponentImage.imageUrl,
      }))
    } else if (opponentImage.id === 'ROCK') {
      this.setState(prevState => ({
        showResult: true,
        gameResult: 'YOU LOSE',
        score: prevState.score - 1,
        yourImage: yourImage.imageUrl,
        opponentImage: opponentImage.imageUrl,
      }))
    } else {
      this.setState(prevState => ({
        showResult: true,
        gameResult: 'IT IS DRAW',
        score: prevState.score + 0,
        yourImage: yourImage.imageUrl,
        opponentImage: opponentImage.imageUrl,
      }))
    }
  }

  onClickPaper = () => {
    const yourImage = choicesList[2]
    const opponentImage = choicesList[Math.floor(Math.random() * 2)]
    if (opponentImage.id === 'ROCK') {
      this.setState(prevState => ({
        showResult: true,
        gameResult: 'YOU WON',
        score: prevState.score + 1,
        yourImage: yourImage.imageUrl,
        opponentImage: opponentImage.imageUrl,
      }))
    } else if (opponentImage.id === 'SCISSORS') {
      this.setState(prevState => ({
        showResult: true,
        gameResult: 'YOU LOSE',
        score: prevState.score - 1,
        yourImage: yourImage.imageUrl,
        opponentImage: opponentImage.imageUrl,
      }))
    } else {
      this.setState(prevState => ({
        showResult: true,
        gameResult: 'IT IS DRAW',
        score: prevState.score + 0,
        yourImage: yourImage.imageUrl,
        opponentImage: opponentImage.imageUrl,
      }))
    }
  }

  renderGameImages = () => (
    <div className="btn-images-container">
      <div className="game-images-container">
        <button
          className="result-img-container button"
          data-testid="rockButton"
          onClick={this.onClickRock}
        >
          <img
            className="bin-img"
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png"
            alt="ROCK"
          />
        </button>
        <button
          className="result-img-container button"
          data-testid="scissorsButton"
          onClick={this.onClickScissor}
        >
          <img
            className="bin-img"
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png"
            alt="SCISSORS"
          />
        </button>
      </div>
      <div className="result-bnt-container">
        <button
          className="button"
          data-testid="paperButton"
          onClick={this.onClickPaper}
        >
          <img
            className="bin-img"
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png"
            alt="PAPER"
          />
        </button>
      </div>
    </div>
  )

  onStartGame = () => {
    this.setState({
      showResult: false,
    })
  }

  renderResultView = () => {
    const {gameResult, yourImage, opponentImage} = this.state
    return (
      <div className="result-container">
        <div className="result-images-container">
          <div className="result-img-container">
            <h1 className="result-content">You</h1>
            <img className="bin-img" src={`${yourImage}`} alt="your choice" />
          </div>
          <div className="result-img-container">
            <h1 className="result-content">opponent</h1>
            <img
              className="bin-img"
              src={`${opponentImage}`}
              alt="opponent choice"
            />
          </div>
        </div>
        <div className="result-bnt-container">
          <h1 className="result-content">{gameResult}</h1>
          <button
            className="playAgain"
            type="button"
            onClick={this.onStartGame}
          >
            PLAY AGAIN
          </button>
        </div>
      </div>
    )
  }

  renderGameAndResultView = () => {
    const {showResult} = this.state
    return (
      <div className="renderView">
        {showResult ? this.renderResultView() : this.renderGameImages()}
      </div>
    )
  }

  render() {
    const {score} = this.state
    return (
      <div className="app-container">
        <div className="head-container">
          <div className="text-container">
            <h1 className="game-option">Rock Paper Scissors</h1>
          </div>
          <div className="score-container">
            <p className="score-text">Score</p>
            <p className="score-text" fontFamily="Roboto">
              {score}
            </p>
          </div>
        </div>
        <div className="game-container"> {this.renderGameAndResultView()}</div>
        <div className="pop-container">
          <Popup
            position="left-top"
            trigger={
              <button className="playAgain" type="button">
                RULES
              </button>
            }
          >
            {close => (
              <>
                <div className="popup-container">
                  <button type="button" onClick={() => close()}>
                    x
                  </button>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt=" rules"
                  />
                </div>
              </>
            )}
          </Popup>
        </div>
      </div>
    )
  }
}

export default App
