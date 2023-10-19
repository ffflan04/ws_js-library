/* コンポーネントの import と export */

// コンポーネント ≒ モジュール ?

// Javascriptのモジュール機能とは？
// ・プログラムをモジュールという単位に分割する
// ・原則は１ファイル = １モジュール
// ・必要な時に必要なモジュールのみ読み込む。


// export と、import には、種類があります。

/* -------------------------------------- */

// ・default export (名前なしexport)
// 推奨されるexport方法
// １ファイル = １export

// アロー関数でdefault export
const Title = (props)=>{
    return <h2>{props.title}</h2>
}
export default Title

// 名前付き関数のdefault export
default export function Title(props){
    return <h2>{props.title}</h2>
}

/* -------------------------------------- */

// default import (名前なしimport)
// default export したモジュールをそのまま読み込む

// Article.jsx (export元)
const Article = (props)=>{
    return (
        <div>
            <p>{props.title}</p>
            <h2>{props.content}</h2>
        </div>
    )
}
export default Article;

// App.jsx (import元)
import Article from "./react-basic/src/components/Article"

function App(){
    return (
        <Article
            title={'新・日本一わかりやすいReact講座'}
            content={'import と、export を使いこなそう'}
        />
    )
}

/* -------------------------------------- */

// 名前付きexport
// React では、エントリポイントとしてよく使う
// １ファイルから複数モジュールをexportできる。

// 名前付きexport 例１
// helper.js 
export const addTax = ()=>{
    console.log('１つ目の関数')
}
export const getWild = ()=>{
    console.log('２つ目の関数')
}

// 名前付きexport 例２
// これは、default export した他のファイル達を、
// index.js を起点、エントリポイントとして、複数、importして、
// 別名export を実行する。
// index.js <- 慣例としてエントリポイントとなるファイルは、index.js という名前をつける。
export {default as Article} from './Article'
export {default as content} from './Content'
export {default as Title} from './Title'

/* -------------------------------------- */

// 名前付きimport
// 名前付きexport と組み合わせることで、
// １つのファイルから複数のモジュールを読み込める

import {Content, Title} from "./index.js";

const Article = (props)=>{
    return (
        <div>
            <Title title={props.title} />
            <Content content={props.content} />
        </div>
    )
}
export default Article

/* -------------------------------------- */