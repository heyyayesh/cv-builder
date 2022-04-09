import React from 'react';
import styles from './about.module.css';

function About() {
  const [inputVisible, setInputVisible] = React.useState(false);
  const [aboutText, setAboutText] = React.useState('Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae necessitatibus obcaecati rem accusamus dolorem velit ipsa odit excepturi quae quasi veniam ipsum labore expedita maiores, sapiente nemo at voluptates rerum earum delectus, voluptatem illo ea. Quisquam quas fugiat illo est minima ipsum reiciendis sit, quam porro quidem fugit? Qui aut cumque deleniti atque nesciunt fuga vero illum sit pariatur quas, rerum labore corporis repudiandae assumenda cum, dolorem dolor, sapiente aliquid ut odio hic molestiae blanditiis ullam tenetur! Blanditiis, sequi impedit natus, expedita harum rem amet enim, ratione ullam omnis quod voluptate? Sunt fugit suscipit nisi harum non vero qui enim!');

  const handleMouseEnter = () => {
    const btn = document.querySelector('#aboutBtn');
    btn.classList.remove(styles.invisible);
  }

  const handleMouseLeave = () => {
    const btn = document.querySelector('#aboutBtn');
    btn.classList.add(styles.invisible);
  }

  const handleEditClick = () => {
    setInputVisible(true);
  }

  const handleAboutSubmit = (e) => {
    if (e.key === 'Enter') {
      setAboutText(e.target.value);
      setInputVisible(false);
    }
  }

  const handleInputChange = (e) => {
    setAboutText(e.target.value);
  }

  return (
    <div className={styles.About} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <h2>About</h2>
      {
        inputVisible ? 
        <textarea value={aboutText} onKeyDown={handleAboutSubmit} onChange={handleInputChange} onBlur={() => setInputVisible(false)}/> : 
        <p>{aboutText}</p>
      }
      <button id='aboutBtn' className={styles.invisible} onClick={handleEditClick}><i className="fa-solid fa-pen-to-square"></i></button>
    </div>
  )
}

export default About;