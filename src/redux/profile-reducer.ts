export type PostType = {
    id: number
    message: string
    likesCount: number
}

const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11}
    ] as Array<PostType>,
    newPostText: ''
}

type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {
                id: new Date().getDate(),
                message: state.newPostText, // дынные обновляются ниже
                likesCount: 0
            }
            return {...state, posts: [...state.posts, newPost], newPostText: ''}
        case 'UPDATE-NEW-POST-TEXT' :
            return {...state, newPostText: action.newText}
        default:
            return state
    }

}

type ActionsType = AddPostActionType | UpdateNewPostTextType

export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export const addPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    } as const
}


export type UpdateNewPostTextType = ReturnType<typeof updateNewPostTextActionCreator>
export const updateNewPostTextActionCreator = (text: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    } as const
}


export default profileReducer