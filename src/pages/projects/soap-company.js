import React from 'react'
import projectsData from '../../project-data/projectsData'
import Template from './template'

export default function SoapCompany({location}) {
  return (
    <Template data={projectsData[1]} location={location.pathname}/>
  )
}