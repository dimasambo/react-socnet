import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {
    return <div>
        <ProfileInfo userId={props.userId}
                     savePhoto={props.savePhoto}
                     isOwner={props.isOwner}
                     profile={props.profile}
                     status={props.status}
                     updateStatus={props.updateStatus}/>
        <PostsContainer />
    </div>
}

export default Profile;