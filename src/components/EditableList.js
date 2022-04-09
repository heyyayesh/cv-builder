import React from 'react';
import { nanoid } from 'nanoid';
import styles from './editableList.module.css';

function EditableList(props) {
  const [listItems, setListItems] = React.useState(props.listItems);
  const [newInputVisible, setNewInputVisible] = React.useState(false);

  const handleListEnter = () => {
    const btn = document.getElementById(props.heading);
    btn.classList.remove(styles.invisible);
  }

  const handleListLeave = () => {
    const btn = document.getElementById(props.heading);
    btn.classList.add(styles.invisible);
    setNewInputVisible(false);
  }

  const handleItemEnter = (id) => {
    const btn = document.querySelector(`button[id=${id}]`);
    btn.classList.remove(styles.invisible);
  }

  const handleItemLeave = (id) => {
    const btn = document.querySelector(`button[id=${id}]`);
    btn.classList.add(styles.invisible);
  }

  const handleAddItemClick = () => {
    setNewInputVisible(true);
  }

  const handleNewInputEnter = (e) => {
    if (e.key === 'Enter') {
      if (!e.target.value) return;
      setListItems(prev => [...prev, e.target.value]);
      setNewInputVisible(false);
    }
  }

  const handleItemdelete = (skill) => {
    setListItems(prev => {
      return prev.filter(item => {
        return item !== skill;
      })
    })
  }

  const ul = (
    <ul key={nanoid()}>
      {
        listItems.map((li, index) => {
          const id = nanoid();
          return (
            <li key={index} id={id} onMouseEnter={() => handleItemEnter(id)} onMouseLeave={() => handleItemLeave(id)}>
              {li}
              <button id={id} className={styles.invisible} onClick={() => handleItemdelete(li)}><i className="fa-solid fa-minus"></i></button>
            </li>
          )
        })
      }
    </ul>
  );

  return (
    <div className={styles.EditableList} onMouseEnter={handleListEnter} onMouseLeave={handleListLeave}>
      <h2>{props.heading}</h2>
      {ul}
      <button id={props.heading} className={`${styles.addItem} ${styles.invisible}`} onClick={handleAddItemClick}><i className="fa-solid fa-plus"></i></button>
      {newInputVisible && <input className={styles.newItemInput} onKeyDown={(e) => handleNewInputEnter(e)} autoFocus />}
    </div>
  )
}

export default EditableList;