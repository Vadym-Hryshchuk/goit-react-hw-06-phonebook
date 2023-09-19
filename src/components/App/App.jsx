import { Toaster } from 'react-hot-toast';

import { ContactForm } from '../ContactForm/ContactForm';
import { ContactsList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Wrapper } from './App.styled';

export const App = () => {
  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <ContactForm />
      <Filter />
      <h2>Contacts</h2>
      <ContactsList />
      <Toaster />
    </Wrapper>
  );
};
