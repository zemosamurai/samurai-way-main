import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/user.png'

class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)

            })
    }

    onFollowHandler = (userId: number) => {
        this.props.follow(userId)
    }
    onUnFollowHandler = (userId: number) => {
        this.props.unFollow(userId)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <div>
                {this.props.usersPage.users.map(el => {
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
                                        ? <button onClick={() => this.onUnFollowHandler(el.id)}>Unfollow</button>
                                        : <button onClick={() => this.onFollowHandler(el.id)}>Follow</button>
                                }
                            </div>
                        </span>
                            <span>
                            <span>
                                <div>{el.name}</div>
                                <div>{el.status}</div>
                            </span>
                            <span>
                                <div>{'el.location.country'}</div>
                                <div>{'el.location.city'}</div>
                            </span>
                        </span>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Users
