import { combineReducers } from 'redux';

import openedModalsReducer from './openedModalsReducer';

const rootReducer = combineReducers({
  openedModals: openedModalsReducer
});

export default rootReducer;