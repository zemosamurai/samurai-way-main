import {ActionsType, PostType, profilePageType} from "./state";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

// type AddPostActionType = {
//     type: 'ADD-POST'
// }

export type AddPostActionType = ReturnType<typeof addPostActionCreator>

// type UpdateNewPostTextType = {
//     type: 'UPDATE-NEW-POST-TEXT'
//     newText: string
// }

export type UpdateNewPostTextType = ReturnType<typeof updateNewPostTextActionCreator>

const profileReducer = (state: profilePageType, action: ActionsType) => {

    switch (action.type) {
        case  ADD_POST:
            const newPost: PostType = {
                id: new Date().getDate(),
                message: state.newPostText, // дынные оюновляются ниже
                likesCount: 0
            }

            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT :
            state.newPostText = action.newText
            return state
        default:
            return state
    }

}

export const addPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    } as const
}
export const updateNewPostTextActionCreator = (text: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    } as const
}


export default profileReducer