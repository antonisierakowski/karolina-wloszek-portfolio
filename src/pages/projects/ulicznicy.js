import React from 'react'
import projectsData from '../../project-data/projectsData'
import Template from '../../components/page-template'

export default function Ulicznicy({location}) {
  return (
    <Template data={projectsData[8]} location={location.pathname}/>
  )
}