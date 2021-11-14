import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import userPhoto from "./../../../assets/images/user.png";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, userId}) => {
    const onMainPhotoSelected = (e) => {
        if(e.target.files.length)
            savePhoto(e.target.files[0]);
    }

    if(!profile)
        return <Preloader/>

    return <div>
        <div className={s.descriptionBlock}>
            <img src={profile.photos.large || userPhoto}/>
            {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} userId={userId}/>
        </div>
    </div>
}

export default ProfileInfo;