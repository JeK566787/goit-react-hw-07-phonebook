import { Label, Input, Btn } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice/contactsSlice';
import { nanoid } from 'nanoid';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => {
    return state.contacts.contacts;
  });

  const onFormSubmit = e => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;
    const checkContact = contacts.find(contact => contact.name === name);
    if (checkContact) {
      alert('Already in Contacts');
      return;
    }
    const newContact = {
      name: name,
      number: number,
      id: nanoid(),
    };

    dispatch(addContact(newContact));
    e.target.reset();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>

      <Btn type="submit">Add contact</Btn>
    </form>
  );
};
