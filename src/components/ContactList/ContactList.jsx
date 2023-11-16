import { useDispatch, useSelector } from 'react-redux';

import css from './ContactList.module.css';
import { deleteContacts } from 'redux/contacts/contactsSlice';
import { getFilteredContact } from 'redux/filter/filterSelectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContact);

  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={css.listItem}>
          {name}: {number}
          <button
            onClick={() => dispatch(deleteContacts(id))}
            className={css.btnDel}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
