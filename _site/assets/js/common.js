// divブロックをクリックした際に階層直下のaタグのリンクをクリックする処理
function handleClick(event) {
    const link = event.currentTarget.querySelector("a");
    link.classList.remove("disable-link");
    if (link) link.click();

    // const aTag = event.currentTarget.querySelector(":scope > .topLinkBlock > a");
}

document.querySelectorAll(".linkBlock").forEach(function (div) {
    div.addEventListener("click", handleClick);
});

function miniMode(event) {
    const dropdown = event.currentTarget.querySelector(".dropdown");
    dropdown.classList.toggle("hidden");
}

// 以下、レスポンシブデザイン仕様
function handleResponsive(width){
    if(width > 400){
        document.querySelectorAll(".headerItem").forEach(function (div) {
            div.removeEventListener("click", miniMode);
        });

        document.querySelectorAll(".topLinkBlock").forEach(function (div) {
            div.addEventListener("click", handleClick);
        });
        const aTag = document.querySelectorAll(".topLinkBlock > a");
        aTag.forEach(aTag => {
            aTag.classList.remove("disable-link");
        });

    } else {
        document.querySelectorAll(".topLinkBlock").forEach(function (div) {
            div.removeEventListener("click", handleClick);
        });

        document.querySelectorAll(".headerItem").forEach(function (div) {
            div.addEventListener("click", miniMode);
        });

        const aTag = document.querySelectorAll(".topLinkBlock > a");
        aTag.forEach(aTag => {
            aTag.classList.add("disable-link");
        });
    }
}
        
//初期実行
document.addEventListener("DOMContentLoaded", function() {
    handleResponsive(window.innerWidth);
});


//リサイズ時にチェック
window.addEventListener("resize", () => {
    handleResponsive(window.innerWidth);
});