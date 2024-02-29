// import { useState } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css'
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList'
import initialContactInfo from './components/Contacts/contactsInfo.json';
import SearchBox from './components/SearchBox/SearchBox';

function App() {
  const [contacts, setContact] = useState(() => {
  const savedPhoneNumber = window.localStorage.getItem('user-phone-number');

  if (savedPhoneNumber !== null) {
    const parsedContacts = JSON.parse(savedPhoneNumber);
    return Array.isArray(parsedContacts) ? parsedContacts : initialContactInfo;
  }

  return initialContactInfo;
  });
  
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('user-phone-number', JSON.stringify( contacts ));
  }, [contacts]);

  const addContact = (newContact) => {
    setContact((prevContact) => { return [...prevContact, newContact] });
  }

  const deleteContact = (contactId) => {
    setContact((prevContact) => {
      return prevContact.filter((contact) => contact.id !== contactId);
    });
  };

  const visibleContact = contacts.filter((contact) => {
    const nameMatch = contact.name && contact.name.toLowerCase().includes(filter.toLowerCase());
    const numberMatch = contact.number && contact.number.toLowerCase().includes(filter.toLowerCase());
    return (nameMatch || numberMatch);
  });

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAdd={addContact} />
        <SearchBox value={filter} onFilter={setFilter} />
        <ContactList contactsList={visibleContact} onDelete={deleteContact} />
      </div>
    </>
  )
}

export default App;