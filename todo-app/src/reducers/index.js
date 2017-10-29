import { combineReducers } from 'redux';
import {  } from '../constants/action_types';

import TodoReducer from './TodoReducer'

const rootReducer = combineReducers({
    todos: TodoReducer
});

export default rootReducer;