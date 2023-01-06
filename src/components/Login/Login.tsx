import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {AppStateType} from "../../redux/redux-store";
import {compose} from "redux";
import {connect} from "react-redux";
import {getStatusTC, getUserProfileTC, updateStatusTC} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {authAPI} from "../../api/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
// import {setLoginUserTC} from "../../redux/auth-reducer";

type FormDataType =  {
    login: string
    password: string
    rememberMe: boolean
}

export const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        // setLoginUserTC(formData.login, formData.password, formData.rememberMe)
        // console.log(formData)
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}


export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'Login'} name={'login'} component="input"/>
        </div>
        <div>
            <Field placeholder={'Password'} name={'password'} component="input"/>
        </div>
        <div>
            <Field component="input" name={'rememberMe'} type='checkbox'/> remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

authAPI.login('zemosamurai@gmail.com', 'kisly=>kim', false)
    .then(res => console.log(res))

// const mapStateToProps = (state: AppStateType) => ({
//     login: state.form
// })
//
// export default compose<React.ComponentType>(
//     connect(mapStateToProps, {
//         setLoginUserTC: setLoginUserTC,
//     }),
//     withRouter,
//     // withAuthRedirect
// )(Login)