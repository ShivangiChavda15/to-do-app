import { createStore } from 'redux';
import RootReducer from './reducer/RootReducer';

/**
 * Created store to store app data
 */
export const store = createStore(RootReducer);
