import { Ul, Li, Btn } from './ContactList.styled';
import { deleteContact } from 'redux/contactsSlice/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';

export const ContactsList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);

  const setFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  return (
    <Ul>
      {setFilteredContacts().map(({ number, name, id }) => (
        <Li key={id}>
          {name}: {number}
          <Btn type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </Btn>
        </Li>
      ))}
    </Ul>
  );
};
