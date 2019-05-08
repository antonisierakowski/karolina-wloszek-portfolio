import React from "react"
import { Link } from 'gatsby'
import '../styles/header.scss'

const Header = props => {
  return (
    <header id='header' style={{color: props.fontColor}}>
      <div className='center'>
        <p>Karolina Włoszek</p>
        <ul>
          <li><Link to='/projects/'>PROJEKTY</Link></li>
          <li><Link to='/about-me/'>O MNIE</Link></li>
        </ul>
      </div>
    </header>

  )
}

export default Header
