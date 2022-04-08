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

  let inputType = 'text';

  let pClass, iClass;
  if (props.type === 'firstname' || props.type === 'lastname') {
    pClass = styles.firstname;
    iClass = styles.firstname;
  }
  else if (props.type === 'profession') {
    pClass = styles.profession;
    iClass = styles.profession;
  }
  else if (props.type === 'address') {
    pClass = styles.contact;
    iClass = styles.contact;
  }
  else if (props.type === 'phone') {
    inputType = 'tel';
    pClass = styles.contact;
    iClass = styles.contact;
  }
  else if (props.type === 'email') {
    inputType = 'email';
    pClass = styles.contact;
    iClass = styles.contact;
  }

  return (
    <>
      {
        readMode ? 
        <p className={pClass} onClick={handleClick} >{props.content || props.type}</p> :
        <input 
          type={inputType}
          value={props.content} 
          onChange={(e) => props.handleChange(e, props.type)} 
          onKeyDown={handleSubmit}
          className={iClass}
          onBlur={handleBlur}
          autoFocus
          spellCheck='false'
        />
      }
    </>
  )
}

export default EditableText;
