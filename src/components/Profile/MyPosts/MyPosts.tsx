import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostPropsType = {
    posts: Array<PostType>
    newPostText: string
    updateNewPostText: (text: string) => void
    onAddPost: () => void
}

function MyPosts(props: MyPostPropsType) {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    const onClickAddPost = () => {
        props.onAddPost()
        // props.dispatch(addPostActionCreator())
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewPostText(text)
        // props.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea value={props.newPostText} onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={onClickAddPost}>Add go</button>
                    {/*<button>Remove go</button>*/}
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts