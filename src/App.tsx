import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

export type MessagesType = {
    id: number
    message: string
}

export type DialogsType = {
    id: number
    name: string
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type profilePageType = {
    posts: Array<PostType>
}

export type dialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

type AppPropsType = {
    state: {
        profilePage: profilePageType
        dialogsPage: dialogsPageType
    }
}

function App(props: AppPropsType) {
    let SomeComponentProfile = () => <Profile state={props.state.profilePage}/>
    let SomeComponentDialogs = () => <Dialogs state={props.state.dialogsPage}/>

    return (
        <BrowserRouter>
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
        </BrowserRouter>
    );
}

export default App;
