import profileReducer, {AddPostActionType, UpdateNewPostTextType} from "./profileReducer";
import dialogsReducer, {SendMessage, UpdateNewMessageBody} from "./dialogsReducer";

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
    newMessageBody: string
}
export type RootStateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
}
export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _callSubscriber: () => void
    addPost: () => void
    updateNewPostText: (newText: string) => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsType) => void
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

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer // наблюдатель observer
    },

    addPost() {
        const newPost: PostType = {
            id: new Date().getDate(),
            message: this._state.profilePage.newPostText, // дынные оюновляются ниже
            likesCount: 0
        }

        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber()
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber()
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber()

    }
}

export default store