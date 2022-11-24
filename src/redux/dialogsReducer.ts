import {ActionsType} from "./state";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

const initialState = {
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

const dialogsReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE :
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: 6, message: body})
            return state
        default:
            return state
    }

}

export type UpdateNewMessageBody = ReturnType<typeof updateNewMessageBodyCreator>
export const updateNewMessageBodyCreator = (body: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        body: body
    } as const
}

export type SendMessage = ReturnType<typeof sendMessageCreator>
export const sendMessageCreator = () => {
    return {
        type: 'SEND-MESSAGE',
    } as const
}

export default dialogsReducer