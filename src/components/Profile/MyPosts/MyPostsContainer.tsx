import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {StoreType} from "../../../redux/state";

type MyPostPropsType = {
    // posts: Array<PostType>
    // newPostText: string
    // dispatch: (action: ActionsType) => void
    store: StoreType
}

function MyPostsContainer(props: MyPostPropsType) {
    let state = props.store.getState()

    const onAddPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = (text: string) => {
        props.store.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <MyPosts
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
            updateNewPostText={onPostChange}
            onAddPost={onAddPost}
        />
    )
}

export default MyPostsContainer