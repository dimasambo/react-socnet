let initialState = {
    friends: [
        {id: 1, name: 'Leha'},
        {id: 2, name: 'Sonya'},
        {id: 3, name: 'Yarchi'}
    ]
}

const navbarReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    return stateCopy;
}

export default navbarReducer;