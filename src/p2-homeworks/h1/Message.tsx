import React from 'react'
import s from './Message.module.css'

type MessageProprs = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props:MessageProprs) {
    return (
        <div className={s.general}>

            <div className={s.image}><img src={props.avatar } alt='avatar'/></div>
            <div className={s.corner}></div>
             <div className={s.text}>
                <div className={s.name}>{props.name}</div>
                <div className={s.messages}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>

        </div>
    )
}

export default Message
