import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://www.blue-print.com/typo3conf/templates/main/assets/img/general/logo-blue-print.svg' />
        <div className={s.login}>
            {props.isAuth
                ? <div className={s.login}>{props.login} - <button onClick={props.logout}>Logout</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;