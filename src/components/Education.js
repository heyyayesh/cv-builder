import { nanoid } from 'nanoid';
import React from 'react';
import styles from './education.module.css';
import School from './School';

function Education() {
  const [schoolsArr, setSchoolsArr] = React.useState([<School key={nanoid()} id={nanoid()} />]);

  const handleEducationMouseEnter = () => {
    const btn = document.getElementById('addEducation');
    btn.classList.remove(styles.invisible);
  }

  const handleEducationMouseLeave = () => {
    const btn = document.getElementById('addEducation');
    btn.classList.add(styles.invisible);
  }

  const handleAddEducationClick = () => {
    setSchoolsArr(prev => [...prev, <School key={nanoid()} id={nanoid()} />]);
  }

  return (
    <div className={styles.Education} onMouseEnter={handleEducationMouseEnter} onMouseLeave={handleEducationMouseLeave}>
      <h2>Education</h2>
      <button id='addEducation' className={styles.invisible} onClick={handleAddEducationClick}><i className='fa-solid fa-plus'></i></button>
      {schoolsArr}
    </div>
  )
}

export default Education;