/* React useEffectとは？ */

// 簡単に言うと、Reactの副作用フックの1つ。
// propsやStateが更新されるなどで、画面の再描画が終わった後に処理を実行できるにするフック。
// useEffect の Effect は”Side Effect”(副作用)を意味しています。
// Side Effect には fetch 関数を利用して外部のリソースからデータを取得したり、
// DOM の更新、ロギング(console.log も含む)などの処理が含まれます。
// useEffect を利用することでコンポーネントの内容を表示する際に外部のサーバから、
// API を経由してデータを取得することやコンポーネントが更新する度に別の処理を実行するということが可能になります。
// コンポーネント内で外部データベースを購読したい。
// データベースを購読 = データベースを常に監視して、変更にリアルタイムで反応することもできます。
// useEffectを使って、
// ページを開いた直後にボタンをクリックしたり何かの操作をすることなしで外部から取得したデータを表示することできます。

// このように、useEffectの中で、非同期処理を使うことは、めちゃくちゃあります。

// 最も簡単なuseEffectの使い方。
useEffect(()=>{console.log('numが更新されました。')})
return(
    <div>
        <button onClick={()=>{setNum(num + 1)}}>{num}</button>
    </div>
)

// useEffectの第二引数 = dependencies(依存関係と言われる)
// 第二引数に、配列で囲ったstateを設定することで、useEffectの処理条件を設定できます。
useEffect(()=>{console.log('useEffect実行')},[bool])
// 空の配列を設定して、コンポーネントの初期化時のみ、処理を走らせることも可能です。
useEffect(()=>{console.log('useEffect実行')},[])

// クリーンアップ関数とは？
// useEffectが実行される直前もしくは、コンポーネントがアンマウントされる時に実行される関数。
// ポイントとしては、クリーンアップ関数は、再レンダリングされるごとに実行されます。
useEffect(()=>{
    if(open){console.log('observing the database...')}
    return ()=>{
        console.log('Unsubscribe the database')
    }
})

// useEffectの簡単な使い方02
// useStateの値が書き換わったことを、トリガーに
// apiからデータを取ってきて、表示するメソッド。
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
                .then(data => set_apiName(data.name))
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