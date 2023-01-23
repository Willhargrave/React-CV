import React, { Component } from 'react';
import uniqid from "uniqid";
import SkillItem from './SkillItem';


class Skills extends Component {

  constructor() {
    super()
    this.state = {
      skill: "",
      skills: []
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target

    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
		e.preventDefault()

		this.setState({
			skills: [...this.state.skills, this.state.skill]
		})
	}

  render() {
    const { skill, skills } = this.state;

    const displaySkill = this.state.skills.map((skill) => {
      return <SkillItem skill={skill} key={uniqid()} />
    })
    return (
      <div className='skills'>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={skill.text}
            type="text"
            name="skill"
          />
          <button type="submit">Add Skill</button>
        </form>
        <div className='displaySkills'>
          {displaySkill}
        </div>
      </div>
    )
  }

}


export default Skills;