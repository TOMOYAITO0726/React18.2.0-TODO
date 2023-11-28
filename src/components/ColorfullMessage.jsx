export const ColorfullMessage = ({ color, children}) => {//他のファイルでも参照できるようにexportを付ける、引数は何でもよい
  console.log("--ColorfullMessage--");  
  const contentStyleA = {
        color,//オブジェクトの省略記法（プロパティの名前と変数名が等しい時は省略可）
        fontSize: "30px" //javascriptオブジェクトなのでキャメルケースで書くfont-sizeだとエラーになる
      };

    return (
      <p style={contentStyleA}>{children}</p>
        
    )
}