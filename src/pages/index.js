import React from "react"

import '../styles/index.scss'
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../styles/global-styles.scss'
import IntroText from '../components/IntroText'

const IndexPage = ({location}) => (
  <Layout fontColor='white' location={location.pathname}>
    <SEO title="Portfolio" keywords={[`karolina włoszek`, `product design`, `design`, `portfolio`]} />
      <div className='center'>
        <div className='introduction-wrapper'>
          <IntroText>Hi, I'm Karolina, a freelance designer based in Wrocław. Ice cream gummies carrot cake chocolate bar tootsie roll. Liquorice macaroon soufflé powder gingerbread.</IntroText>
        </div>
      </div>
  </Layout>
)

export default IndexPage