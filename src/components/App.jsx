import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import {
  selectContacts,
  selectErrorMessage,
  selectLoadingStatus,
} from 'redux/selectors';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Container } from './Container';
import { Filter } from './Filter';
import { Loader } from './Loader';
import { NotFound } from './NotFound';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoadingStatus);
  const error = useSelector(selectErrorMessage);
  const contacts = useSelector(selectContacts);

  const isLoaded = contacts.length > 0;

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Container title="Phonebook">
        <ContactForm />
      </Container>
      <Container title="Contacts">
        {isLoading && <Loader />}
        {error && <NotFound />}
        {!isLoading && isLoaded && (
          <>
            <Filter />
            <ContactList />
          </>
        )}
      </Container>
    </>
  );
};
