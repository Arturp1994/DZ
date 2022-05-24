import React from 'react'

type MessageProprs = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props:MessageProprs) {
    return (
        <div>
                <img src={props.avatar }/><br/>
                {props.name}
                {props.message}
                {props.time}
        </div>
    )
}

export default Message
