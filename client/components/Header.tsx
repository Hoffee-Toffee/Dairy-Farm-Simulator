import { useState, useEffect } from 'react'

function Header() {
  return (
    <>
      <header className="header">
        <div className="header__logo">
          <h1 className="header-logo">Dairy Farm Simulator</h1>
        </div>
        <ul className="header__scores">
          <li className="header-score">
            <img src="./public/img/milk-0.png" alt="" />
          </li>
          <li className="header-score">{window.score.score}</li>
          <li className="header-score">{window.score.milk}</li>
        </ul>
      </header>
    </>
  )
}

export default Header
