import React from 'react'
import projectsData from '../../project-data/projectsData'
import Template from '../../components/page-template'

export default function Moduu({location}) {
  const i = 4
  return (
    <Template data={projectsData[i]} nextData={projectsData[i + 1 === projectsData.length ? 0 : i + 1]} location={location.pathname}/>
  )
}