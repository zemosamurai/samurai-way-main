import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {MapStateType} from "./ProfileContainer";

type ProfilePropsType = {
    updateStatus: (status: string) => void
}

function Profile(props: MapStateType & ProfilePropsType) {
    return (
        <div>
            <ProfileInfo {...props} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile