import {  } from '../constants/action_types';

const initialState = [
    {
        id: 0,
        firstName: 'John',
        lastName: 'Doe',
        image: '',
        phone: [
            {
                type: 'work', number: '999 999 999'
            },
            {
                type: 'private', number: '987 654 321'
            },
            {
                type: 'home', number: '12 345 67 89'
            },
        ],
        email: 'john.doe@gmail.com',

        groups: [1, 2, 5],
        favorite: true
    },
    {
        id: 1,
        firstName: 'Jane',
        lastName: 'Doe',
        image: '',
        phone: [
            {
                type: 'work', number: '999 999 999'
            },
            {
                type: 'private', number: '987 654 321'
            },
            {
                type: 'home', number: '12 345 67 89'
            },
        ],
        email: 'john.doe@gmail.com',

        groups: [2, 4],
        favorite: true
    },
    {
        id: 3,
        firstName: 'Joe',
        lastName: 'Doe',
        image: '',
        phone: [
            {
                type: 'work', number: '999 999 999'
            },
            {
                type: 'private', number: '987 654 321'
            },
            {
                type: 'home', number: '12 345 67 89'
            },
        ],
        email: 'john.doe@gmail.com',

        groups: [3, 6, 7],
        favorite: false
    },
    {
        id: 4,
        firstName: 'Mike',
        lastName: 'Doe',
        image: '',
        phone: [
            {
                type: 'work', number: '999 999 999'
            },
            {
                type: 'private', number: '987 654 321'
            },
            {
                type: 'home', number: '12 345 67 89'
            },
        ],
        email: 'john.doe@gmail.com',

        groups: [1, 4, 8],
        favorite: true
    }
];

export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}