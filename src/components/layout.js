import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import i18n from './i18n'

import Header from "./header"

const Layout = ({ children, fontColor, location }) => {
  
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <div>
            <Header fontColor={fontColor} location={location} />
            <main>{children}</main>
          </div>
        </>
      )}
    />
  )

}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  fontColor: PropTypes.string,
  renderFooter: PropTypes.bool,
}

Layout.defaultProps = {
  fontColor: 'black',
  renderFooter: false,
}

export default Layout
