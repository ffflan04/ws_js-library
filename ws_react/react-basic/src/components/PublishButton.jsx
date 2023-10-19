import { useState } from "react"

const PublishButton = (props)=>{
    console.log('PublishButton.jsx')
    return (
        <button onClick={()=> props.funClick()}>
            公開状態: {props.piece}
        </button>
    )
}

export default PublishButton