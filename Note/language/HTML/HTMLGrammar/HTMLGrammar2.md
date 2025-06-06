---
layout: default
title: HTML：文法
---
<body>
    <div class="block">
        <h1>HTML：文法</h1>
    </div>

    <div class="block">
        <h2>HTML上でHTMLタグをそのまま表示させる方法</h2>
        <p>概要：特殊文字とpreタグを使用する</p>

        <p>小なり記号の書き方</p>
        <div class="codeText">
            &amp;lt;
        </div>

        <p>大なり記号の書き方</p>
        <div class="codeText">
            &amp;gt;
        </div>

        <p>上記の小なり記号と大なり記号をpreタグ内に記述する</p>

    </div>

    <div class="block">
        <p>記述例</p>
        <div class="codeText">
            <pre>
&lt;pre&gt;
    &amp;lt;h1&amp;gt;タイトル&amp;lt;/h1&amp;gt;
  
    &amp;lt;p&amp;gt;～文章～&amp;lt;/p&amp;gt;
&lt;/pre&gt;
            </pre>
        </div>

        <p>上記の記述がブラウザで以下のように表示される</p>
        <div class="codeText">
            <pre>
&lt;h1&gt;タイトル&lt;/h1&gt;

&lt;p&gt;～文章～&lt;/p&gt;
            </pre>
        </div>
        
        <p>出典サイト：
        <a href="{{ 'https://web-camp.io/magazine/archives/85024/' |relative_url }}">DMM WEBCAMP 『HTMLタグをそのまま表示させる方法を解説！pre・codeタグや特殊文字の使用方法』</a></p>
    </div>
</body>