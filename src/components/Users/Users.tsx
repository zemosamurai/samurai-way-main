import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>
    unFollowTC: (id: number) => void
    followTC: (id: number) => void
    followingInProgressBtn: Array<number>
}

export const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return (
        <div>
            {pages.map((el, i) => {
                return (
                    <span
                        key={i}
                        className={props.currentPage === el ? s.selectedPage : ''}
                        onClick={() => {
                            props.onPageChanged(el)
                        }}
                    >{el}
                    </span>
                )
            })}
            {props.users.map(el => {
                return (
                    <div key={el.id}>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + el.id}>
                                    <img
                                        className={s.userAvatar}
                                        src={el.photos.small !== null ? el.photos.small : userPhoto}
                                        alt="#"
                                    />
                                </NavLink>
                            </div>
                            <div>
                                {el.followed
                                    ? <button
                                        disabled={props.followingInProgressBtn.some(id => id === el.id)}
                                        onClick={() => {
                                            props.unFollowTC(el.id)
                                        }
                                        }>Unfollow</button>
                                    : <button
                                        disabled={props.followingInProgressBtn.some(id => id === el.id)}
                                        onClick={() => {
                                            props.followTC(el.id)
                                        }
                                        }>Follow</button>
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