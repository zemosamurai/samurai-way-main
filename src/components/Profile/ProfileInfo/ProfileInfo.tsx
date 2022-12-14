import React from "react";
import s from './ProfileInfo.module.css'
import {Preloader} from "../../common/preloader/Preloader";
import {MapStateType} from "../ProfileContainer";
import {ProfileStatus} from "./ProfileStatus";

type ProfileInfoPropsType = {
    updateStatus: (status: string) => void
}

function ProfileInfo(props: MapStateType & ProfileInfoPropsType) {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img alt='#'
                     src='https://lancraft.cz/Uploads/Static/Achievements/2022/2/28/b44a8835-3f19-48cb-b49f-9a58290bc15e.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt="#"/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                <p>{props.profile.fullName}</p>
                <p>{props.profile.aboutMe}</p>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo