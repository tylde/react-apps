import { CHANGE_GROUP_FILTER } from '../constants/action_types';

const initialState = [
    { id: 1, name: 'co-workers', color: 'success', active: false },
    { id: 2, name: 'home', color: 'primary', active: false },
    { id: 3, name: 'friend', color: 'info', active: false },
    { id: 4, name: 'gym', color: 'warning', active: false },
    { id: 5, name: 'university', color: 'danger', active: false },
    { id: 6, name: 'drink', color: 'purple', active: false },
    { id: 7, name: 'TBA', color: 'pink', active: false },
    { id: 8, name: 'TBA', color: 'teal', active: false },
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
        case CHANGE_GROUP_FILTER:
            return state.map((group) => {
                if (group.id === action.payload) return { ...group, active: !group.active }
                else return group;
            });
        default:
            return state;
    }
}