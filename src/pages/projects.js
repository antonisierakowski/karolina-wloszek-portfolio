import React, { useState } from "react"
import '../styles/projects.scss'
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../styles/global-styles.scss'
import projectsData from '../projectsData'
import Slider from "react-slick";
import {Link} from 'gatsby'
import ProjectCaption from '../components/ProjectCaption'



const Projects = ({location}) => {
  const [ isAnyHovered, setIsAnyHovered ] = useState(false);
  const [ hoveredIndex, setHoveredIndex ] = useState(null)

  const handleMouseEnter = (e, i) => {
    setIsAnyHovered(true)
    setHoveredIndex(i)

  }

  const handleMouseLeave = e => {
    setIsAnyHovered(false)
    setHoveredIndex(null)
  }

  const projects = projectsData.map((e, i) => {
    return (
      <div
        className='slide-container'
        key={e.title}
        onMouseEnter={e => handleMouseEnter(e, i)}
        onMouseLeave={handleMouseLeave}
      >
        <Link to='/' key={'link' + e.title}>
          <img
            key={'img' + e.title}
            alt={`project_${e.title}`}
            src={e.previewData.img}

            className={isAnyHovered && hoveredIndex !== i ? 'out-of-focus' : null}
          />
        </Link>
        {isAnyHovered && hoveredIndex === i ? <ProjectCaption key={'caption' + e.title} title={e.title} description={e.previewData.caption}/> : null}
      </div>
    )
  })

  const dots = projectsData.map((e,i) => {
    return <div className={hoveredIndex === i ? 'dot active' : 'dot'} />
  })



  const slickSettings = {
    dots: false,
    slidesToShow: 4,
    infinite: false,
    arrows: true,
    slidesToScroll: 2,
    lazyLoad: 'progressive'
  }

  return (
    <Layout fontColor='black' location={location.pathname}>
    <SEO title="Projekty" keywords={[`karolina włoszek`, `product design`, `design`, `portfolio`]} />
      <div id='projects-page'>
          <div className='slider-wrapper'>
            <Slider {...slickSettings}>
              {projects}
            </Slider>
          </div>
          <div className='dots'>
            {dots}
          </div>
      </div>
    </Layout>
  )
}

export default Projects
