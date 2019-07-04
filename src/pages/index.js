import React from "react"
import '../styles/index.scss'
import Layout from "../components/layout"
import SEO from "../components/seo"
import IntroText from '../components/IntroText'
import { Fade } from 'react-reveal'
import background from '../images/main-bg.jpg'
import useAnimateWavesBackground from '../components/useAnimateWavesBackground'

import { translate } from "react-i18next"

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
                <IntroText city={t('city')}>
                  {t('intro-part1')}<span></span>.<br/>{t('intro-part2')}<span>{t('intro-link')}</span>
                </IntroText>
              </Fade>
            </div>
          </div>
        </div>
    </Layout>
  )
}

export default translate('Index')(IndexPage)
