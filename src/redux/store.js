import { configureStore } from '@reduxjs/toolkit';
import { contactsReduser } from './contactsSlice';
import { filterReduser } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReduser,
    filter: filterReduser,
  },
});
