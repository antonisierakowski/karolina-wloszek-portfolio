import React from 'react'
import projectsData from '../../project-data/projectsData'
import Template from '../../components/page-template'

export default function Voicemail({location}) {
  return (
    <Template data={projectsData[10]} location={location.pathname}/>
  )
}