import React from 'react';
import styles from './editableText.module.css';

function EditableText(props) {
  const [readMode, setReadMode] = React.useState(true);
  
  const handleClick = () => {
    setReadMode(false);
  }

  const handleSubmit = (e) => {
    if (e.key === 'Enter') {
      setReadMode(true);
    }
  }

  const handleBlur = () => {
    setReadMode(true);
  }

  let pClass, iClass;
  if (props.type === 'firstname' || props.type === 'lastname') {
    pClass = styles.firstname;
    iClass = styles.firstname;
  }
  else if (props.type === 'profession') {
    pClass = styles.profession;
    iClass = styles.profession;
  }

  return (
    <>
      {
        readMode ? 
        <p className={pClass} onClick={handleClick} >{props.content || props.type}</p> :
        <input 
          value={props.content} 
          onChange={(e) => props.handleChange(e, props.type)} 
          onKeyDown={handleSubmit}
          className={iClass}
          onBlur={handleBlur}
          autoFocus
        />
      }
    </>
  )
}

export default EditableText;
