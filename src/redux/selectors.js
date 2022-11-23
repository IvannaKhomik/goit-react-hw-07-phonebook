import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectLoadingStatus = state => state.contacts.isLoading;
export const selectErrorMessage = state => state.contacts.error;

export const selectFilter = state => state.filter.value;

export const selectFilteredList = createSelector(
  [selectContacts, selectFilter],
  (contactList, filterValue) => {
    const normalizedFilter = filterValue.toLowerCase();

    const filteredContacts = filterValue
      ? contactList.filter(contact =>
          contact.name.toLowerCase().includes(normalizedFilter)
        )
      : contactList;

    return filteredContacts;
  }
);
