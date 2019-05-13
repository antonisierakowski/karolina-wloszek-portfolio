import React from 'react'
import projectsData from '../../project-data/projectsData'
import Template from '../../components/page-template'

export default function Skladak({location}) {
  return (
    <Template data={projectsData[3]} location={location.pathname}/>
  )
}