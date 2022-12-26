import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

export type UserType = {
    id: number
    uniqueUrlName: string
    photos: { small: string, large: string }
    name: string
    followed: boolean
    status: string
}

const initialState = {
    users: [] as Array<UserType>,
    pageSize: 5, // сколько наша страница вмещает
    totalUsersCount: 0, // сколько всего получим пользователей
    currentPage: 1, // текущая страница на которой находимся
    isFetching: true, // отображаем preload
    followingInProgressBtn: [] as Array<number>
}

export type InitialStateType = typeof initialState

export const UsersReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW' : {
            return {...state, users: state.users.map(el => el.id === action.userID ? {...el, followed: true} : el)}
        }
        case 'UNFOLLOW': {
            return {...state, users: state.users.map(el => el.id === action.userID ? {...el, followed: false} : el)}
        }
        case 'SET-USERS': {
            return {...state, users: action.users}
        }
        case 'SET-CURRENT-PAGE': {
            return {...state, currentPage: action.currentPage}
        }
        case 'SET-TOTAL-USERS-COUNT': {
            return {...state, totalUsersCount: action.totalCount}
        }
        case 'TOGGLE-IS-FETCHING': {
            return {...state, isFetching: action.isFetching}
        }
        case 'TOGGLE-IS-FOLLOWING-PROGRESS': {
            return {
                ...state,
                followingInProgressBtn: action.followingProgress
                    ? [...state.followingInProgressBtn, action.userId]
                    : state.followingInProgressBtn.filter(id => id !== action.userId)
            }
        }
        default:
            return state
    }
}

type ActionsType =
    FollowACType
    | UnFollowACType
    | SetUsersACType
    | SetCurrentPageACType
    | SetUsersTotalCountACType
    | ToggleIsFetchingACType
    | toggleIsFollowingProgressACType

export type FollowACType = ReturnType<typeof followAC>
export const followAC = (userID: number) => {
    return {
        type: 'FOLLOW',
        userID
    } as const
}

export type UnFollowACType = ReturnType<typeof unFollowAC>
export const unFollowAC = (userID: number) => {
    return {
        type: 'UNFOLLOW',
        userID
    } as const
}

export type SetUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: 'SET-USERS',
        users
    } as const
}

export type SetCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage
    } as const
}

export type SetUsersTotalCountACType = ReturnType<typeof setUsersTotalCountAC>
export const setUsersTotalCountAC = (totalCount: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        totalCount
    } as const
}

export type ToggleIsFetchingACType = ReturnType<typeof toggleIsFetchingAC>
export const toggleIsFetchingAC = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        isFetching
    } as const
}

export type toggleIsFollowingProgressACType = ReturnType<typeof toggleIsFollowingProgressAC>
export const toggleIsFollowingProgressAC = (followingProgress: boolean, userId: number) => {
    return {
        type: 'TOGGLE-IS-FOLLOWING-PROGRESS',
        followingProgress,
        userId
    } as const
}


export const getUsersTC = (currentPage: number, pageSize: number) => (dispatch: Dispatch<ActionsType>) => {
    dispatch(toggleIsFetchingAC(true))

    usersAPI.getUsers(currentPage, pageSize).then(data => {
        dispatch(setCurrentPageAC(currentPage))
        dispatch(toggleIsFetchingAC(false));
        dispatch(setUsersAC(data.items))
        dispatch(setUsersTotalCountAC(data.totalCount))
    })
}

export const followTC = (userId: number) => (dispatch: Dispatch<ActionsType>) => {
    dispatch(toggleIsFollowingProgressAC(true, userId))

    usersAPI.follow(userId).then(data => {
        if (data.resultCode === 0) {
            dispatch(followAC(userId))
        }
        dispatch(toggleIsFollowingProgressAC(false, userId))
    })
}

export const unFollowTC = (userId: number) => (dispatch: Dispatch<ActionsType>) => {
    dispatch(toggleIsFollowingProgressAC(true, userId))
    usersAPI.unFollow(userId).then(data => {
        if (data.resultCode === 0) {
            dispatch(unFollowAC(userId))
        }
        dispatch(toggleIsFollowingProgressAC(false, userId))
    })
}

