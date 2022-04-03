import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { listCards } from './listCards/listCards.slice';

export const store = configureStore({
    reducer: {
        users: listCards.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDipatch = () => useDispatch<AppDispatch>();
