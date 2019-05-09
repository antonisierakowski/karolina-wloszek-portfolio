import React from "react"
import { Link } from 'gatsby'
import '../styles/header.scss'

const Header = ({fontColor, location}) => {
  return (
    <header id='header' style={{color: fontColor}}>
      <div className='center'>
        <p><Link to='/'>Karolina Włoszek</Link></p>
        <ul>
          <li>
            <Link to={location !== '/projects/' ? '/projects/' : '/'} className={location !== '/projects/' ? 'hoverable' : null}>
              {location !== '/projects/' ? 'PROJEKTY' : 'X'}
            </Link>
          </li>
          <li>
            <Link to={location !== '/about-me/' ? '/about-me/' : '/'} className={location !== '/about-me/' ? 'hoverable' : null}>
              {location !== '/about-me/' ? 'O MNIE' : 'X'}
            </Link>
          </li>
        </ul>
      </div>
    </header>

  )
}

export default Header
