import { useCallback, useEffect, useMemo, useState } from 'react';

import classes from './App.module.css';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import SearchBox from './SearchBox';

const INITIAL_STATE = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function readFromStorage(key, defaultValue) {
  try {
    const item = globalThis.localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch {
    return defaultValue;
  }
}

function writeToStorage(key, value) {
  globalThis.localStorage.setItem(key, JSON.stringify(value));
}

function App() {
  const [contacts, setContacts] = useState(() => readFromStorage('contacts', INITIAL_STATE));
  const [filterValue, setFilterValue] = useState('');

  const filteredContacts = useMemo(() => {
    if (!filterValue) {
      return null;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase()),
    );
  }, [contacts, filterValue]);

  const addContact = useCallback(({ name, number }) => {
    setContacts(prevState => [...prevState, { name, number, id: `id-${Date.now()}` }]);
  }, []);

  const handleContactDelete = useCallback(({ id }) => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  }, []);

  useEffect(() => {
    writeToStorage('contacts', contacts);
  }, [contacts]);

  return (
    <div className={classes['app']}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <SearchBox value={filterValue} onChange={setFilterValue} />
      <ContactList contacts={filteredContacts ?? contacts} onContactDelete={handleContactDelete} />
    </div>
  );
}

export default App;
