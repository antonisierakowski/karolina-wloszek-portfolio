import React from 'react'

export default function ProjectCaption({title, description}) {

    return (
        <div className='project-caption'>
            <p className='project-title'>{title}</p>
            <span className='project-description'>– {description}</span>
        </div>
  )
}
