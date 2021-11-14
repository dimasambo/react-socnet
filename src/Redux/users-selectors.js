import {createSelector} from "reselect";

export const getUsersSelector = (state) => {
    return state.usersPage.users;
}

export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true);
})

export const getUsersCount = (state) => {
    return state.usersPage.usersCount;
}

export const getTotalItemsCount = (state) => {
    return state.usersPage.totalItemsCount;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
}