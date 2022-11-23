import { useSelector } from 'react-redux';
import { selectFilteredList } from 'redux/selectors';
import { ContactItem } from '../ContactItem';
import { List, NotFoundMessage } from './ContactList.styled';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredList);
  const noContactsFind = filteredContacts.length === 0;

  return (
    <>
      <List>
        {noContactsFind ? (
          <NotFoundMessage>We didn't find any contacts</NotFoundMessage>
        ) : (
          filteredContacts.map(contact => (
            <ContactItem
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.phone}
            />
          ))
        )}
      </List>
    </>
  );
};
