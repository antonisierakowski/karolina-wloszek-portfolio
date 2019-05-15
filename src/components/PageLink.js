import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default function PageLink(props) {
    return (
        <AniLink fade {...props} />
    )
}
