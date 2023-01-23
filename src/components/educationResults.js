import React from 'react'

const EducationResults = (props) => {
    return(
        <div className='school-details'>
            <h5>{props.data.school}</h5>
            <p>{props.data.start}-{props.data.end}</p>
        </div>
    )
}
export  default EducationResults