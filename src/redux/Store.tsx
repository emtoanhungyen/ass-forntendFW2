import { createStore } from 'redux';
import rootReducer from './reducer';
import { configureStore } from '@reduxjs/toolkit'

const store = createStore(rootReducer)

export default store