import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatusTC, getUserProfileTC, updateStatusTC} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

export type ContainerType = MapDispatchType & MapStateType
export type MapStateType = ReturnType<typeof mapStateToProps>
type MapDispatchType = {
    getUserProfileTC: (userId: string) => void
    getUserStatus: (userId: string) => void
    updateStatusTC: (status: string) => void

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
            userId = '26947';
        }
        this.props.getUserProfileTC(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return <Profile
            {...this.props}
            profile={this.props.profile}
            status={this.props.status}
            updateStatus={this.props.updateStatusTC}
        />
    }
}


const mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUserProfileTC: getUserProfileTC,
        getUserStatus: getStatusTC,
        updateStatusTC: updateStatusTC
    }),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)