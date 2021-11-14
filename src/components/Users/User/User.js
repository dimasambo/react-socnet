import s from "../Users.module.css";
import {NavLink} from "react-router-dom";
import userPhoto from "../../../assets/images/user.png";
import React from "react";

const User = ({user, followingInProgress, follow, unfollow}) => {
    return (
        <div className={s.box}>
            <div className={s.head}>
                <NavLink to={'/profile/' + user.id}><img
                    src={user.photos.small != null ? user.photos.small : userPhoto}/></NavLink>
                {user.followed
                    ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        unfollow(user.id);
                        debugger;
                    }}>Unfollow</button>
                    : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        follow(user.id)
                    }}>Follow</button>}
            </div>
            <div className={s.body}>
                <div className={s.about}>
                    <div>{user.name}</div>
                    <div>{'u.status'}</div>
                </div>
                <div className={s.location}>
                    <div>{'u.location.city'},</div>
                    <div>{'u.location.country'}</div>
                </div>
            </div>
        </div>
    )
}

export default User;