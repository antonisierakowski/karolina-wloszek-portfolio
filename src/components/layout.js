/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"

const Layout = ({ children, fontColor, renderFooter, location }) => {
  
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
