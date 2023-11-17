import { useDispatch, useSelector } from 'react-redux';

import css from './ContactList.module.css';
import { deleteContacts } from 'redux/contacts/contactsSlice';
import { getContacts } from 'redux/contacts/contactsSelectors';
import { getFilter } from 'redux/filter/filterSelectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const getFilteredContact = contacts.filter(({ name }) => name.toLowerCase().includes(filter));

  return (
    <ul className={css.list}>
      {getFilteredContact.map(({ id, name, number }) => (
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
