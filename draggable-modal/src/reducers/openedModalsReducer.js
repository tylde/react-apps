import { OPEN_MODAL, CLOSE_MODAL } from '../constants/action_types';

const initialData = {
  'YV-101': {
    id: 'YV-101',
    opened: false
  }
};

export default function (state = initialData, action) {
  let { type, payload } = action;
  switch (type) {
    case OPEN_MODAL:
      const openId = payload;
      return { ...state, [openId]: { ...state[openId], opened: true } };
    case CLOSE_MODAL:
      const closeId = payload;
      return { ...state, [closeId]: { ...state[closeId], opened: false } };
    default:
      return state;
  }
}