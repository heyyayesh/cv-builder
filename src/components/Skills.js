import React from 'react';
import EditableList from './EditableList';

function Skills() {
  const skillsArr = ['Html', 'Css', 'Javascript'];
  return (
    <EditableList heading="Skills" listItems={skillsArr}/>
  )
}

export default Skills;