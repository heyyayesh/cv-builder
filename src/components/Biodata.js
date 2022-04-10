import React from 'react';
import EditableText from './EditableText';
import placeholder from '../placeholder.png';
import styles from './biodata.module.css';

function Biodata() {
  const [bio, setBio] = React.useState({
    profileImg: placeholder,
    firstname: 'Firstname',
    lastname: 'Lastname',
    profession: 'Profession',
  })

  const handleChange = (e, type) => {
    setBio(prevBio => (
      {
        ...prevBio,
        [type] : e.target.value,
      }
    ))
  }

  const handleImgClick = () => {
    const uploaderElem = document.querySelector('input[type="file"]');
    uploaderElem.click();
  }

  const handleImgChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setBio(prevBio => ({
        ...prevBio,
        profileImg: URL.createObjectURL(img),
      }));
    }
  }

  const handleImageHover = () => {
    const overlay = document.getElementById('overlay');
    overlay.classList.add(styles.visible);
  }

  const handleImageCursorLeave = () => {
    const overlay = document.getElementById('overlay');
    overlay.classList.remove(styles.visible);
  }

  return (
    <div className={styles.biodata}>
      <input type='file' onChange={handleImgChange} />
      <img src={bio.profileImg} alt='profile' onClick={handleImgClick} onMouseEnter={handleImageHover} onMouseLeave={handleImageCursorLeave}/>
      <EditableText type='firstname' content={bio.firstname} handleChange={handleChange} />
      <EditableText type='lastname' content={bio.lastname} handleChange={handleChange} />
      <EditableText type='profession' content={bio.profession} handleChange={handleChange} />
      <div id='overlay' className={`${styles.imageOverlay}`} onClick={handleImgClick} onMouseEnter={handleImageHover} onMouseLeave={handleImageCursorLeave}><i className="fa-solid fa-pen-to-square"></i></div>
    </div>
  )
}

export default Biodata;
