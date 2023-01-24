import React, { Component } from 'react';
import EditableLabel from 'react-editable-label';
import Skills from "./Skills";
import Education from './education';
import Experience from './experience';
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
                 <Education />
                </div>
                <div className='information'>
                    <Experience />
                </div>
                <div className='information'>
                    <Skills />
                </div>
            </div>

        )
    }
}

export default Personal;