import React from 'react';
import EditableList from './EditableList';

function Hobbies() {
  const hobbiesArr = ['Coding', 'Watching movies', 'Playing guitar'];
  return (
    <EditableList heading='Hobbies' listItems={hobbiesArr} />
  )
}

export default Hobbies;