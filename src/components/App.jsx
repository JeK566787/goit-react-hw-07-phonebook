import { ContactsList } from './ContactsList/ContactsList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Container, Message } from './App.styled';

import { useDispatch, useSelector } from 'react-redux';

import { getContacts } from 'redux/operations';
import { useEffect } from 'react';
import Loader from './Loader/Loader';

export const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const isLoading = useSelector(state => state.contacts.isLoading);
  console.log(isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
    // const fetchMovies = async () => {
    //   try {
    //     const data = await getContacts();
    //     console.log(data);
    //   } catch (error) {
    //     alert('something wrong');
    //   } finally {
    //   }
    // };
    // fetchMovies();
  }, [dispatch]);

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
      {isLoading && <Loader />}
    </Container>
  );
};