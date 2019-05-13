import React from 'react'
import projectsData from '../../project-data/projectsData'
import Template from '../../components/page-template'

export default function Rogi({location}) {
  return (
    <Template data={projectsData[2]} location={location.pathname}/>
  )
}