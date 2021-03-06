import React from "react"
// import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <script>
          
        </script>
      </body>
    </html>
  )
}

// HTML.propTypes = {
//   htmlAttributes: PropTypes.object,
//   headComponents: PropTypes.array,
//   bodyAttributes: PropTypes.object,
//   preBodyComponents: PropTypes.array,
//   body: PropTypes.string,
//   postBodyComponents: PropTypes.array,
// }
