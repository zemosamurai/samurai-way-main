import React from 'react';

import {StoreType} from "../../redux/state";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

type DialogsPropsType = {
    store: StoreType
    // dispatch: (action: ActionsType) => void
    // store: StoreType
}

const DialogsContainer = (props: DialogsPropsType) => {
    let state = props.store.getState().dialogsPage

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    const onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <Dialogs state={state} updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}/>
    )
}

export default DialogsContainer;