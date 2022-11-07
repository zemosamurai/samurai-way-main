import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {RootStateType} from "./redux/state";


export type AppPropsType = {
    state: RootStateType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

function App(props: AppPropsType) {
    let SomeComponentProfile = () => <Profile
                                        profilePage={props.state.profilePage}
                                        addPost={props.addPost}
                                        updateNewPostText={props.updateNewPostText}
                                    />
    let SomeComponentDialogs = () => <Dialogs state={props.state.dialogsPage}/>

    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                {/*<Route path='/profile' component={Profile}/>
                    <Route path='/dialogs' component={Dialogs}/>*/}
                <Route path='/profile' render={SomeComponentProfile}/>
                <Route path='/dialogs' render={SomeComponentDialogs}/>

                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>

    );
}

export default App;
