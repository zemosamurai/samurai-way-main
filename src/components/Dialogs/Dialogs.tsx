import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: number
}

const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

type MessagePropsType = {
    message: string
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={'Sasha'} id={1}/>
                <DialogItem name={'Petya'} id={2}/>
                <DialogItem name={'Vitaliy'} id={3}/>
                <DialogItem name={'Masha'} id={4}/>
                <DialogItem name={'Victor'} id={5}/>
            </div>
            <div className={s.messages}>
                <Message message={'Hi'}/>
                <Message message={'Im Kim'}/>
                <Message message={'Yo'}/>
            </div>
        </div>
    )
}

export default Dialogs