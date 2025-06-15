---
layout: default
title: Web：基本
---
<body>
    <div class="block">
        <h1>Web：基本</h1>
    </div>

    <div class="block">
            <h2>基本用語</h2> 
            <ul>
                <li><a href="#hostName">ホスト名、ドメイン名、サーバー名</a></li>
                <li><a href="#CGI">CGI</a></li>
            </ul>


            <!-- コードを表示するときはcodeTextクラスを使う -->
            <!-- <div class="codeText">
                セレクタ {<br>
                　　display: block;<br>
                }
            </div> -->

            <!-- URLはjekyll用に成形する -->
            <!-- <p>出典サイト：
                <a href="{{ 'https://web-camp.io/magazine/archives/85024/' | relative_url }}">DMM WEBCAMP 『HTMLタグをそのまま表示させる方法を解説！pre・codeタグや特殊文字の使用方法』</a>
            </p> -->
    </div>

    <div id="hostName" class="block">
        <h3>ホスト名、ドメイン名、サーバー名</h3>
        <br>

        <p>例)　https://news.yahoo.co.jp</p>
        <br>

        <p>ホスト名：news</p>
        <p>ドメイン名：yahoo.co.jp</p>
        <p>サーバー名：ホスト名＋ドメイン名　FQDM(Full Qualified Domain Name)</p>
        <br>

        <p>ホスト名</p>
        <ul>
            <li>ホストコンピューターの省略言語。</li>
            <li>ホストコンピューターは、ネットワークの中心的な役割を果たすコンピュータ。</li>
            <li>インターネット上における建造物に相当する。</li>
            <li>上記の例の場合、ニュースサイトであることがわかる。</li>
        </ul>
        <br>

        <p>ドメイン名</p>
        <ul>
            <li>インターネットにおける住所に相当する。</li>
            <li>重複登録することはできない。同じドメイン名は存在しない。</li>
            <li>商標などに違反しない限り、原則早い者勝ち。</li>
            <li>ドメインはドット「.」で区切られた形式となっている。</li>
            <li>最後のブロックがトップレベルドメイン。</li>
            <li>その前がセカンドレベルドメインと、階層的に管理されている。</li>
            <li>上記の例だと、サードレベルはyahoo、セカンドレベルはco、トップレベルはjp。</li>
        </ul>
    </div>

    <div id="CGI" class="block">
        <h3>CGI</h3>
        <br>

        <ul>
            <li>CGIは「Common Gateway Interface」の略。</li>
            <li>ウェブサーバがウェブブラウザからの要求に応じてプログラムを実行する仕組み。</li>
            <li>ウェブサイトで動的なコンテンツ（例：掲示板、アンケート、ショッピングカートなど）を実現するために使われる。</li>
        </ul>

    </div>
</body>