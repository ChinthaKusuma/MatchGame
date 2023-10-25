import './index.css'

const ScoreCard = props => {
  // eslint-disable-next-line
  const {count, startGame1} = props
  const startGame = () => {
    startGame1()
  }
  return (
    <div className="score1">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
          className="img123"
        />
      </div>
      <p className="para2">YOUR SCORE</p>
      <p className="heading2">{count}</p>
      <button className="btn3" type="button" onClick={startGame}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
          className="img2"
        />
        <p className="para22">PLAY AGAIN</p>
      </button>
    </div>
  )
}
export default ScoreCard
