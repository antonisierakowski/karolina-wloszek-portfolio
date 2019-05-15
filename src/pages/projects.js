import React, { useState } from "react"
import '../styles/projects.scss'
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../styles/global-styles.scss'
import projectsData from '../project-data/projectsData'
import Slider from "react-slick";
import {Link} from 'gatsby'
import ProjectCaption from '../components/ProjectCaption'
import useCursorScreenHalf from '../components/useCursorScreenHalf'


const Projects = ({location}) => {
  const [ isAnyHovered, setIsAnyHovered ] = useState(false)
  const [ hoveredIndex, setHoveredIndex ] = useState(null)
  const cursorScreenHalf = useCursorScreenHalf();

  const handleMouseEnter = (i) => {
    setIsAnyHovered(true)
    setHoveredIndex(i)
  }

  const handleMouseLeave = () => {
    setIsAnyHovered(false)
    setHoveredIndex(null)
  }

  const projects = projectsData.map((project, i) => {
    return (
      <div
        className='slide-container'
        key={project.title}
        onMouseEnter={() => handleMouseEnter(i)}
        onMouseLeave={handleMouseLeave}
      >
        <Link to={'/projects/' + project.route} key={'link' + project.title}>
          <img
            alt={'img' + project.title}
            src={project.previewData.img}
            className={isAnyHovered && hoveredIndex !== i ? 'out-of-focus' : null}
          />
        </Link>
        {isAnyHovered && hoveredIndex === i ? <ProjectCaption title={project.title} description={project.previewData.caption} cursorScreenHalf={cursorScreenHalf} /> : null}
      </div>
    )
  })

  const dots = projectsData.map((e,i) => {
    return <div key={e.title + i} className={hoveredIndex === i ? 'dot active' : 'dot'} />
  })



  const slickSettings = {
    dots: false,
    slidesToShow: 4,
    infinite: true,
    arrows: true,
    slidesToScroll: 2,
    lazyLoad: 'progressive',
    speed: 400,
  }
  
  return (
    <Layout fontColor='inherit' location={location.pathname}>
    <SEO title="Projekty" keywords={[`karolina włoszek`, `product design`, `design`, `portfolio`]}/>
      <div id='projects-page' className='background'>
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