import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {ActionsType, RootStateType} from "./redux/state";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


export type AppPropsType = {
    state: RootStateType
    dispatch: (action: ActionsType) => void
    store: any
}

function App(props: AppPropsType) {
    let SomeComponentProfile = () => <Profile
        // profilePage={props.state.profilePage}
        // dispatch={props.dispatch}
        store={props.store}
    />
    let SomeComponentDialogs = () => <DialogsContainer
        store={props.store}
        // state={props.state.dialogsPage}
        // dispatch={props.dispatch}
    />

    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
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
