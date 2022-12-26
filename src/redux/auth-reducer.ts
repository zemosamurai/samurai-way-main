import {Dispatch} from "redux";
import {authAPI} from "../api/api";

export type InitialStateType = {
    userId: null | number,
    login: null | string,
    email: null | string,
    isAuth: boolean
}
const initialState = {
    userId: null,
    login: null,
    email: null,
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


