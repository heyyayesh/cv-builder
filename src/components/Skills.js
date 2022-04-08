import React from 'react';
import styles from './skills.module.css';
import { nanoid } from 'nanoid';

function Skills() {
  const [skills, setSkills] = React.useState(['HTML5', 'CSS', 'Javascript']);
  const [newInputVisible, setNewInputVisible] = React.useState(false);

  const handleSkillsEnter = () => {
    const btn = document.getElementById('plus');
    console.log(btn);
    btn.classList.remove(styles.invisible);
  }

  const handleSkillsLeave = () => {
    const btn = document.getElementById('plus');
    btn.classList.add(styles.invisible);
    setNewInputVisible(false);
  }

  const handleListEnter = (id) => {
    const btn = document.querySelector(`button[id=${id}]`);
    btn.classList.remove(styles.invisible);
  }

  const handleListLeave = (id) => {
    const btn = document.querySelector(`button[id=${id}]`);
    btn.classList.add(styles.invisible);
  }

  const handleAddItemClick = () => {
    setNewInputVisible(true);
  }

  const handleNewInputEnter = (e) => {
    if (e.key === 'Enter') {
      setSkills(prevSkills => [...prevSkills, e.target.value]);
      setNewInputVisible(false);
    }
  }

  const handleItemdelete = (skill) => {
    setSkills(prev => {
      return prev.filter(item => {
        return item !== skill;
      })
    })
  }

  const ul = (
    <ul>
      {
        skills.map((skill) => {
          const id = nanoid();
          return (
            <li key={id} id={id} onMouseEnter={() => handleListEnter(id)} onMouseLeave={() => handleListLeave(id)}>
              {skill}
              <button id={id} className={styles.invisible} onClick={() => handleItemdelete(skill)}><i className="fa-solid fa-minus"></i></button>
            </li>
          )
        })
      }
    </ul>
  )

  return (
    <div className={styles.Skills} onMouseEnter={handleSkillsEnter} onMouseLeave={handleSkillsLeave}>
      <h2>Skills</h2>
      {ul}
      <button id='plus' className={`${styles.addItem} ${styles.invisible}`} onClick={handleAddItemClick}><i className="fa-solid fa-plus"></i></button>
      {newInputVisible && <input className={styles.newItemInput} onKeyDown={(e) => handleNewInputEnter(e)} autoFocus />}
    </div>
  )
}

export default Skills;