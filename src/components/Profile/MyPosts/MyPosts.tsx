import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts() {
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
                <Post message={'Hi, how are you?'} likesCount={15}/>
                <Post message={"It's my first post"} likesCount={20}/>
            </div>
        </div>
    )
}

export default MyPosts