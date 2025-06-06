---
layout: default
title: Web：基本
---
<body>
    <div class="block">
        <h1>Web:基本</h1>
    </div>
    <div class="block">
        <h2>リクエストとレスポンスは文字列のやり取り</h2>
        <p>
            〇確認　curl（Client　for　URL)コマンド<br>
            →サーバーにリクエストを送信し、レスポンスを受け取るツール
        </p>
        <p>
            〇前提<br>
            ・VSCodeの拡張機能「Live　Server」を利用</li>
        </p>
        <p>
            〇試行<br>
            ★オプション　-v：詳細を表示する<br>
            コマンド　$ curl -v http://127.0.0.1:5500/memberList.html
        </p>
        <p>
            〇実行結果<br>
            >:リクエスト<br>

            ーー開始行ーーーーーーーーーーーーーー<br>

            >  GET /memberList.html HTTP/1.1<br>

            ーーヘッダーーーーーーーーーーーーーー<br>

            > Host: 127.0.0.1:5500<br>

            > User-Agent:curl/8.9.1<br>

            > Accept: */*<br>

            ーーボディーーーーーーーーーーーーーー<br>

            (空)<br>
        </p>
    </div>
</body>