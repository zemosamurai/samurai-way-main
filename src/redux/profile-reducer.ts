export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfileType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: string | null
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}
export type InitialStateType = {
    posts: PostType[]
    newPostText: string
    profile: ProfileType | null
}

const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11}
    ],
    newPostText: '',
    profile: null
}

type InitialStateType = typeof initialState

export const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {
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

