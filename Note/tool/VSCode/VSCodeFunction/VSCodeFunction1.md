---
layout: default
title: VSCode：機能
---
<body>
    <div class="block">
        <h1>VSCode：機能</h1>
    </div>

    <div class="block">
        <h2>VSCodeでブラウザのリアルタイム編集を行う</h2>
        
        <p>[拡張機能]</p>
        <p>・Live　Server：ライブプレビュー機能</p>
        <p>→HTML/CSS/JavaScriptを編集して保存するだけで、ブラウザを再読み込みしなくてもブラウザの画面が更新される。</p>
        <p>以下、手順を説明</p>
    </div>

    <div class="block">
        <p>A.インストール</p>
        <ol>
            <li>VSCodeを起動</li>
            <li>
                <p>左側に配置されている「ブロックが崩れたような」アイコンを押下</p>
                <p>→左側（左ペイン）に現在インストールされている拡張機能の一覧が表示される。</p>
            </li>
            <li>
                <p>左ペインの上部の検索ボックスから拡張機能を検索</p>
                <p>→例　Live　Server</p>
                <p>※項目を押下すると、右ペインに説明が表示される</p>
            </li>
            <li>インストールのボタンを押下</li>
            <li>
                <p>インストール後、VSCodeを再起動しておく</p>
                <p>※拡張機能によっては右下に再起動を促すダイアログが表示される</p>  
            </li>
        </ol>
    </div>

    <div class="block">
        <p>B.設定</p>
        <p>※インストール後に設定が必要な拡張機能がある</p>
        <p>→VSCodeの左下の歯車のアイコン→設定を押下する</p>

        <ol>
            <li>設定タブの検索ボックスに「Live　Server」と入力</li>
            <li>Live　Server　→　Settings:Custom　Browserを探す</li>
            <li>初期値：「numm」→「chrome」に変更</li>
        </ol>
    </div>

    <div class="block">
        <p>C.利用</p>
        <ol>
            <li>ブラウザに表示させていWebページを作成</li>
            <li>
                <p>右下の「Go　Live」アイコンを押下すると、Chromeで表示確認ができる</p>
                <p>※「Windowsセキュリティの重要な警告画面が表示された場合は、</p>
                <p>外部と接続を行わない限りでは「キャンセル」を選択して問題ない。</p>
            </li>
        </ol>
    </div>
</body>