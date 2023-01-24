import React, { Component } from 'react';
import uniqid from "uniqid";
import ExperienceResults from './experienceResults';
class Experience extends Component {
    constructor() {
        super()
        this.state = {
        default: {
         company: "",
         from: "",
         end: ""
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

    const displayExperience = this.state.results.map((result) => {
        return <ExperienceResults data={result} key={result.id} />
    })
    return (
        <div className="experience">
            <h3>experience</h3>
            <form onSubmit={this.handleSubmit}>
                <input
                    onChange={this.handleChange}
                    value={this.state.default.company}
                    type="text"
                    name="company"
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
            <div className='display-experience'>
            {displayExperience}
            </div>
        </div>
    )
}
}


export default Experience