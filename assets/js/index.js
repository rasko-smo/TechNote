// li要素をクリックした際に階層直下のaタグのリンクをクリックする処理
document.querySelectorAll("li").forEach(function (li) {
    li.addEventListener("click", function() {
        const link = li.querySelector("a");
        if(link) link.click();
    });
});