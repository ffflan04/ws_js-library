/* ------ React 基本 ------- */

// Reactライフサイクルとは？
// reactのライフサイクルはコンポーネントの誕生から消滅までに発生する一連のイベントとのことです。
// reactのライフサイクルは三つの時期に分けられます。

// ・Mounting—>コンポーネントの誕生
// ・Update—>コンポーネントの更新
// ・Unmount—>コンポーネントの停止

// マウント = コンポーネントのインスタンスが作成されてDOMに挿入されること
// アンマウント = DOMからコンポーネントが削除されること


// React Hooksとは？
// クラスを使用せずに Reactを書くことができる機能です。
// 関数コンポーネントにstateを持たせたり、ライフサイクルに応じた処理を実装したりできます。

// React Hooksには、機能の異なる複数のフックがあります。基本的なフックの役割と使い方は次の通りです。

// 1．useState
//  useStateが必要となる場面は、インタラクティブにやり取りされる値を管理したい時です。典型的な例として、入力フォームを実装する場合が挙げられます。
// 2．useEffect
//  useEffectが必要なケースとして、コンポーネントの呼び出し時に外部APIからリソースを取得する場合などが挙げられます。
// 3．useContext
//  useContextは、認証情報の管理など複数のコンポーネント間でデータを横断的に扱う場合に利用します。
// 4．useRef
//  useRefが必要となる主なケースとして、DOMへの参照を保存する場合が挙げられます。
// 5．useMemo
//  useMemoの主な利用シーンは、配列を保持するstateで配列を頻繁に走査処理する場合などです。
// 6．useCallback
//  useCallbackは、処理を最適化する上で子コンポーネントのpropsに関数を渡す必要がある場合などに利用されます。
// 7．useReducer
//  useReducerは、複数の値に関連するstateを更新したい場合などに必要となります。






/* ---- わかったこと ------ */
// App.js に書かれたことが、webサイトに反映されます。

// 関数をexportすることで、webサイトに反映される。

// return () の中に、入ってるDOM要素が、webサイトに表示される。
// return () の中には、console.log() は、実行できる。
// return () の中で、console.log() と、DOM要素は、共存することができない。

// console.log() は、return()で、かこう必要がない。
// なぜか、exportする関数は、２回実行されている。

// index.js の、root.render() によって、webサイトが表示されてる。
/* ---------------------- */
// props について

// 宣言するコンポーネントは、大文字にしましょう。
// 子コンポーネントからimportしてきたコンポーネント名は、大文字じゃないとエラーになる。
const Direct = (props)=>{
    return(
        <h2>盃に君を投影</h2>
    )
}

/* ------ 基本編 --------- */

// 最も簡素な書き方
const PrimaryApp = ()=>{
    console.log('base')
}

// returnを使って初めてwebサイトに表示される
const PrimaryApp1 = ()=>{
    return(
        <p>また闇に生きる</p>
    )
}

// returnの前に、メソッドを記述できる。
const PrimaryApp2 = ()=>{
    console.log('切り裂く雨')
    console.log('天の雷鳴')
    return (
        <p>雨がふる</p>
    )
}

// exportされたjsxファイルを、importして使う。
import Decoy from "./components/Article"
const PrimaryApp4 = ()=>{
    return(
        <Decoy/>
    )
}

// exportするjsxファイルにpropsを使うことで、引数をとれる。
import Decoy from "./components/Article"
const PrimaryApp5 = ()=>{
    return(
    <Decoy
        word={'よく来たな魔理沙と霊夢'}
    />
    )
}

/* ------ React独特な文法編 --------- */

// bool値を、簡単に変更できる。
let [bool,setBool] = useState(false)
const f_setBool = ()=>{
    setBool(bool => !bool)
}