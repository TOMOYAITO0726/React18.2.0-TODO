import { useEffect, useState } from "react";
import { ColorfullMessage } from "./components/ColorfullMessage";
//import    Hoge  from "./components/ColorfullMessage";//default exportの場合、｛｝はいらない,import名は変更できる


export const App = () => { //exportを記述することで他のファイルで関数を参照することができる
  console.log("--App--");
  const [num, setNum] = useState(0);
  const [isShowFace, setIsShowFace] = useState(false);
  const onClickCountUp = () => {
    setNum((prev) => prev + 1);//（）の状態に初期値を更新する。
  };  
  const onClickToggle = () =>{
    setIsShowFace(!isShowFace);
  }
  useEffect(()=> {
    if(num > 0) {
      if(num % 3 === 0){
        isShowFace || setIsShowFace(true);//isShowFaceがtrueなら右辺は評価されない,isShowFaceがfalseなら右辺が実行される
      } else {
        isShowFace && setIsShowFace(false);//isShowFaceがtrueなら右辺が実行される,isShowFaceがfalseなら右辺は評価されない
      }
    }
  },[num]);//第一引数に関数、第二引数に配列を指定
  //配列の値に変更があった場合のみ、useEffectの中の関数が実行される
  
  
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