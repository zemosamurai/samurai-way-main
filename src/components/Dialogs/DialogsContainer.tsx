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

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        state: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }

    return (
        <Dialogs state={state} updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}/>
    )
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;