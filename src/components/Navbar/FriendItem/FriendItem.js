import s from './../Navbar.module.css';

const FriendItem = (props) => {

    return (
        <div>
            <div className={s.friendName}>
                <a href='' ><img
                src='https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80' /></a>
            </div>
            <div>
                {props.name}
            </div>
        </div>
    );

}

export default FriendItem;