import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfileAC} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";

export type ContainerType = MapDispatchType & MapStateType

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
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfileAC(response.data)
            })
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

const mapStateToProps = (state: AppStateType)  => ({
    profile: state.profilePage.profile
})

let withUrlDataContainerComponent = withRouter(ProfileContainer)

export type MapStateType = ReturnType<typeof mapStateToProps>

const action = {
    setUserProfileAC: setUserProfileAC
}
type MapDispatchType = typeof action

export default connect (mapStateToProps, action) (withUrlDataContainerComponent)