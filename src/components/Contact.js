import React from 'react';
import styles from './contact.module.css';
import EditableText from './EditableText';

function Contact() {
  const [contact, setContact] = React.useState({
    address: 'State, Country, 123456',
    phone: '0000111122',
    email: 'example@email.com',
  });

  const handleChange = (e, type) => {
    setContact(prevContact => (
      {
        ...prevContact,
        [type] : e.target.value,
      }
    ))
  }

  return (
    <div className={styles.Contact}>
      <h2>Contact</h2>
      <div>
      <i class="fa-solid fa-location-dot"></i><h3>Address</h3>
        <EditableText type='address' content={contact.address} handleChange={handleChange} />
      </div>

      <div>
      <i class="fa-solid fa-phone"></i><h3>Phone</h3>
        <EditableText type='phone' content={contact.phone} handleChange={handleChange} />
      </div>

      <div>
      <i class="fa-solid fa-at"></i><h3>Email</h3>
        <EditableText type='email' content={contact.email} handleChange={handleChange} />
      </div>
    </div>
  )
}

export default Contact;