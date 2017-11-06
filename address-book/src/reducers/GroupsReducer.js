import {  } from '../constants/action_types';

const initialState = [
    { id: 1, name: 'co-workers', color: 'success', active: true },
    { id: 2, name: 'home', color: 'primary', active: true },
    { id: 3, name: 'friend', color: 'info', active: true },
    { id: 4, name: 'gym', color: 'warning', active: true },
    { id: 5, name: 'university', color: 'danger', active: true },
    { id: 6, name: 'drink', color: 'purple', active: true },
    { id: 7, name: 'blabla', color: 'pink', active: true },
    { id: 8, name: 'damdamdam', color: 'teal', active: true },
    // { id: 9, name: 'friend', color: '#0066ff', active: true },
    // { id: 10, name: 'blabla', color: '#ffd900', active: true },
    // { id: 11, name: 'blablabla', color: '#660066', active: true },
    // { id: 12, name: 'bla', color: '#3afb23', active: true },
    // { id: 13, name: 'co-workers', color: '#b30000', active: true },
    // { id: 14, name: 'home', color: '#00cc00', active: true },
    // { id: 15, name: 'friend', color: '#0066ff', active: true },
    // { id: 16, name: 'blabla', color: '#ffd900', active: true },
    // { id: 17, name: 'blablabla', color: '#660066', active: true },
    // { id: 18, name: 'bla', color: '#3afb23', active: true },
];

export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}