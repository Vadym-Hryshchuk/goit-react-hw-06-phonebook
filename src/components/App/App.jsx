import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import toast, { Toaster } from 'react-hot-toast';
import { setFilter } from 'redux/filterSlice';
import { addContact, removeContact } from 'redux/contactsSlice';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactsList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Wrapper } from './App.styled';

export const App = () => {
  const contactsStore = useSelector(state => state.contacts);
  const filterStore = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contactsStore));
  }, [contactsStore]);

  const handleSubmit = ({ name, number }, { resetForm }) => {
    if (contactsStore.find(value => value.name === name)) {
      toast.error(`${name} is already in the contact list`);
      return;
    }

    dispatch(addContact({ id: nanoid(), name: name, number: number }));

    toast.success(`${name} added to contact list`);
    resetForm();
  };
  const changeFilter = filterValue => {
    dispatch(setFilter(filterValue));
  };
  const handleDelete = contactId => {
    dispatch(removeContact(contactId));
    toast.success(`The contact has been deleted`);
  };

  const visibleContacts = contactsStore.filter(contact =>
    contact.name.toLowerCase().includes(filterStore.toLowerCase())
  );

  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit} />
      <Filter value={filterStore} onChange={changeFilter} />
      <h2>Contacts</h2>
      <ContactsList
        listOfContacts={visibleContacts}
        handleDelete={handleDelete}
      />
      <Toaster />
    </Wrapper>
  );
};
