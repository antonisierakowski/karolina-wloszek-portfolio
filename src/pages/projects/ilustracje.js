import React from 'react'
import projectsData from '../../project-data/projectsData'
import Template from '../../components/page-template'

export default function Ilustracje({location}) {
  return (
    <Template data={projectsData[7]} location={location.pathname}/>
  )
}