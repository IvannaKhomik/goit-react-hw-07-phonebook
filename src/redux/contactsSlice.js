import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { defaultContacts } from './constants';

const contactsInitialState = {
  items: defaultContacts,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact(state, action) {
      state.items = [action.payload, ...state.items];
    },
    deleteContact(state, action) {
      const index = state.items.findIndex(
        contact => contact.id === action.payload
      );
      state.items.splice(index, 1);
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
};

const contactsReducer = contactsSlice.reducer;

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsReducer
);

export const { addContact, deleteContact } = contactsSlice.actions;
