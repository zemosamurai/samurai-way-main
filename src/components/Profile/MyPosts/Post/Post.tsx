import React from "react";
import s from './Post.module.css';

type PostPropsType = {
    message: string
    likesCount: number
}

function Post(props: PostPropsType) {
    return (
        <div className={s.item}>
            <img alt=''
                 src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8cCnLjdRdi8dnxEXbDxjZt7W7UZAZwqbjjw&usqp=CAU'/>
            {props.message}
            <div>Like {props.likesCount}</div>
        </div>
    )
}

export default Post