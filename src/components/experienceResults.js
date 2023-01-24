import React from 'react'

const ExperienceResults = (props) => {
    return(
        <div className='experience-details'>
            <h5>{props.data.company}</h5>
            <p>{props.data.start}-{props.data.end}</p>
            <div className="delete-container">
            <button onClick={() => {props.handleDelete(props.data.id)}}>D</button>
        </div>
        </div>
    )
}
export  default ExperienceResults