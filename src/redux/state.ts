import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

 type MessagesType = {
    id: number
    message: string
}
 type DialogsType = {
    id: number
    name: string
}
 type PostType = {
    id: number
    message: string
    likesCount: number
}
 type profilePageType = {
    posts: Array<PostType>
    newPostText: string
}
 type dialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody: string
}
 type RootStateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
}
 type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: any) => void
}


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

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber()
    }
}

export default store