import React from "react"

// import '../styles/projects.scss'
import Layout from "../components/layout"
import SEO from "../components/seo"
// import '../styles/global-styles.scss'

const Projects = ({location}) => (
  <Layout fontColor='black' location={location.pathname}>
    <SEO title="Projekty" keywords={[`karolina włoszek`, `product design`, `design`, `portfolio`]} />
      
  </Layout>
)

export default Projects
