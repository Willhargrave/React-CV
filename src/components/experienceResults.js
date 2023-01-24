import React from 'react'

const ExperienceResults = (props) => {
    return(
        <div className='experience-details'>
            <h5>{props.data.company}</h5>
            <p>{props.data.start}-{props.data.end}</p>
        </div>
    )
}
export  default ExperienceResults