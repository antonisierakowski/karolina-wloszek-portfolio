import React from 'react'
import projectsData from '../../project-data/projectsData'
import Template from '../../components/page-template'

export default function Moduu({location}) {
  return (
    <Template data={projectsData[4]} location={location.pathname}/>
  )
}