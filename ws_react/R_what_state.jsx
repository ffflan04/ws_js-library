/* コンポーネントの状態を管理しよう */

// Stateとは？
// useStateは、めちゃめちゃ使います。
// Reactのコンポーネントは内部で「状態」を持つことができます。
// 言い換えれば、Reactのコンポーネントは「何かを保管しておく箱」が常に用意されています。
// 「React」のコンポーネントは「State」と「Props」という２種類のデータがあるのですが、
// 「State」は値の代入後に変更可能、「Props」は代入後に変更不可能。という違いがあります。

// Stateの更新は、非同期的に行われます。
// 非同期 = 2 つ以上の事象が同時に発生したり、関連する複数の事象が互いの完了を待たずに発生したりする概念

// useStateの使い方

// １.useStateによるstateの宣言
const [state, setState] = useState(initialState)
// state = 現在の状態 , setState = 更新関数 , initialState = 初期値

// ２.stateの更新
setState(newState)
// 更新関数(新しい値)

// ３.具体例
const [message, setMessage] = useState('toraHack is fuck')

/* ------------------------------------------------------------ */

// useState簡素な使い方
const Head = (props)=>{
    const [word,setWord] = useState('いちご')
    return(
        <button onClick={()=>{setWord('ぶどう')}}>{word}</button>
    )
}

// エラーその１
const Head1 = (props)=>{
    const [word,setWord] = useState('いちご')
    return(
        <button onClick={setWord('ぶどう')}>{word}</button>
    )
}

// エラーその２
const Head = (props)=>{
    const [word,setWord] = useState('いちご')
    setWord('ぶどう')
    return(
        <p>だいたい私ら知らなくて</p>
    )
}

/* ------------------------------------------------------------ */

// stateに、イベント引数を渡す。
const Head = (props)=>{
    const [name,setName] = useState('init name')
    const f_setName = (e)=>{
        setName(e.target.value)
    }
    return(
        <div>
            <Title title={props.title}/>
            <Content content={name}/>
            <Input p_change={(e)=>{f_setName(e)}}/>
        </div>
    )
}
const Input = (props)=>{
    return (
        <input 
        onChange={props.p_change}
        />
    )
}

// stateの中身を運用する。
// prevState の使い方
const Head = (props)=>{
    const [num,setNum] = useState(0)
    const f_upNum = ()=>{ // 省略しない書き方
        setNum((prevState)=> { return prevState + 1})
    }
    const f_downNum = ()=>{ // 省略した書き方
        setNum(prevState => prevState - 1)
    }
    const f_downNum = ()=>{ // prevStateを使わなくても、ほとんど変わりませんが、
        setNum(num - 1) // stateの値は、非同期的に処理されることになります。
    }
    return(
        <div>
            <Title title={props.title}/>
            <Content content={num}/>
            <button onClick={f_upNum}>up</button>
            <button onClick={f_downNum}>down</button>
        </div>
    )
}

// state の、変数本体に、直接代入できないらしい。
// まぁ、そりゃ、const で宣言してるからな。
const Head = (props)=>{
    const [cont01,cont02] = useState(0)
    const f_change = ()=>{
        cont01 = cont01 + 1
        cont02(cont01)
    }
    return(
        <div>
            <Title title={props.title}/>
            <Content/>
            <button onClick={f_change}>{cont01}</button>
        </div>
)
}