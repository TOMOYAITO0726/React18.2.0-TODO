import { ColorfullMessage } from "./components/ColorfullMessage";

export const App = () => { //exportを記述することで他のファイルで関数を参照することができる
  const onClickButton = () => alert();  
  return( //複数行をリターンする時は、改行して（）内に記述する。
    <> {/*//関数のコンポーネントとして返すタグは大きな一つのタグにしなけらばならない,<React.Fragment>を<></>として省略できる*/}
      <h1 style={{ color: "red"}}>Hello World!</h1> {/*javascriptのオブジェクトなのでcolorプロパティに文字列でCSSを適用*/ }
      <ColorfullMessage color="blue" >いとっちです！（青）</ColorfullMessage>     
      <ColorfullMessage color="green">いとっちです（緑）</ColorfullMessage>     
      <button onClick={onClickButton}>ボタン</button> {/*//onClickプロパティに関数を割り当てる*/}
    </> 
    )//App関数の結果として表示したい要素を返却する
  }