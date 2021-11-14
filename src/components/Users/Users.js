import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User/User";

const Users = ({totalItemsCount, usersCount, onPageChange, currentPage, users, ...props}) => {

    return <div>
        <Paginator totalItemsCount={totalItemsCount} usersCount={usersCount}
                   onPageChange={onPageChange} currentPage={currentPage} portionSize={15}/>
        <div>
        {
            users.map(u => <User user={u}
                                 followingInProgress={props.followingInProgress}
                                 follow={props.follow}
                                 unfollow={props.unfollow}/>)
        }
        </div>
    </div>
}

export default Users;