import React from 'react'
import projectsData from '../../project-data/projectsData'
import Template from './template'

export default function Mula() {
  return (
    <Template data={projectsData[0]} />
  )
}
