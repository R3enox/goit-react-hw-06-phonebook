import { getContacts } from 'redux/contacts/contactsSelectors';

export const getFilter = state => state.filterStore;

export const getFilteredContact = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  const lowerWords = filter.toLowerCase();

  return contacts.filter(({ name }) => name.toLowerCase().includes(lowerWords));
};
