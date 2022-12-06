export type UserType = {
    id: number
    uniqueUrlName: string
    photos: {small: string, large: string}
    name: string
    followed: boolean
    status: string
}

const initialState = {
    users: [
      /*  {
            id: 1,
            avatarUrl: 'https://i.pinimg.com/originals/86/95/54/8695540db1e9224367ed9d1a4884ccfc.jpg',
            followed: false,
            fullName: 'Dimych',
            status: 'I am a boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            avatarUrl: 'https://i.pinimg.com/originals/86/95/54/8695540db1e9224367ed9d1a4884ccfc.jpg',
            followed: true,
            fullName: 'Kimych',
            status: 'I am a boss',
            location: {city: 'Gomel', country: 'Belarus'}
        },
        {
            id: 3,
            avatarUrl: 'https://i.pinimg.com/originals/86/95/54/8695540db1e9224367ed9d1a4884ccfc.jpg',
            followed: false,
            fullName: 'Den',
            status: 'I am a boss',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: 4,
            avatarUrl: 'https://i.pinimg.com/originals/86/95/54/8695540db1e9224367ed9d1a4884ccfc.jpg',
            followed: true,
            fullName: 'Dmitro',
            status: 'I am a boss',
            location: {city: 'Kiev', country: 'Ukraine'}
        },*/
    ] as Array<UserType>,
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
            return {...state, users: action.users} //[...state.users, ...action.users]
        }
        default:
            return state
    }

}

type ActionsType = followACType | unFollowACType | setUsersACType

export type followACType = ReturnType<typeof followAC>
export const followAC = (userID: number) => {
    return {
        type: 'FOLLOW',
        userID
    } as const
}

export type unFollowACType = ReturnType<typeof unFollowAC>
export const unFollowAC = (userID: number) => {
    return {
        type: 'UNFOLLOW',
        userID
    } as const
}

export type setUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: 'SET-USERS',
        users
    } as const
}

