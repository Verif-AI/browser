// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import llmReducer from './slices/llmSlice';

export const store = configureStore({
  reducer: {
    llm: llmReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
