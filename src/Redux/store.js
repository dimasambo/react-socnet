import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialog-reducer";
import navbarReducer from "./navbar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi! Its my first post!', numberOfLike: 20},
                {id: 2, message: 'Holla! Im here at the first time)', numberOfLike: ''},
                {id: 3, message: 'Wow! Thats great soc net!', numberOfLike: 34},
                {id: 4, message: 'Guys! How are you?', numberOfLike: 1},
                {id: 5, message: 'Help! I cant understand what to do here(((', numberOfLike: 133}
            ],

            newPostText: ''
        },

        dialogsPage: {
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
            ],

            newMessageBody: ''
        },

        navbarPage: {
            friends: [
                {id: 1, name: 'Leha'},
                {id: 2, name: 'Sonya'},
                {id: 3, name: 'Yarchi'}
            ]
        }
    },
    _callSubscriber() {

    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.navbarPage = navbarReducer(this._state.navbarPage, action);

        this._callSubscriber(this._state);
    }
}

export default store;