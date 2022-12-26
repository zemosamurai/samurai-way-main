import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getAuthUserDataTC} from "../../redux/auth-reducer";

export type ContainerType = mapStateToPropsType & mapDispatchToPropsType
export type mapStateToPropsType = {
    isAuth: boolean
    login: string | null
}
export type mapDispatchToPropsType = {
    getAuthUserDataTC: () => void
}

class HeaderContainer extends React.Component<ContainerType> {
    componentDidMount() {
        this.props.getAuthUserDataTC()
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
    getAuthUserDataTC: getAuthUserDataTC
})(HeaderContainer)