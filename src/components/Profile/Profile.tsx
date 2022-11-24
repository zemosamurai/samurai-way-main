import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../redux/state";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


type ProfilePropsType = {
    store: StoreType
    // profilePage: profilePageType
    // dispatch: (action: ActionsType) => void
}

function Profile(props: ProfilePropsType) {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                store={props.store}
                // posts={props.profilePage.posts}
                // dispatch={props.dispatch}
                // newPostText={props.profilePage.newPostText}
            />
        </div>
    )
}

export default Profile