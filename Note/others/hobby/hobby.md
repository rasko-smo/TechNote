---
layout: default
title: タイトル
---
<body>
    <div class="block">
        <h1>趣味ページ</h1>
    </div>
    
    <div class="block">
        <h2>目次</h2>
        <ul>
            <li>
                <a href="#MyScene">MyScene</a>
            </li>
        </ul>
    </div>

    <div id="MyScene" class="block">
        <h2><a href="{{ '/Note/others/hobby/MyScene/MyScene.html' | relative_url }}">MyScene</a></h2>
        <ul>
            <li><a href="{{ '/Note/tool/VSCode/VSCodeFunction/VSCodeFunction1.html' | relative_url }}">VSCodeでブラウザのリアルタイム編集を行う</a></li>
        </ul>
    </div>
</body>