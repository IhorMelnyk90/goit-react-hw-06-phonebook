import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../redux/actions';
import { getContact } from '../redux/selectors';
import { FormGroup, NameGroup, Input, Btn } from './ContactForm.styled';




const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContact);
  const dispatch = useDispatch();

  const nameId = nanoid();
  const numberId = nanoid();

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return new Error(`Something wrong, please try again`);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const similarContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (similarContact) {
      alert(`${name} is already in contact`);
    } else
      dispatch(
        actions.addContact({
          id: nanoid(),
          name,
          number,
        })
      );

    setName('');
    setNumber('');
  };



  return (
    <FormGroup onSubmit={handleSubmit}>
        <NameGroup>
          <label htmlFor={nameId}>Name</label>
          <Input
            id={nameId}
            value={name}
            onChange={handleInputChange}            
            placeholder="Soul Goodman"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </NameGroup>
        <NameGroup>
          <label htmlFor={numberId}>Number</label>
          <Input
            id={numberId}
            value={number}
            onChange={handleInputChange}            
            placeholder="38 097 777 77 77"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </NameGroup>
        <Btn>Add contact</Btn>
      </FormGroup>
  )
}

export default ContactForm;

