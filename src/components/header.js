import React from "react"
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
  return (
    <HeaderContainer id='header' color={fontColor}>
      <div className='center'>
        <PageLink to='/'>Karolina Włoszek</PageLink>
        <ul>
          <li>
            <PageLink to={location !== '/projects/' ? '/projects/' : '/'} className={location !== '/projects/' ? 'hoverable' : null}>
              {location !== '/projects/' ? 'PROJEKTY' : 'X'}
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



export default Header