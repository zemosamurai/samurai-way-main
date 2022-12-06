import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/user.png'

class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

export const Users = (props: UsersPropsType) => {
    const onFollowHandler = (userId: number) => {
        props.follow(userId)
    }
    const onUnFollowHandler = (userId: number) => {
        props.unFollow(userId)
    }
    return (
        <div>
            {props.users.map(el => {
                return (
                    <div key={el.id}>
                        <span>
                            <div>
                                <img
                                    className={s.userAvatar}
                                    src={el.photos.small !== null ? el.photos.small : userPhoto}
                                    alt="#"
                                />
                            </div>
                            <div>
                                {
                                    el.followed
                                    ? <button onClick={() => onUnFollowHandler(el.id)}>Unfollow</button>
                                    : <button onClick={() => onFollowHandler(el.id)}>Follow</button>
                                }
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{el.fullName}</div>
                                <div>{el.status}</div>
                            </span>
                            <span>
                                <div>{el.location.country}</div>
                                <div>{el.location.city}</div>
                            </span>
                        </span>
                    </div>
                )
            })}
        </div>
    )
}
