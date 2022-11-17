import {ActionsType, dialogsPageType,} from "./state";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

export type UpdateNewMessageBody = ReturnType<typeof updateNewMessageBodyCreator>
export type SendMessage = ReturnType<typeof sendMessageCreator>

const dialogsReducer = (state: dialogsPageType, action: ActionsType) => {
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

export const updateNewMessageBodyCreator = (body: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        body: body
    } as const
}
export const sendMessageCreator = () => {
    return {
        type: 'SEND-MESSAGE',
    } as const
}

export default dialogsReducer