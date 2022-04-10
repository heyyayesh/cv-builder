import { nanoid } from 'nanoid';
import React from 'react';
import styles from './experience.module.css';
import Job from './Job';

function Experience() {
  const [jobsArr, setJobsArr] = React.useState([<Job key={nanoid()} id={nanoid()} />]);

  const handleExperienceMouseEnter = () => {
    const btn = document.getElementById('addExperience');
    btn.classList.remove(styles.invisible);
  }

  const handleExperienceMouseLeave = () => {
    const btn = document.getElementById('addExperience');
    btn.classList.add(styles.invisible);
  }

  const handleAddExperienceClick = () => {
    console.log('clicked');
    setJobsArr(prev => [...prev, <Job key={nanoid()} id={nanoid()} />]);
  }

  return (
    <div className={styles.Experience} onMouseEnter={handleExperienceMouseEnter} onMouseLeave={handleExperienceMouseLeave}>
      <h2>Experience</h2>
      <button id='addExperience' className={styles.invisible} onClick={handleAddExperienceClick}><i className='fa-solid fa-plus'></i></button>
      {jobsArr}
    </div>
  )
}

export default Experience;