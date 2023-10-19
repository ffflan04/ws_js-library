/* props の使い方 */

// props に props をつなげることをできる。
return ( // Title.jsx
    <h2>{props.title}</h2>
)
return( // Article.jsx
    <div>
        <Title title={props.title}/>
        <Content content={props.content}/>
    </div>
)
return( // App.js
    <Head
    title={'君がいなくなった日々は'}
    content={'僕はまた幸せで'}
    />
)

// props に、関数を渡すことができる。
// props に関数の実行結果を渡すと、無限レンダリングが起こります。
// 実行される処理の順番は、Article.jsx => PublishButton.jsx
const Head = ()=>{ // Article.jsx 
    const [piece,setPiece] = useState('ケーキ')
    const insertPiece = ()=>{
        setPiece('ショートケーキ')
    }
    return( // ここでは、funClickという変数に、insertPiece関数を代入しているだけ。
        <div> 
            <PublishButton funClick={insertPiece}/>
            {/* <PublishButton piece={piece} funClick={insertPiece()}/> 無限レンダリング  */}
        </div>
    )
}
const PublishButton = (props)=>{ // PublishButton.jsx
    return ( // propsを使用することで、親コンポーネントから、funClick関数を取ってくる。
        <button onClick={()=> props.funClick()}>
        </button>
    )
}

