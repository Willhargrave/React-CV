import React, { Component } from 'react';
import uniqid from 'uniqid'
import EducationResults from './educationResults';
class Education extends Component {

    constructor() {
        super()
        this.state = {
            default: {
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
    render() {

        const displayEducation = this.state.results.map((result) => {
            return <EducationResults data={result} key={result.id} />
        })
        return (
            <div className="education">
                <h3>Education</h3>
                <form onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleChange}
                        value={this.state.default.school}
                        type="text"
                        name="school"
                    />
                    <input
                        onChange={this.handleChange}
                        value={this.state.default.start}
                        type="text"
                        name="start"
                    />
                    <input
                        onChange={this.handleChange}
                        value={this.state.default.end}
                        type="text"
                        name="end"
                    />
                    <button type="submit">Add</button>
                </form>
                <div className='display-education'>
                {displayEducation}
                </div>
            </div>
        )
    }
}



export default Education; 
