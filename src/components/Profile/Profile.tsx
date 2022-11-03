import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {profilePageType} from "../../App";

type ProfilePropsType = {
    state: profilePageType
    addPost: (postMessage: string) => void
}

function Profile(props: ProfilePropsType) {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts} addPost={props.addPost}/>
        </div>
    )
}

export default Profile