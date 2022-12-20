import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setAuthUserDataAC} from "../../redux/auth-reducer";

export type ContainerType = mapStateToPropsType & ActionType

export type mapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type ActionType = typeof action

class HeaderContainer extends React.Component<ContainerType> {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                withCredentials: true
            })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {email, id, login} = response.data.data
                    this.props.setAuthUserDataAC(id, login, email)
                }
            })
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
const action = {
    setAuthUserDataAC: setAuthUserDataAC
}

export default connect(mapStateToProps, action)(HeaderContainer)