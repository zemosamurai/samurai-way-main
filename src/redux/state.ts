import {PostType} from "../App";
import {rerenderEntireThree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 11}
        ]
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Im Kim'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'}
        ],
        dialogs: [
            {id: 1, name: 'Sasha'},
            {id: 2, name: 'Petya'},
            {id: 3, name: 'Vitaliy'},
            {id: 4, name: 'Denis'},
            {id: 5, name: 'Victor'}
        ]
    }
}

export const addPost = (postMessage: string) => {
    debugger
    let newPost: PostType = {
        id: 5,
        message: postMessage,
        likesCount: 2
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireThree(state)
}

export default state