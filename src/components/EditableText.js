import React from 'react';

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

  return (
    <>
      {
        readMode ? 
        <p onClick={handleClick} >{props.content}</p> :
        <input 
          value={props.content} 
          onChange={(e) => props.handleChange(e, props.type)} 
          onKeyDown={handleSubmit}
        />
      }
    </>
  )
}

export default EditableText;
