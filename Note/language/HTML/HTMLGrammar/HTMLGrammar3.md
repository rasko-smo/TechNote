---
layout: default
title: HTML：文法
---
<body>
    <div class="block">
        <h1>HTML：文法</h1>
    </div>
    
    <div class="block">
            <h2>HTML上で正規表現チェックを行う</h2>
            <br>

            <ul>
                <li>inputタグ内のpattern属性で正規表現による入力値チェックが可能。</li>
                <li>title属性で、不一致の場合に出力する文言を設定可能。</li>
            </ul>
            <br>


            <div class="codeText">
                &lt;form&gt;<br>
                　　&lt;input type="text" pattern="[0-9a-xA-Z]{4}" title="4つの半角英数字で入力してください"&gt;<br>
                　　&lt;input type="submit" value="check"&gt;<br>
                &lt;/form&gt;
            </div>
            <br>

            <p>実装例：↓</p>
            <br>

            <form>
                <input type="text" pattern="[0-9a-xA-Z]{4}" title="4つの半角英数字で入力してください">
                <input type="submit" value="check">
            </form>

            <br>

            <p>出典サイト：</p>
            <p>
                <a href="{{ 'https://developer.mozilla.org/ja/docs/Web/HTML/Reference/Attributes/pattern' | relative_url }}">MDN Web Docs 『HTML 属性: pattern』</a>
            </p>
            <p>
                <a href="{{ 'https://tech.trustbank.co.jp/entry/2023/01/30/093436' | relative_url }}">TRUST BANK 『inputタグに正規表現を適用させる！pattern属性とは？』</a>
            </p>
    </div>


</body>