import { createSlice } from '@reduxjs/toolkit';

import { getContacts } from 'redux/operations';
import { deleteContact } from 'redux/operations';
import { addContact } from 'redux/operations';

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  // Имя слайса
  name: 'contacts',
  // Начальное состояние редюсера слайса
  initialState: initialState,
  // Объект редюсеров
  // reducers: {
  //   // deleteContacts: (state, action) => {
  //   //   state.contacts = state.contacts.filter(el => el.id !== action.payload);
  //   // },
  //   addContact: (state, action) => {
  //     state.contacts = [...state.contacts, action.payload];
  //   },
  // },
  extraReducers: builder =>
    builder
      // getContacts
      .addCase(getContacts.pending, handlePending)
      .addCase(getContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
      })
      .addCase(getContacts.rejected)
      // addContacts
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts.push(action.payload);
      })
      .addCase(addContact.rejected)
      // deleteContacts
      .addCase(deleteContact.pending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.contacts.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contacts.splice(index, 1);
      })
      .addCase(deleteContact.rejected),
});

// Генераторы экшенов
// export const { addContact } = contactsSlice.actions;
// Редюсер слайса
export const contactsReducer = contactsSlice.reducer;
