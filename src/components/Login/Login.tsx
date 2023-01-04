import React from 'react';

export const Login = () => {
    return <h1>Login</h1>
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