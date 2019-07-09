import React, { useEffect, useRef, useState } from "react"
import '../styles/projects.scss'
import Layout from "../components/layout"
import SEO from "../components/seo"
import projectsData from '../project-data/projectsData'
import Slider from "react-slick";
import PageLink from '../components/PageLink'
import ProjectCaption from '../components/ProjectCaption'
import useCursorScreenHalf from '../components/useCursorScreenHalf'
import MobileProjectCaption from '../components/MobileProjectCaption'
import { translate } from "react-i18next"
import useSliderScrollHandler from "../custom-hooks/useSliderScrollHandler"
import Hamster from "hamsterjs"
import { throttle } from "../utils"

const programaticSlideTime = 400
const scrollDeltaThreshold = 3

const Projects = ({location, lng}) => {
  const [ isAnyHovered, setIsAnyHovered ] = useState(false)
  const [ hoveredIndex, setHoveredIndex ] = useState(null)
  const cursorScreenHalf = useCursorScreenHalf();

  // const sliderRef = useRef(null)
  // useEffect(() => {
  //   const sliderRef = sliderRef.current
  //   const hamster = Hamster(document.getElementById('projects-page'))
  //   hamster.wheel(throttle((event, delta, deltaX, deltaY) => {
  //     if (Math.abs(deltaX) > scrollDeltaThreshold || Math.abs(deltaY) > scrollDeltaThreshold) {
  //       if (deltaX < 0 || deltaY < 0) {
  //         sliderRef.slickPrev()
  //       } else {
  //         sliderRef.slickNext()
  //       }
  //     }
  //   }, programaticSlideTime))
  //
  //   return () => {
  //     hamster.unwheel()
  //   }
  // }, [])

  const handleMouseEnter = (i) => {
    setIsAnyHovered(true)
    setHoveredIndex(i)
  }

  const handleMouseLeave = () => {
    setIsAnyHovered(false)
    setHoveredIndex(null)
  }

  const sliderRef = useSliderScrollHandler(programaticSlideTime, projectsData.length, hoveredIndex, handleMouseEnter)

  const projects = projectsData.map((project, i) => {
    return (
      <div
        className='slide-container'
        key={project.title.en}
        onMouseEnter={() => handleMouseEnter(i)}
        onMouseLeave={handleMouseLeave}
      >
        <PageLink to={'/projects/' + project.route} key={'link' + project.title}>
          <img
            alt={'cover of ' + project.title.en}
            src={project.previewData.img}
            className={isAnyHovered && hoveredIndex !== i ? 'out-of-focus' : null}
          />
        </PageLink>
        {isAnyHovered && hoveredIndex === i ? <ProjectCaption title={lng === 'en' ? project.title.en : project.title.pl} description={lng === 'en' ? project.previewData.caption.en : project.previewData.caption.pl} cursorScreenHalf={cursorScreenHalf} /> : null}
        <MobileProjectCaption title={lng === 'en' ? project.title.en : project.title.pl} description={lng === 'en' ? project.previewData.caption.en : project.previewData.caption.pl} cursorScreenHalf={cursorScreenHalf} />
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
    speed: programaticSlideTime,
    responsive: [
      {
        breakpoint: 599,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          swipeToSlide: true,
        }
      },
      {
        breakpoint: 899,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          swipeToSlide: true,
        }
      },
    ]
  }
  
  return (
    <Layout fontColor='inherit' location={location.pathname}>
    <SEO title="Projekty" keywords={[`karolina włoszek`, `product design`, `design`, `portfolio`]}/>
      <div id='projects-page' className='background'>
          <div className='slider-wrapper'>
            <Slider ref={sliderRef} {...slickSettings}>
              {projects}
            </Slider>
          </div>
          <div className='dots nonslick'>
            {dots}
          </div>
      </div>
    </Layout>
  )
}

export default translate()(Projects)