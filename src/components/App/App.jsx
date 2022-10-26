// import React, { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { Container, Title1 } from './App.styled';

export default function App() {
  return (
    <Container>
      <Title1>Phonebook</Title1>
      <ContactForm />
      <Filter />
      <ContactList />
    </Container>
  );
}

// const localContacts = JSON.parse(localStorage.getItem('storagecontacts'));
// const defaultContacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// const [contacts, setContacts] = useState(localContacts ?? defaultContacts);

// const [filter, setFilter] = useState('');

// const addContact = contact => {
//   if (isDublicate(contact)) {
//     return alert(`${contact.name} is already in contacts`);
//   }

//   const newContact = {
//     ...contact,
//     id: nanoid(),
//   };
//   setContacts(prev => {
//     return [...prev, newContact];
//   });
// };

// const removeContact = id => {
//   setContacts(prev => {
//     const newContacts = prev.filter(item => item.id !== id);
//     return newContacts;
//   });
// };

// const handleChange = e => {
//   const { value } = e.target;
//   setFilter(value);
// };

// const isDublicate = ({ name }) => {
//   const result = contacts.find(item => item.name === name);
//   return result;
// };

// const getFilteredContacts = () => {
//   if (!filter) {
//     return contacts;
//   }

//   const normalizedFilter = filter.toLocaleLowerCase();
//   const filteredContacts = contacts.filter(({ name }) => {
//     const normalizedName = name.toLocaleLowerCase();
//     const result = normalizedName.includes(normalizedFilter);
//     return result;
//   });
//   return filteredContacts;
// };

// const filteredContacts = getFilteredContacts();

// useEffect(() => {
//   window.localStorage.setItem('storagecontacts', JSON.stringify(contacts));
// }, [contacts]);
