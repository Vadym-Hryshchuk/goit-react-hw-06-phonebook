import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { ContactItem } from 'components/ContactItem/ContactItem';
import { Item } from './ContactList.styled';

export const ContactsList = () => {
  const contactsStore = useSelector(state => state.contacts);
  const filterStore = useSelector(state => state.filter);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contactsStore));
  }, [contactsStore]);

  const visibleContacts = contactsStore.filter(contact =>
    contact.name.toLowerCase().includes(filterStore.toLowerCase())
  );

  return (
    <>
      {visibleContacts.length > 0 ? (
        <ul>
          {visibleContacts.map(({ id, name, number }) => {
            return (
              <Item key={id}>
                <ContactItem id={id} name={name} number={number} />
              </Item>
            );
          })}
        </ul>
      ) : (
        <p>Phone book is empty!</p>
      )}
    </>
  );
};
