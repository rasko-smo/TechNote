---
layout: default
title: HTML：基本
---
<body>
    <div class="block">
        <h1>HTML：基本</h1>
    </div>

    <div class="block">
            <h2>基本仕様</h2>

            <ul>
                <li>基本用語</li>
                <li>基本仕様</li>
            </ul>

            <!-- <div class="codeText">
                セレクタ {<br>
                　　display: block;<br>
                }
            </div> -->

            <!-- <p>出典サイト：
                <a href="{{ 'https://web-camp.io/magazine/archives/85024/' | relative_url }}">DMM WEBCAMP 『HTMLタグをそのまま表示させる方法を解説！pre・codeタグや特殊文字の使用方法』</a>
            </p> -->
    </div>

    <div class="block">
        <h3>基本用語</h3>
        <br>

        <ul>
            <li>ハイパーテキスト：リンクを埋め込むことができるドキュメント</li>
            <li>リンク：ドキュメントに埋め込まれたURL</li>
            <li>レンダリング：画面に表示すること</li>
        </ul>

    </div>

    <div class="block">
        <div class="block">
            <h3>基本仕様</h3>
        </div>

        <div class="block">
            <p>大文字と小文字の区別</p>
            <ul>
                <li>idやクラスの値などは区別される。</li>
                <li>それ以外の要素名などは区別されない。</li>
                <li>(補足：CSSは値以外は区別なし、JavaScriptは区別あり。)</li>
                <li>(補足：最近の代表的なブラウザには、「標準(Standards)モード」と「互換(Quirks)モード」という2つの描画モードがあり、モードの違いで区別の判断も異なるため注意。)</li>
            </ul>
        </div>

        <div class="block">
            <p>html要素内の言語指定について</p>
            <div class="codeText">
                &lt;html　lang="ja”&gt;
            </div>
            <ul>
                <li>html要素内のlang属性は、Googleでは無視しているという話があるが、自動翻訳のミスなどを避けるためにつけておいてよい。</li>
                <li>日本語の場合は「lang="ja”」</li>
            </ul>
        </div>

        <div class="block">
            <p>html要素内のdir属性について</p>
            <div class="codeText">
                &lt;html　lang="ja”　dir="ltr”&gt;
            </div>
            <ul>
                <li>dir="ltr”　の部分は、音声アプリを使用する際に左から読んでねという意味になる。</li>
                <li>ltrは left to right の略。右からはrtlと書く。</li>
                <li>dirの略はおそらくdirectory list。</li>
            </ul>
        </div>

    </div>
</body>