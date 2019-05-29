import React from 'react'

export default function MobileProjectCaption({title, description}) {


    return (
        <div className='mobile-project-caption' >
            <p className='project-title'>{title}</p>
            <span className='project-description'>– {description}</span>
        </div>
    )
}
