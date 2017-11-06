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

        groups: [
            {
                id: 1, name: 'co-workers', color: '#b30000'
            },
            {
                id: 2, name: 'home', color: '#00cc00'
            },
            {
                id: 3, name: 'friend', color: '#0066ff'
            }
        ],
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

        groups: [
            {
                id: 2, name: 'home', color: '#00cc00'
            },
            {
                id: 4, name: 'blabla', color: '#ffd900'
            }
        ],
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

        groups: [
            {
                id: 3, name: 'friend', color: '#0066ff'
            }
        ],
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

        groups: [
            {
                id: 1, name: 'co-workers', color: '#b30000'
            }
        ],
        favorite: true
    }
];

export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}