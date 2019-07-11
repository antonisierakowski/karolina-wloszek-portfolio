import React from "react"
import '../styles/index.scss'
import Layout from "../components/layout"
import SEO from "../components/seo"
import IntroText from '../components/IntroText'
import { Fade } from 'react-reveal'
import useAnimateWavesBackground from '../components/useAnimateWavesBackground'

import { translate } from "react-i18next"
import { getAnimatedLetterStyle } from "../utils"
import Slide from "react-reveal/Slide"
import { useFullPageScroll } from "../custom-hooks/useFullPageScroll"

const heading = ['H', 'e', 'l', 'l', 'o', '!']

const IndexPage = ({location, t}) => {
  useAnimateWavesBackground()
  useFullPageScroll()

  return (
    <Layout fontColor='white' location={location}>
      <SEO title="Portfolio" keywords={[`karolina włoszek`, `product design`, `design`, `portfolio`]} />
        <div id='index-page'>

          <div className='full-height-page'>
            <canvas id='background-canvas'/>
            <div className='center'>
              <div className='introduction-wrapper'>
                <Fade duration={1500}>
                <span className='title'>{heading.map((letter, index, array) => (
                  <span style={getAnimatedLetterStyle(index, array.length)}>{letter}</span>
                ))}
                </span>
                </Fade>
              </div>
            </div>
            <Slide bottom>
              <div className='scroll-indicator'>
                <div><span>{t('Scroll')}</span></div>
              </div>
            </Slide>
          </div>

          <div className='full-height-page'>
            <div className='center'>
            <div className='introduction-wrapper'>
              <IntroText>
                I'm Karolina, a freelance graphic and product designer based in Wrocław. <span>Let's meet!</span>
              </IntroText>
            </div>
          </div>
          </div>

        </div>
    </Layout>
  )
}

export default translate('Index')(IndexPage)
