import React, { Component } from 'react';
import uniqid from "uniqid";
import ExperienceResults from './experienceResults';
class Experience extends Component {
    constructor() {
        super()
        this.state = {
        default: {
         id: uniqid(),
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

handleDelete = (id) => {
    const newResults = this.state.results.filter(result => {
       return result.id !== id
    })
    this.setState({
      results: newResults
    })
  }
render() {

    const displayExperience = this.state.results.map((result) => {
        return <ExperienceResults data={result} key={result.id} handleDelete={this.handleDelete}/>
    })
    return (
        <div className='info-box'>
            <h3>Experience</h3>
            <form onSubmit={this.handleSubmit}>
                <input
                    onChange={this.handleChange}
                    value={this.state.default.company}
                    type="text"
                    name="company"
                    placeholder='Company Name'
                />
                <input
                    onChange={this.handleChange}
                    value={this.state.default.start}
                    type="text"
                    name="start"
                    placeholder='YYYY'
                    className='labelYear'
                />
                <input
                    onChange={this.handleChange}
                    value={this.state.default.end}
                    type="text"
                    name="end"
                    placeholder='YYYY'
                    className='labelYear'
                />
                   <button className="submit">Save</button>
            </form>
            <div className='display-experience'>
            {displayExperience}
            </div>
        </div>
    )
}
}


export default Experience