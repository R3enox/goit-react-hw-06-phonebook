import { useState } from 'react';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/contacts/contactsSlice';
import { getContacts } from 'redux/contacts/contactsSelectors';
import { nanoid } from '@reduxjs/toolkit';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');
  const [data, setData] = useState({ name: '', number: '' });

  const handleSubmit = evt => {
    evt.preventDefault();

    const isExist = contacts.some(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );

    if (isExist) {
      alert(`${data.name} is already in contacts.`);
      return;
    }
    dispatch(
      addContacts({ name: data.name, number: data.number, id: nanoid() })
    );
    // setName('');
    // setNumber('');
    setData({ name: '', number: '' });
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    setData({ ...data, [name]: value });
    // switch (name) {
    //   case 'name': {
    //     setName(value);
    //     return;
    //   }
    //   case 'number': {
    //     setNumber(value);
    //     return;
    //   }
    //   default:
    //     return;
    // }
  };

  return (
    <form onSubmit={handleSubmit} className={css.formWrapper}>
      <label className={css.labelText}>
        Name
        <input
          className={css.inputAdd}
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
        />
      </label>
      <label className={css.labelText}>
        Number
        <input
          className={css.inputAdd}
          type="tel"
          name="number"
          value={data.number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          required
        />
      </label>
      <button type="submit" className={css.btnSbm}>
        Add contact
      </button>
    </form>
  );
};
