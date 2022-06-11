import React, {ChangeEvent, ChangeEventHandler} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>)=>void // need to fix any
    addUser: ()=>void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = name ? (s.noterror) : (s.error)// need to fix with (?:)

    return (
        <div className={s.all}>
            <input value={name} onChange={setNameCallback} className={inputClass} placeholder="Enter username.."/>
            <button onClick={addUser} className={s.button}>ADD</button>
            <span>{totalUsers}</span>
            <div className={s.Namerror}>{error}</div>
        </div>
    )
}

export default Greeting
