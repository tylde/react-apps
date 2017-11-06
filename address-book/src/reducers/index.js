import { combineReducers } from 'redux';

import ContactsReducer from './ContactsReducer';
import ActiveContactReducer from './ActiveContactReducer';
import GroupsReducer from './GroupsReducer';

import {  } from '../constants/action_types' 

const rootReducer = combineReducers({
    contacts: ContactsReducer,
    activeContact: ActiveContactReducer,
    groups: GroupsReducer
});

export default rootReducer;