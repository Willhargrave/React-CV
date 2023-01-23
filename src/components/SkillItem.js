import React from 'react'

const SkillItem = (props) => {
	return(
		<div className="skill-card">
			<div className="skill-name">
				<p className="addedSkills">{props.skill}</p>
			</div>
		</div>
	)
}

export default SkillItem