import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.all}>

            <span className={s.prejunior}><NavLink to={PATH.PRE_JUNIOR}>pre_junior</NavLink></span>

            <span className={s.junior}><NavLink to={PATH.JUNIOR}>junior</NavLink></span>

            <span className={s.juniorthebest}><NavLink to={PATH.JUNIORTHEBEST}>junior+</NavLink></span>
            <span className={s.figure}><img src={'https://cdn.onlinewebfonts.com/svg/download_439250.png'}/></span>

        </div>
    )
}

export default Header
