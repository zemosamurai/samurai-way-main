let rerenderOnChange = () => {
    console.log('State changed')
}

export const subscribe = (observer: ()=> void) => {
    rerenderOnChange = observer // наблюдатель observer
}

export type MessagesType = {
    id: number
    message: string
}
export type DialogsType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type profilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type dialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}
export type RootStateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
}


export type ActionsType = AddPostActionType | UpdateNewPostTextType | UpdateNewMessageBody | SendMessage

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11}
            ],
            newPostText: ''
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
            ],
            newMessageBody: ''
        }
    },
    _callSubscriber() {
        console.log('State changed')
    },

export const addPost = () => {
    const newPost: PostType = {
        id: new Date().getDate(),
        message: state.profilePage.newPostText, // дынные оюновляются ниже
        likesCount: 0
    }

    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderOnChange()
}

//обновляем данные state при каждом введении в textarea
export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderOnChange()
}

export default state