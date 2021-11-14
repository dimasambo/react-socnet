import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    return(
        <NavLink to={'/dialogs/' + props.id} activeClassName={s.active} className={s.link}>
            <div className={s.dialog}>
                <img
                    src='https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80' />
                {props.name}
            </div>
        </NavLink>
    );
}

export default DialogItem;