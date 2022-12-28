import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfileTC} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

export type ContainerType = MapDispatchType & MapStateType
export type MapStateType = ReturnType<typeof mapStateToProps>
type MapDispatchType = {
    getUserProfileTC: (userId: string) => void
}
type PathParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamsType> & ContainerType

class ProfileContainer extends React.Component<PropsType> {
    // компонента вмонтирована
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2';
        }
        this.props.getUserProfileTC(userId)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'}/>
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

const mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

let withUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {
        getUserProfileTC: getUserProfileTC
    }
)(withUrlDataContainerComponent)