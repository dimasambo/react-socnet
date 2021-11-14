import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import FriendItem from "./FriendItem/FriendItem";

const Navbar = (props) => {

    let friendElements = props.navbarPage.friends
        .map(d => <FriendItem name={d.name} id={d.id}/>);

    return <div className={s.nav}>
        <nav>
            <NavLink to='/profile' activeClassName={s.active}>
                <div className={s.item}>
                    Profile
                </div>
            </NavLink>
            <NavLink to='/dialogs' activeClassName={s.active}>
                <div className={s.item}>
                    Message
                </div>
            </NavLink>
            <a href=''>
                <div className={s.item}>
                    News
                </div>
            </a>
            <a href=''>
                <div className={s.item}>
                    Music
                </div>
            </a>
            <a href=''>
                <div className={s.item}>
                    Settings
                </div>
            </a>
            <NavLink to='/users' activeClassName={s.active}>
                <div className={s.item}>
                    Users
                </div>
            </NavLink>
        </nav>
        <div>
            <div className={s.friends}>
                <h2>Friends</h2>
            </div>
            <div className={s.friendElements}>
                {friendElements}
            </div>
        </div>
    </div>
}

export default Navbar;