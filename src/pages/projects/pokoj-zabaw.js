import React from 'react'
import projectsData from '../../project-data/projectsData'
import Template from '../../components/page-template'

export default function PokojZabaw({location}) {
  return (
    <Template data={projectsData[5]} location={location.pathname}/>
  )
}