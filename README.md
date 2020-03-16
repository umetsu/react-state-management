# React State Management

* https://kentcdodds.com/blog/application-state-management-with-react

この記事を参考に、ReduxやMobXなどを使わずにReactだけで状態管理する練習用のリポジトリ。

## ちゃんとコードを書かなくなってきたのでやりたかったこととかをメモ
最初はローカルステートがめっちゃ多いアプリケーションを想定して、Apollo Clientでの状態管理はしないようにしていた。
これはローカルステートをqueryしたり、ローカルステートの数分のresolver書いたりがけっこう大変だった経験から。

なのでリモートからqueryしてきたものもローカルステートも、すべてContext + hooksを使ってローカルに保存するような作りを考えていた。

考えていたんだが、
この構成でApollo Clientを使う意味ってなんだ？
GraphQLとUIの関係はもっとべったり依存し合ってても良いような気がする
などなど、GraphQLに起因するところで悩みが出てきて手が止まってしまった。

GraphQLと大量のローカルステートを同時に扱うときの構成については別で考えることにして
ここではApollo Clientを一旦剥がして、本来やりたかったContext + hooksでのステート管理に集中したい。
リモートからのデータ取得は普通のREST APIなどを叩く形に変更しよう。

## ついでにやってみたいこと
* [x] renovate導入
* [x] Github Actions使ってCIの設定
* [ ] Github Actions使ってCDの設定
  * 今のままデプロイするとヘッダーに混ぜているGithubのトークンが見えちゃうので、どうしようか悩み中
* [ ] apollo clientと合わせたときの構成がどうなるか検証
* [x] Storybook導入
* [x] StoryShots導入
* [x] react-hooks-testing-library導入
* [ ] react-testing-library導入

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
