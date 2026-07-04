# のりあいGO

帰宅困難者移送マッチング・相乗りタクシー配車アプリのプロトタイプです。GitHub Pagesで公開すると、
https（安全な発行元）で配信されるため、スマートフォンのChrome/Safariから
「ホーム画面に追加」「アプリをインストール」が正しく機能するようになります。

## 公開手順（GitHub Pages）

### 1. 新しいリポジトリを作る

1. GitHubにログインし、右上の「+」→「New repository」
2. リポジトリ名を入力（例：`noriai-go`）
3. 公開設定は「Public」を選択（GitHub Pagesの無料利用にはPublicが必要です。有料プランならPrivateでも可）
4. 「Create repository」をクリック

### 2. ファイルをアップロードする

1. 作成したリポジトリのページで「Add file」→「Upload files」
2. このフォルダの中身（`index.html`、`.nojekyll`）をすべてドラッグ＆ドロップ
3. 下部の「Commit changes」をクリック

### 3. GitHub Pagesを有効にする

1. リポジトリの「Settings」タブを開く
2. 左メニューの「Pages」を選択
3. 「Build and deployment」→「Source」で「Deploy from a branch」を選択
4. 「Branch」で `main`（または `master`）と `/ (root)` を選び、「Save」
5. 1〜2分待つと、ページ上部に公開URLが表示されます
   （例：`https://ユーザー名.github.io/noriai-go/`）

### 4. スマートフォンで開く

1. 発行されたURLをスマートフォンのブラウザで開く
2. Chromeなら右上のメニュー（︙）→「アプリをインストール」
3. Safariなら共有ボタン→「ホーム画面に追加」

https配信になるため、これまで`file://`や`content://`で開いていたときにできなかった
「アプリをインストール」の表示・Service Workerの正常な登録が有効になります。

## ファイル構成

- `index.html` — アプリ本体（フロントエンドのみ、外部サーバー不要の単一ファイル）
- `.nojekyll` — GitHub PagesでJekyll処理を無効化するための空ファイル（そのまま置いてください）

## 更新したいとき

`index.html` を新しいバージョンに差し替えて再度アップロード（Upload files → Commit）するだけで、
数分以内に公開ページも更新されます。
