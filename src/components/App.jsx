import { ContactsList } from './ContactsList/ContactsList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Container, Message } from './App.styled';

import { useSelector } from 'react-redux';

import Test from './Test';

export const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      {contacts.length > 0 ? (
        <>
          <h2>Contacts</h2>
          <Filter />
          <ContactsList />
        </>
      ) : (
        <Message>Contacts list is empty yet</Message>
      )}
      <Test />
    </Container>
  );
};
