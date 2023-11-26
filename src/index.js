import { createRoot } from "react-dom/client"; //react-dom/clientからcreatRootをインポート(createRoot関数が利用可能となる)
import { StrictMode } from "react";
import { App } from "./App"; //App.jsからApp関数を参照する

const rootElement = document.getElementById("root"); //index.htmlの<div id="root"></div>を取得しているイメージ
const root = createRoot(rootElement); 



root.render( //非同期レンダリングを行う
  <StrictMode> 
     <App/> {/* App関数の結果（returnされた<h1>こんにちは！</h1>が表示される） */}
  </StrictMode>
); //より厳しいルールで記述をすることを設定