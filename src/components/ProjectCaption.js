import React from 'react'

export default function ProjectCaption({title, description, cursorScreenHalf}) {


    return (
        <div className='project-caption' style={ cursorScreenHalf === 'right' ? {right: '50%', textAlign: 'right'} : {left: '50%'} }>
            <p className='project-title'>{title}</p>
            <span className='project-description'>– {description}</span>
        </div>
    )
}
