import { createRoot } from "react-dom/client"; //react-dom/clientからcreatRootをインポート(createRoot関数が利用可能となる)
import { StrictMode } from "react";

const rootElement = document.getElementById("root"); //index.htmlの<div id="root"></div>を取得しているイメージ
const root = createRoot(rootElement); 

const App = () => {
  return( //複数行をリターンする時は、改行して（）内に記述する。
  <> {/*//関数のコンポーネントとして返すタグは大きな一つのタグにしなけらばならない,<React.Fragment>を<></>として省略できる*/}
    <h1>こんにちは！</h1>
    <p>お元気ですか？</p>
  </>
  )//App関数の結果として表示したい要素を返却する
}

root.render( //非同期レンダリングを行う
  <StrictMode> 
     <App /> {/* App関数の結果（returnされた<h1>こんにちは！</h1>が表示される） */}
  </StrictMode>
); //より厳しいルールで記述をすることを設定