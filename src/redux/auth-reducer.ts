import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {setStatusAC} from "./profile-reducer";

export type InitialStateType = {
    userId: null | number,
    login: null | string,
    email: null | string,
    rememberMe: null | boolean,
    isAuth: boolean
}
const initialState = {
    userId: null,
    login: null,
    email: null,
    rememberMe: null,
    isAuth: false
}

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET-USER-DATA' : {
            return {...state, ...action.payload, isAuth: true}
        }
        default:
            return state
    }

}

type ActionsType = setAuthUserDataACType

export type setAuthUserDataACType = ReturnType<typeof setAuthUserDataAC>
export const setAuthUserDataAC = (userId: number, login: string, email: string) => {
    return {
        type: 'SET-USER-DATA',
        payload: {
            userId,
            login,
            email
        }
    } as const
}


export const getAuthUserDataTC = () => (dispatch: Dispatch<ActionsType>) => {
    authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            let {email, id, login} = response.data.data
            dispatch(setAuthUserDataAC(id, login, email))
        }
    })
}


// export type setLoginUserACType = ReturnType<typeof setLoginUserAC>
// export const setLoginUserAC = (email: string, password: string, rememberMe: boolean) => {
//     return {
//         type: 'SET-LOGIN-USER',
//         payload: {
//             email,
//             password,
//             rememberMe
//         }
//     } as const
// }
//
// export const setLoginUserTC = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch<ActionsType>) => {
//     authAPI.login(email, password, rememberMe).then(response => {
//         if (response.data.resultCode === 0) {
//             dispatch(setLoginUserAC(email, password, rememberMe))
//         }
//     })
// }



