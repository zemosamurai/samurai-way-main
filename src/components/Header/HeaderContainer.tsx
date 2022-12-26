import React from "react";
import Header from "./Header";

import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {headerLoginTC, setAuthUserDataAC} from "../../redux/auth-reducer";

export type ContainerType = mapStateToPropsType & mapDispatchToPropsType

export type mapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

export type mapDispatchToPropsType = {
    // setAuthUserDataAC: (userId: number, login: string, email: string) => void
    headerLoginTC: () => void
}

// type ActionType = typeof action

class HeaderContainer extends React.Component<ContainerType> {
    componentDidMount() {
        // axios
        //     .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        //         withCredentials: true
        //     })
        //     .then(response => {
        //         if (response.data.resultCode === 0) {
        //             let {email, id, login} = response.data.data
        //             this.props.setAuthUserDataAC(id, login, email)
        //         }
        //     })
        this.props.headerLoginTC()
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})


export default connect(mapStateToProps, {
    // setAuthUserDataAC: setAuthUserDataAC,
    headerLoginTC: headerLoginTC
})(HeaderContainer)