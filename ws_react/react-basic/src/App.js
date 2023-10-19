import Head from "./components/Article"

const FirstApp = ()=>{
  return(
    <div>
      <Head
      title={'君がいなくなった日々は'}
      />
    </div>
  )
}

export default FirstApp

// うぉ、すげぇ、youtubeの動画のシチュエーションを実現しようとしてたけど、
// 本当に、わたせるんだな。他のファイルから、exportしたやつ。
// Article.jsx に、他の、exportしたコンポーネントを集めて、
// App.jsで出力できた。
// これを、メモに残したい。
// そして、youtubeの動画のシチュエーションを実現しよう。
// propsがなんなのか？
// stateとはなんなのか？