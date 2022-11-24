import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const extraActions = [addContact, deleteContact, fetchContacts];
const getActionsByType = type => extraActions.map(action => action[type]);
const onFetchSuccessReducer = (state, action) => {
  state.items = action.payload;
};
const onAddSuccessReducer = (state, action) => {
  state.items = [action.payload, ...state.items];
};
const onDeleteSuccessReducer = (state, action) => {
  const index = state.items.findIndex(
    contact => contact.id === action.payload.id
  );
  state.items.splice(index, 1);
};

const onPendingReducer = state => {
  state.isLoading = true;
};
const onSuccessReducer = state => {
  state.isLoading = false;
  state.error = null;
};
const onRejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, onFetchSuccessReducer)
      .addCase(addContact.fulfilled, onAddSuccessReducer)
      .addCase(deleteContact.fulfilled, onDeleteSuccessReducer)
      .addMatcher(isAnyOf(...getActionsByType('fulfilled')), onSuccessReducer)
      .addMatcher(isAnyOf(...getActionsByType('pending')), onPendingReducer)
      .addMatcher(isAnyOf(...getActionsByType('rejected')), onRejectedReducer),
});

export const contactsReducer = contactsSlice.reducer;
