import { combineReducers } from 'redux';

import exampleReducer from './exampleReducer';

const rootReducer = combineReducers({
  exampleText: exampleReducer
});

export default rootReducer;