import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {dialogsPageType, profilePageType} from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost} from "./redux/state";


type RenderStatePropsType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
}

export let rerenderEntireThree = (state: RenderStatePropsType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost}/>
        </BrowserRouter>, document.getElementById('root')
    );
}



