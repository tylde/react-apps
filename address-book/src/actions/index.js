import { CHANGE_GROUP_FILTER } from '../constants/action_types';

export const changeGroupFilter = (id) => ({ type: CHANGE_GROUP_FILTER, payload: id })