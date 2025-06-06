---
layout: default
title: Jekyll：基本
---
<body>
    <div class="block">
        <h1>Jekyll：基本</h1>
    </div>
    <div class="block">
            <h2>Jekyllの環境構築</h2>
            <br>
            <h3>概要</h3>   
            <p>ローカルでJekyllサイトを確認・開発できる環境構築について記載します。</p>
            <h3>対象OS</h3>   
            <p>→Windows</p>

            <h3>手順</h3>   
            <ol>
                <li>Rubyのインストール</li>
                <li>Jekyllのインストール</li>
                <li>サイトの作成&ローカルサーバーの起動&確認</li>
                <li>(補足)GitHub　Pagesと同じ環境を用意する方法</li>
            </ol>
    </div>

    <div class="block">
        <h3>1.Rubyのインストール</h3>
        <ol>
            <li><a href="{{ 'https://rubyinstaller.org/' | relative_url }}">RubyInstaller for Windows</a> にアクセス</li>
            <li>最新の「Ruby+Devkit」をダウンロードして実行。</li>
            <li>インストーラで「MSYS2の開発ツールのインストール」にチェックを入れて最後まで完了。</li>
            <li>
                インストール後、コマンドプロンプトで確認：
                <div class="codeText">
                    ruby -v<br>
                    gem -v
                </div>
            </li>
        </ol>
    </div>
    
    <div class="block">
        <h3>2.Jekyllのインストール</h3>
        <ol>
            <li>
                コマンドプロンプトで以下を実行。
                <div class="codeText">
                    gem install bundler jekyll
                </div>
            </li>
            <li>
                インストールを確認。
                <div class="codeText">
                    jekyll -v
                </div>
            </li>
        </ol>
    </div>
    
    <div class="block">
        <h3>3.サイトの作成&ローカルサーバーの起動&確認</h3>
        <ol>
            <li>
                新規サイトの作成
                <div class="codeText">
                    jekyll new mysite<br>
                    cd mysite
                </div>
            </li>
            <li>
                サーバーの起動
                <div class="codeText">
                    bundle exec jekyll serve
                </div>
            </li>
            <li>
                サイトの確認<br>
                →ブラウザで「http://localhost:4000」を開く。
            </li>
            <li>
                サーバーの終了方法<br>
                コマンドプロンプトで「Ctrl　+　C」を押す。<br>
                停止後に以下のような表示が出る。
                <div class="codeText">
                    ^Cjekyll 3.x.x | ...<br>
                    Server interrupted... closing.
                </div>
            </li>
        </ol>
    </div>


    <div class="block">
        <h3>4.(補足)GitHub　Pagesと同じ環境を用意する方法</h3>
        <ol>
            <li>
                Gemfile というファイル（Rubyで依存パッケージを管理するファイル）を作成する。<br>
                以下のコマンドを実行する。
                <div class="codeText">
                    bundle init
                </div>
                Gemfileが作成される。中身は以下のようになる。<br>
                <div class="codeText">
                    # frozen_string_literal: true<br>
                    source "https://rubygems.org"<br>
                    <br>
                    # gem "rails"<br>
                </div>
            </li>
            <li>
                Gemfile内に以下の文を追加する。
                <div class="codeText">
                    gem "github-pages", group: :jekyll_plugins
                </div>
                github-pages というGem（Rubyパッケージ）をインストール対象として指定している。
            </li>
            <li>
                以下のコマンドで、Gemfileに書かれたすべてのgemをインストールする。
                <div class="codeText">
                    bundle install
                </div>
                このとき、github-pages に含まれる Jekyll・テーマ・プラグインもすべて一括で導入されます。
            </li>
            <li>
                サーバーの起動、サイトの確認、サーバーの終了方法は、上記の「3.サイトの作成&ローカルサーバーの起動&確認」と同じです。
            </li>
        </ol>
    </div>
</body>