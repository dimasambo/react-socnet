const ADD_MESSAGE = 'ADD_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Sonya'},
        {id: 2, name: 'Terl'},
        {id: 3, name: 'Il'},
        {id: 4, name: 'Bogdan'},
        {id: 5, name: 'Petr'},
        {id: 6, name: 'Kolya'},
        {id: 7, name: 'Vasyl'}
    ],

        messages: [
    {id: 1, message: 'Hi!'},
    {id: 2, message: 'Holla!'},
    {id: 3, message: 'How are you?'},
    {id: 4, message: 'I`m fine! And you?'}
]
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 1, message: action.newMessageBody}]
            }
        default:
            return state;
    }
}

export const addMessageAction = (newMessageBody) => ( { type: ADD_MESSAGE, newMessageBody} );

export default dialogsReducer;