import React from "react"

import '../styles/index.scss'
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../styles/global-styles.scss'
import IntroText from '../components/IntroText'
import { Fade } from 'react-reveal'

const IndexPage = ({location}) => (
  <Layout fontColor='white' location={location}>
    <SEO title="Portfolio" keywords={[`karolina włoszek`, `product design`, `design`, `portfolio`]} />
      <div id='index-page' className='background'>
        <div className='center'>
          <div className='introduction-wrapper'>
            <Fade duration={1500}>
              <IntroText>
                Hi, I'm Karolina, a freelance designer based in Wrocław. Ice cream gummies carrot cake chocolate bar tootsie roll. Liquorice macaroon soufflé gingerbread. <span>Tu se obejrzyj.</span>
              </IntroText>
            </Fade>
          </div>
        </div>
      </div>
  </Layout>
)

export default IndexPage
