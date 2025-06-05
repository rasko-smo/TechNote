// divブロックをクリックした際に階層直下のaタグのリンクをクリックする処理
document.querySelectorAll(".linkBlock").forEach(function (div) {
    div.addEventListener("click", function() {
        const link = div.querySelector("a");
        if(link) link.click();
    });
});

