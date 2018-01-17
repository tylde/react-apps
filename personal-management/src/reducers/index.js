import { combineReducers } from 'redux';
// import { } from '../constants/action_types'

import expensesReducer from './expensesReducer';
import expensesFilterReducer from './expensesFilterReducer';

const rootReducer = combineReducers({
  expenses: expensesReducer,
  expensesFilter: expensesFilterReducer
});

export default rootReducer;