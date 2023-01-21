import React, { Component } from 'react';
import EditableLabel from 'react-editable-label';

class Personal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='personal'>
            <div className='information'>
                <h3>Personal Information </h3>
                <EditableLabel
                    initialValue={'First Name'}
                />
                 <EditableLabel
                    initialValue={'Last Name'}
                />
                <EditableLabel
                    initialValue={'Address'}
                />
            </div>
            <div className='information'>
              <h3>Education</h3>
              <EditableLabel
                    initialValue={'School Name'}
                />
                 <EditableLabel
                    initialValue={'Duration'}
                />
                <EditableLabel
                    initialValue={'Grade'}
                />
            </div>
            <div className='information'>
            <h3>Work Experience</h3>
              <EditableLabel
                    initialValue={'Company Name'}
                />
                 <EditableLabel
                    initialValue={'Duration'}
                />
            </div>
            <div className='information'>
            <h3>Skills</h3>
              <EditableLabel
                    initialValue={'Skill'}
                />
            </div>
            </div>

        )
    }
}

export default Personal;