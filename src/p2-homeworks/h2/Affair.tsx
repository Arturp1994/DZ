import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number)=>void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={s.title}>
            <div className={s.allName}><div>{props.affair.name}</div></div>
            <div className={s.allPriority}><div>{props.affair.priority}</div></div>
            <div><button onClick={deleteCallback}>x</button></div>
        </div>
    )
}

export default Affair
