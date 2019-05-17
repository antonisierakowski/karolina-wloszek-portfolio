import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import TransitionLink from "gatsby-plugin-transition-link"

export default function PageLink(props) {
    
    return (
        <AniLink fade {...props} />
    )
    // return (
    //     <TransitionLink
    //         exit={{
    //             length: 1
    //         }}
    //         entry={{
    //             length: 1
    //          }}
    //         {...props}
    //     />
    // )
}
