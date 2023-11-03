import { useState, useEffect } from 'react'

function Leaderboard() {
  return (
    <div className="post-match">
      <div className="post-match__form">
        <h2 className="post-match-form-header">Post your highscore!</h2>
        <ul className="post-match-form__score">
          <li className="post-match-form-score">Time : {window.score.time}</li>
          <li className="post-match-form-score">
            Score : {window.score.score}
          </li>
          <li className="post-match-form-score">Milk : {window.score.milk}</li>
        </ul>
        <form action="" className="post-match-form">
          <label htmlFor="name">
            Name
            <input type="text" name="" id="" />
          </label>
          <button className="post-match-form-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="post-match__leaderboard">
        <div className="post-match__header">
          <h2 className="post-match-title">Leader Board</h2>
          <div className="post-match__headers">
            <h3 className="post-match-header">Name</h3>
            <h3 className="post-match-header">Time</h3>
            <h3 className="post-match-header">Score</h3>
            <h3 className="post-match-header">Milk?</h3>
          </div>
        </div>
        <ul className="post-match-leaderboard">
          <li className="post-match__item">
            <h4 className="post-match-item">Dee Schnutz</h4>
            <h4 className="post-match-item">0:47</h4>
            <h4 className="post-match-item">1600</h4>
            <h4 className="post-match-item">6 Gallons</h4>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Leaderboard
