import React from "react";
import s from './Post.module.css';

function Post() {
    return (
        <div className={s.item}>
            <img alt=''
                 src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8cCnLjdRdi8dnxEXbDxjZt7W7UZAZwqbjjw&usqp=CAU'/>
            Post1
            <div>Like</div>
        </div>
    )
}

export default Post