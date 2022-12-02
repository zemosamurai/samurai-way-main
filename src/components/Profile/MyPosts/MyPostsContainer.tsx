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

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextActionCreator(text))
        },
        onAddPost: () => {
            dispatch(addPostActionCreator())
        }
    }
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