import React from 'react'
import projectsData from '../../project-data/projectsData'
import Template from '../../components/page-template'

export default function Mula({location}) {
  return (
    <Template data={projectsData[0]} location={location.pathname}/>
  )
}
