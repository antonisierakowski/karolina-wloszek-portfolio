import React, { useState, useEffect } from "react"
import '../styles/header.scss'
import styled from 'styled-components'
import PageLink from './PageLink'

const HeaderContainer = styled.header`
  color: ${props => props.color};
  .center {
    ul {
      .hoverable:before, .hoverable:after {
            content: '';
            position: absolute;
            width: 0%;
            height: 0.12rem;
            top: 50%;
            margin-top: -0.5px;
            background: #fff;
        }
        
        .hoverable:before {
            left: 0;
        }
        .hoverable:after {
            right: 0;
            background: ${props => props.color === 'inherit' ? '#282828' : props.color };
            transition: width 0.8s cubic-bezier(0.22, 0.61, 0.36, 1);
        }
        
        .hoverable:hover:before {
            background: ${props => props.color === 'inherit' ? '#282828' : props.color };
            width: 100%;
            transition: width 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
        }
        
        .hoverable:hover:after {
            background: transparent;
            width: 100%;
            transition: 0s;
        }
    }
  }
`

const Header = ({fontColor, location}) => {
  const [ animationState, setAnimationState ] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAnimationState(false)
    },300)

    return () => clearTimeout(timeoutId)
  })

  return (
    <HeaderContainer id='header' color={fontColor}>
      <div className='center'>
        <PageLink to='/'>Karolina Włoszek</PageLink>
        <ul>
          <li>
            <PageLink to={location !== '/projects/' ? '/projects/' : '/'} className={location !== '/projects/' ? 'hoverable' : null}>
              {location !== '/projects/'
                ?
                  'PROJEKTY'
                :
                  // <button className={animationState ? "hamburger hamburger--slider" : "hamburger hamburger--slider is-active"} type="button">
                  //   <span className="hamburger-box">
                  //     <span className="hamburger-inner" ></span>
                  //   </span>
                  // </button>
                  <span className={ animationState ? 'cross' : 'cross active'} style={{color: 'white'}}>PROJEKTY</span>
                }
            </PageLink>
          </li>
          <li>
            <PageLink to={location !== '/about-me/' ? '/about-me/' : '/'} className={location !== '/about-me/' ? 'hoverable' : null}>
              {location !== '/about-me/' ? 'O MNIE' : 'X'}
            </PageLink>
          </li>
        </ul>
      </div>
    </HeaderContainer>
  )
}



// {/* <HeaderContainer id='header' color={fontColor}>
// <div className='center'>
//   <PageLink to='/'>Karolina Włoszek</PageLink>
//   <ul>
//     <li>
//       <PageLink to='/projects/' className='hoverable' activeClassName='active-link'>
//         PROJEKTY
//       </PageLink>
//     </li>
//     <li>
//       <PageLink to='/about-me/' className='hoverable' activeClassName='active-link'>
//         O MNIE
//       </PageLink>
//     </li>
//   </ul>
// </div>
// </HeaderContainer> */}

export default Header