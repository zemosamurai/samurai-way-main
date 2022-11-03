import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../App";

type MyPostPropsType = {
    posts: Array<PostType>
    addPost: (postMessage: string) => void
}

function MyPosts(props: MyPostPropsType) {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()
    const onClickAddPost = () => {
        debugger
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.addPost(text)
            newPostElement.current.value = ''
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
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