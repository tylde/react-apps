import { ADD_TODO } from '../constants/action_types'

const initialData = [
    {
        id: 0,
        text: 'Complete todo-app',
        isCompleted: false
    },
    {
        id: 1,
        text: 'PUBG',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Eat dinner',
        isCompleted: false
    }
];

export default function(state = initialData, action) {
    switch(action.type) {
        case ADD_TODO: 
            return state;
        default: 
            return state;
    }

}