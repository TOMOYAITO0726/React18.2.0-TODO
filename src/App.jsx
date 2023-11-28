import { useState } from "react";
import { ColorfullMessage } from "./components/ColorfullMessage";

export const App = () => { //exportを記述することで他のファイルで関数を参照することができる
  console.log("--App--");
  const [num, setNum] = useState(0);
  const [isShowFace, setIsShowFace] = useState(true);
  const onClickCountUp = () => {
    setNum((prev) => prev + 1);//（）の状態に初期値を更新する。
  };  
  const onClickToggle = () =>{
    setIsShowFace(!isShowFace);
  }
  // if(num % 3 === 0){
  //   setIsShowFace(true);
  // } else {
  //   setIsShowFace(false);
  // }
  return( //複数行をリターンする時は、改行して（）内に記述する。
    <> {/*//関数のコンポーネントとして返すタグは大きな一つのタグにしなけらばならない,<React.Fragment>を<></>として省略できる*/}
      <h1 style={{ color: "red"}}>Hello World!</h1> {/*javascriptのオブジェクトなのでcolorプロパティに文字列でCSSを適用*/ }
      <ColorfullMessage color="blue" >いとっちです！（青）</ColorfullMessage>     
      <ColorfullMessage color="green">いとっちです（緑）</ColorfullMessage>     
      <button onClick={onClickCountUp}>カウントアップ</button> {/*//onClickプロパティに関数を割り当てる*/}
      <p>{num}</p>
      <button onClick={onClickToggle}>on/off</button>
      {isShowFace && <p>!(^^)!</p>} {/* isShowFaceがtrueの時に<p></p>を表示 */}
    </> 
    )//App関数の結果として表示したい要素を返却する
  }