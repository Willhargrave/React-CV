import React from 'react'
import EditableLabel from 'react-editable-label';

const ExperienceResults = (props) => {
    return(
        <div className='details'>
            <h5><EditableLabel initialValue={props.data.company}/></h5>
            <p><EditableLabel initialValue={props.data.start}/>-<EditableLabel initialValue={props.data.end}/> </p>
            <div className="delete-container">
            <button onClick={() => {props.handleDelete(props.data.id)}}className="deleteButton">❌</button>
        </div>
        </div>
    )
}
export  default ExperienceResults