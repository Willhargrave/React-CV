import React, { Component } from 'react';
import uniqid from 'uniqid'
import EducationResults from './educationResults';
class Education extends Component {

    constructor() {
        super()
        const UID = uniqid()
        this.state = {
            default: {
                id: UID,
                school: "",
                start: "",
                end: "",
            },
            results: []
        }
    }
    handleChange = (e) => {
        const { name, value } = e.target

        this.setState({
            default: { ...this.state.default, [name]: value }
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            results: [...this.state.results, this.state.default]
        })
    }

    handleDelete = (id) => {
        const newResults = this.state.results.filter(result => {
           return result.id !== id
        })
        this.setState({
          results: newResults
        })
      }
    
    render() {

        const displayEducation = this.state.results.map((result) => {
            return <EducationResults data={result} key={result.id} handleDelete={this.handleDelete}/>
        })

        return (
            <div className='info-box'>
                <h3>Education</h3>
                <form onSubmit={this.handleSubmit}>
                    <input
                        className="label"
                        onChange={this.handleChange}
                        value={this.state.default.school}
                        type="text"
                        name="school"
                        placeholder='Enter Your School/Instution'
                    />
                    <input
                        className="labelYear"
                        onChange={this.handleChange}
                        value={this.state.default.start}
                        type="text"
                        name="start"
                        placeholder='YYYY'
                    />
                    <input
                        className="labelYear"
                        onChange={this.handleChange}
                        value={this.state.default.end}
                        type="text"
                        name="end"
                        placeholder='YYYY'
                    />
                <button className="submit">Save</button>
                </form>
                <div className='display-education'>
                {displayEducation}
                </div>
            </div>
        )
    }
}



export default Education; 
