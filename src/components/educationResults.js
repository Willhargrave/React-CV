import React from 'react'
import EditableLabel from 'react-editable-label';
const EducationResults = (props) => {
    return(
        <div className='school-details'>
            <h3><EditableLabel initialValue={props.data.school}/></h3>
            <p><EditableLabel initialValue={props.data.start}/>-<EditableLabel initialValue={props.data.end}/> </p>
            <div className="delete-container">
            <button onClick={() => {props.handleDelete(props.data.id)}}>D</button>
        </div>
        </div>
           
    )

}
export  default EducationResults
