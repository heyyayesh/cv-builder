import React from 'react';
import styles from './job.module.css';

function Job(props) {
  const [formVisible, setFormVisible] = React.useState(false);
  const [deleted, setDeleted] = React.useState(false);

  const [job, setJob] = React.useState({
    from: 'August 2017',
    to: 'April 2022',
    jobTitle: 'Software Engineer',
    company: 'Compubotics',
    place: 'New Delhi',
    did: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores accusantium numquam assumenda ratione voluptatem, quidem quisquam. At quae nihil non tempora eligendi eum molestias expedita? Quibusdam cum excepturi esse itaque.',
    learned: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, impedit modi. Dolores ducimus quod sint, consequatur beatae quia porro corrupti.',
    id: props.id,
  });

  const handleEditJobClick = () => {
    setFormVisible(true);
  }

  const handleJobMouseEnter = () => {
    const btn1 = document.getElementById(`editJob${job.id}`);
    const btn2 = document.getElementById(`deleteJob${job.id}`);
    btn1.classList.remove(`${styles.invisible}`);
    btn2.classList.remove(`${styles.invisible}`);
  }

  const handleJobMouseLeave = () => {
    const btn1 = document.getElementById(`editJob${job.id}`);
    const btn2 = document.getElementById(`deleteJob${job.id}`);
    btn1.classList.add(`${styles.invisible}`);
    btn2.classList.add(`${styles.invisible}`);
  }

  const handleChange = (e) => {
    const {name, value} = e.target;

    setJob(prevJob => ({
      ...prevJob,
      [name]: [value]
    }));
  }

  const handleSaveClick = () => {
    setFormVisible(false);
  }

  const handleDeleteJobClick = () => {
    setDeleted(true);
  }

  return (
    
    deleted ? null :
    <div className={styles.Job}>
    {!formVisible ? 

      <div className={styles.container} onMouseEnter={handleJobMouseEnter} onMouseLeave={handleJobMouseLeave}>
        <div className={styles.timing}>
          <p>{job.from} -</p>
          <p>{job.to}</p>
        </div>
        <div className={styles.about}>
          <h3>{job.jobTitle}</h3>
          <p>{job.company}, {job.place}</p>
          <ul>
            <li>{job.did}</li>
            <li>{job.learned}</li>
          </ul>
          <button id={`editJob${job.id}`} className={styles.invisible} onClick={handleEditJobClick}><i className="fa-solid fa-pen-to-square"></i></button>
          <button id={`deleteJob${job.id}`} className={styles.invisible} onClick={handleDeleteJobClick}><i className="fa-solid fa-trash-can"></i></button>
        </div>
      </div> :

      <form>
        <div className={styles.timing}>
          <input type="text" required name='from' onChange={handleChange} value={job.from}/>
          <input type="text" required name='to' onChange={handleChange} value={job.to} />
        </div>
        <div className={styles.about}>
          <input type="text" placeholder='Job Title' required name='jobTitle' onChange={handleChange} value={job.jobTitle}/>
          <div>
            <input type="text" placeholder='Company' required name='company' onChange={handleChange} value={job.company}/>
            <input type="text" placeholder='Place' required name='place' onChange={handleChange} value={job.place}/>
          </div>
          <textarea placeholder='What you did' required name='did' onChange={handleChange} value={job.did}></textarea>
          <textarea placeholder='What you learned' required name='learned' onChange={handleChange} value={job.learned}></textarea>
        </div>
        <button id='save' onClick={handleSaveClick}>Save Changes</button>
      </form>
    }
  </div>
    
  )
}

export default Job;