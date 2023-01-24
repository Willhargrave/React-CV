import React from 'react'

const EducationResults = (props) => {
    return(
        <div className='school-details'>
            <h5>{props.data.school}</h5>
            <p>{props.data.start}-{props.data.end}</p>
            <div className="delete-container">
            <button onClick={() => {props.handleDelete(props.data.id)}}>D</button>
        </div>
        </div>
           
    )

}
export  default EducationResults
