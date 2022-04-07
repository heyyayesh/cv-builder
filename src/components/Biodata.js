import React from 'react';
import EditableText from './EditableText';
import '../styles/biodata.css';

function Biodata() {
  const [bio, setBio] = React.useState({
    firstname: 'Firstname',
    lastname: 'Lastname',
  })

  const handleChange = (e, type) => {
    setBio(prevBio => (
      {
        ...prevBio,
        [type] : e.target.value,
      }
    ))
  }

  // console.log(bio);
  
  return (
    <div>
      <EditableText type='firstname' content={bio.firstname} handleChange={handleChange} />
      <EditableText type='lastname' content={bio.lastname} handleChange={handleChange} />
    </div>
  )
}

export default Biodata;
