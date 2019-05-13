import React from 'react'
import projectsData from '../../project-data/projectsData'
import Template from '../../components/page-template'

export default function AlbumCover({location}) {
  return (
    <Template data={projectsData[9]} location={location.pathname}/>
  )
}