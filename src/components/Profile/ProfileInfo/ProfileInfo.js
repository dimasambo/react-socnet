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
            <ProfileData profile={profile} />
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} userId={userId}/>
        </div>
    </div>
}

const ProfileData = ({profile}) => {
    return <div>
        <div>
            <b>Full name</b>: {profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
        </div>
        <div>
            <b>Professional skills</b>: {profile.lookingForAJobDescription}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
    </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return <div>
        <b className={s.contacts}>{contactTitle}</b>: {contactValue}
    </div>
}

export default ProfileInfo;