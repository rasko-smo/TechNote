$(function(){

    //header共通部品の作成
    $("#header").load("/commonConfig/header.html");

    /* JQueryが動作するか確認用 */
    // alert('スタートしました'); 

    // 以下の処理はCSS上で完結できる処理のためコメントアウトした。
    // //リンクの上にマウスが乗った時にリンクの文字を斜めにする処理
    // $('a').on('mouseover', function(){
    //     $('a').css({
    //         'font-style':'italic'
    //     });
    // });

    // //リンクからマウスを離した時にリンクの文字のフォントを元に戻す処理
    // $('a').on('mouseout', function(){
    //     $('a').css({
    //         'font-style':'normal'
    //     });
    // });
});

//JQueryを使用しないheader共通部品の作成
// fetch("header.html")
//     .then((response) => response.text())
//     .then((data) => document.querySelector("#header").innerHTML = data);