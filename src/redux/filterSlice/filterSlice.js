import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

const filterSlice = createSlice({
  // Имя слайса
  name: 'filter',
  // Начальное состояние редюсера слайса
  initialState: initialState,
  // Объект редюсеров
  reducers: {
    filterContacts: (state, action) => {
      state.filter = action.payload;
    },
  },
});

// Генераторы экшенов
export const { filterContacts } = filterSlice.actions;
// Редюсер слайса
export const filterReducer = filterSlice.reducer;
