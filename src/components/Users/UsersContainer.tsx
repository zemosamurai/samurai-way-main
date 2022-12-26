import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {
    followTC,
    getUsersTC,
    InitialStateType,
    toggleIsFollowingProgressAC,
    unFollowTC,
} from '../../redux/users-reducer';
import {Users} from './Users';
import {Preloader} from "../common/preloader/Preloader";

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType
type mapStateToPropsType = {
    usersPage: InitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgressBtn: Array<number>
}
type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    // setUsers: (users: Array<UserType>) => void
    // setCurrentPage: (pageNumber: number) => void
    // setTotalUsersCount: (totalCount: number) => void
    // toggleIsFetchingAC: (isFetching: boolean) => void
    toggleIsFollowingProgressAC: (followingProgress: boolean, userId: number) => void
    getUsersTC: (currentPage: number, pageSize: number) => void
}

class UsersAPIComponent extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
        // this.props.toggleIsFetchingAC(true);
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        //     .then(data => {
        //         this.props.toggleIsFetchingAC(false);
        //         this.props.setUsers(data.items)
        //         this.props.setTotalUsersCount(data.totalCount)
        //     })
    }

    /*    onFollowHandler = (userId: number) => {
            this.props.follow(userId)
        }
        onUnFollowHandler = (userId: number) => {
            this.props.unFollow(userId)
        }*/
    onPageChanged = (pageNumber: number) => {
        this.props.getUsersTC(pageNumber, this.props.pageSize)
        // this.props.setCurrentPage(pageNumber)
        // this.props.toggleIsFetchingAC(true);
        // usersAPI.getUsers(pageNumber, this.props.pageSize)
        //     .then(data => {
        //         this.props.toggleIsFetchingAC(false);
        //         this.props.setUsers(data.items)
        //     })
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.usersPage.users}
                    followTC={this.props.follow}
                    unFollowTC={this.props.unFollow}
                    // toggleIsFollowingProgressAC={this.props.toggleIsFollowingProgressAC}
                    followingInProgressBtn={this.props.followingInProgressBtn}
                />
            </>
        )
    }
}


const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgressBtn: state.usersPage.followingInProgressBtn
    }
}
// const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unFollow: (userId) => {
//             dispatch(unFollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setUsersTotalCountAC(totalCount))
//         },
//         toggleIsFetchingAC: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }

export const UsersContainer = connect(mapStateToProps, {
    follow: followTC,
    unFollow: unFollowTC,
    // setUsers: setUsersAC,
    // setCurrentPage: setCurrentPageAC,
    // setTotalUsersCount: setUsersTotalCountAC,
    // toggleIsFetchingAC: toggleIsFetchingAC,
    toggleIsFollowingProgressAC: toggleIsFollowingProgressAC,
    getUsersTC: getUsersTC
})(UsersAPIComponent)

