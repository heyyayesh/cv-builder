import React from 'react';
import styles from './school.module.css';

function School (props) {
  const [formVisible, setFormVisible] = React.useState(false);
  const [deleted, setDeleted] = React.useState(false);

  const [school, setSchool] = React.useState({
    from: 'August 2017',
    to: 'April 2022',
    course: 'Bachelors in Technology',
    institution: 'IIT Bombay',
    place: 'Mumbai',
    marks: '69%',
    id: props.id,
  });

  const handleEditSchoolClick = () => {
    setFormVisible(true);
  }

  const handleSchoolMouseEnter = () => {
    const btn1 = document.getElementById(`editSchool${school.id}`);
    const btn2 = document.getElementById(`deleteSchool${school.id}`);
    btn1.classList.remove(`${styles.invisible}`);
    btn2.classList.remove(`${styles.invisible}`);
  }

  const handleSchoolMouseLeave = () => {
    const btn1 = document.getElementById(`editSchool${school.id}`);
    const btn2 = document.getElementById(`deleteSchool${school.id}`);
    btn1.classList.add(`${styles.invisible}`);
    btn2.classList.add(`${styles.invisible}`);
  }

  const handleChange = (e) => {
    const {name, value} = e.target;

    setSchool(prevSchool => ({
      ...prevSchool,
      [name]: [value]
    }));
  }

  const handleSaveClick = () => {
    setFormVisible(false);
  }

  const handleDeleteSchoolClick = () => {
    setDeleted(true);
  }

  return (
    
    deleted ? null :
    <div className={styles.School}>
    {!formVisible ? 

      <div className={styles.container} onMouseEnter={handleSchoolMouseEnter} onMouseLeave={handleSchoolMouseLeave}>
        <div className={styles.timing}>
          <p>{school.from} -</p>
          <p>{school.to}</p>
        </div>
        <div className={styles.about}>
          <h3>{school.course}</h3>
          <p>{school.institution}, {school.place}</p>
          {/* <ul>
            <li>{job.did}</li>
            <li>{job.learned}</li>
          </ul> */}
          <button id={`editSchool${school.id}`} className={styles.invisible} onClick={handleEditSchoolClick}><i className="fa-solid fa-pen-to-square"></i></button>
          <button id={`deleteSchool${school.id}`} className={styles.invisible} onClick={handleDeleteSchoolClick}><i className="fa-solid fa-trash-can"></i></button>
        </div>
      </div> :

      <form>
        <div className={styles.timing}>
          <input type="text" required name='from' onChange={handleChange} value={school.from}/>
          <input type="text" required name='to' onChange={handleChange} value={school.to} />
        </div>
        <div className={styles.about}>
          <input type="text" placeholder='Course' required name='course' onChange={handleChange} value={school.course}/>
          <div>
            <input type="text" placeholder='Institution' required name='institution' onChange={handleChange} value={school.institution}/>
            <input type="text" placeholder='Place' required name='place' onChange={handleChange} value={school.place}/>
          </div>
          {/* <textarea placeholder='What you did' required name='did' onChange={handleChange} value={job.did}></textarea>
          <textarea placeholder='What you learned' required name='learned' onChange={handleChange} value={job.learned}></textarea> */}
        </div>
        <button id='save' onClick={handleSaveClick}>Save Changes</button>
      </form>
    }
  </div>
    
  )
}

export default School;