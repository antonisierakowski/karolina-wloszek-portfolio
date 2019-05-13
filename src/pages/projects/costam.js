import React from 'react'
import projectsData from '../../project-data/projectsData'
import Template from '../../components/page-template'

export default function Costam({location}) {
  return (
    <Template data={projectsData[6]} location={location.pathname}/>
  )
}