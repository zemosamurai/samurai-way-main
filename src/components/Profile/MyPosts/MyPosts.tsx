import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {profilePageType} from "../../../App";


function MyPosts(props: profilePageType) {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add go</button>
                    <button>Remove go</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts