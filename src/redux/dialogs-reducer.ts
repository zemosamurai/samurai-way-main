export type DialogsType = {
    id: number
    name: string
}
type MessagesType = {
    id: number
    message: string
}

const initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Im Kim'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ] as Array<MessagesType>,
    dialogs: [
        {id: 1, name: 'Sasha'},
        {id: 2, name: 'Petya'},
        {id: 3, name: 'Vitaliy'},
        {id: 4, name: 'Denis'},
        {id: 5, name: 'Victor'}
    ] as Array<DialogsType>,
    newMessageBody: ''
}
export type InitialStateType = typeof initialState

export const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            return {...state, newMessageBody: action.body}
        case 'SEND-MESSAGE' :
            let body = state.newMessageBody
            return {...state, newMessageBody: '', messages: [...state.messages, {id: 6, message: body}]}
        default:
            return state
    }
}

type ActionsType = UpdateNewMessageBodyType | SendMessageType

export type UpdateNewMessageBodyType = ReturnType<typeof updateNewMessageBodyCreator>
export const updateNewMessageBodyCreator = (body: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        body: body
    } as const
}

export type SendMessageType = ReturnType<typeof sendMessageCreator>
export const sendMessageCreator = () => {
    return {
        type: 'SEND-MESSAGE',
    } as const
}
