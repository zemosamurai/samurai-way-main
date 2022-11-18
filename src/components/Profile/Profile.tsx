import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsType, profilePageType} from "../../redux/state";


type ProfilePropsType = {
    profilePage: profilePageType
    // addPost: () => void
    // updateNewPostText: (newText: string) => void
    dispatch: (action: ActionsType) => void
}

function Profile(props: ProfilePropsType) {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                dispatch={props.dispatch}
                newPostText={props.profilePage.newPostText}
            />
        </div>
    )
}

export default Profile