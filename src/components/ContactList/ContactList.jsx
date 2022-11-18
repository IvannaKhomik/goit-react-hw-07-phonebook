import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { ContactItem } from '../ContactItem';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);

  const normalizedFilter = filterValue.toLowerCase();

  const filteredContacts = filterValue
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      )
    : contacts;

  return (
    <>
      <List>
        {filteredContacts.map(contact => (
          <ContactItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        ))}
      </List>
    </>
  );
};
