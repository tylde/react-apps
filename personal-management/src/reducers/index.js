import { combineReducers } from 'redux';
// import { } from '../constants/action_types'

import expensesReducer from './expensesReducer';

const rootReducer = combineReducers({
  expenses: expensesReducer
});

export default rootReducer;