import * as types from '../../constants/action_types';

export const openModal = (id) => ({ type: types.OPEN_MODAL, payload: id });
export const closeModal = (id) => ({ type: types.CLOSE_MODAL, payload: id });