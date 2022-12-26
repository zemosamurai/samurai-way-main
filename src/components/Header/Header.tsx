import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {mapStateToPropsType} from "./HeaderContainer";

function Header(props: mapStateToPropsType) {
    return (
        <header className={s.header}>
            <img alt='' src='https://seeklogo.com/images/C/cloud-akatsuki-logo-17E3DF7FAC-seeklogo.com.png'/>

            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login}</div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header