import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Container } from './Container';
import { Filter } from './Filter';

export const App = () => {
  return (
    <>
      <Container title="Phonebook">
        <ContactForm />
      </Container>

      <Container title="Contacts">
        <Filter />
        <ContactList />
      </Container>
    </>
  );
};
