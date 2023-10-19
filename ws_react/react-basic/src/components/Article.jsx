import { useEffect, useState } from "react"
import Title from "./Title"
import Content from "./Content"
import Input from "./Input"

const Head = (props)=>{
    const [name,setName] = useState('deatiger')
    const [api_name,set_apiName] = useState('')
    const f_setName = ()=>{
        const name_array = ['google','facebook','aws','deatiger','gaearon']
        const max = 4
        const min = 0
        let a_name = name_array[Math.floor(Math.random() * (max + min) - min)]
        setName(a_name)
    }
    useEffect(()=>{
        const getGitHub = async()=>{
            await fetch(`https://api.github.com/users/${name}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    set_apiName(data.name)
                })
                .catch(error => console.error('エラッた'))
        }
        getGitHub()
    },[name])
    return(
        <div>
            <p>{api_name}</p>
            <p>{name}</p>
            <button onClick={f_setName}>change name</button>
        </div>
    )
}

export default Head

