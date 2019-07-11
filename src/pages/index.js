import React from "react"
import '../styles/index.scss'
import Layout from "../components/layout"
import SEO from "../components/seo"
import IntroText from '../components/IntroText'
import { Fade } from 'react-reveal'
import background from '../images/main-bg.jpg'
import useAnimateWavesBackground from '../components/useAnimateWavesBackground'

import { translate } from "react-i18next"
import { getAnimatedLetterStyle } from "../utils"

const heading = ['H', 'e', 'l', 'l', 'o', '!']

const IndexPage = ({location, t}) => {
  useAnimateWavesBackground()

  return (
    <Layout fontColor='white' location={location}>
      <SEO title="Portfolio" keywords={[`karolina włoszek`, `product design`, `design`, `portfolio`]} />
        <div id='index-page' className='background' style={{background: `url(${background})`}}>
          <canvas id='background-canvas'/>
          <div className='center'>
            <div className='introduction-wrapper'>
              <Fade duration={1500}>
                <span className='title'>{heading.map((letter, index, array) => (
                  <span style={getAnimatedLetterStyle(index, array.length)}>{letter}</span>
                ))}</span>
              </Fade>
            </div>
          </div>
        </div>
    </Layout>
  )
}

export default translate('Index')(IndexPage)
