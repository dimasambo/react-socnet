import {
    follow, requestUsers,
    unfollow
} from '../../Redux/users-reducer';
import {connect} from 'react-redux';
import React from 'react';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getTotalItemsCount,
    getUsers,
    getUsersCount
} from "../../Redux/users-selectors";


class UsersConatainer extends React.Component {
    componentDidMount() {
        const {currentPage, usersCount} = this.props;
        this.props.requestUsers(currentPage, usersCount);
    }

    onPageChange = (pageNumber) => {
        const {usersCount} = this.props;
        this.props.requestUsers(pageNumber, usersCount);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users onPageChange={this.onPageChange}
                   currentPage={this.props.currentPage}
                   totalItemsCount={this.props.TotalItemsCount}
                   usersCount={this.props.usersCount}
                   users={this.props.users}
                   followingInProgress={this.props.followingInProgress}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        usersCount: getUsersCount(state),
        TotalItemsCount: getTotalItemsCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps, {follow, unfollow, requestUsers})
)(UsersConatainer);