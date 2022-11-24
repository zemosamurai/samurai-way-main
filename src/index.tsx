import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux-store";
import {RootStateType} from "./redux/state";


let rerenderEntireThree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                dispatch={store.dispatch.bind(store)}
                store={store}
            />
        </BrowserRouter>, document.getElementById('root')
    );
}

rerenderEntireThree(store.getState())
store.subscribe(() => {
    let state = store.getState()
    rerenderEntireThree(state)
})