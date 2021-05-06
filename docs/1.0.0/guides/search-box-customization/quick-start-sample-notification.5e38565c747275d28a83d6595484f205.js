const app = kintone.app.getId();
const params = {
  app: app,
  query: 'text like "' + keyword + '"'
};

kintone.api(kintone.api.url('/k/v1/records', true), 'GET', params).then(resp => {
  if (resp.records.length !== 0) {
    // レコード取得結果を表示する処理
    const url = '?view=' + id + '&q=f6054049%20like%20' + '"' + keyword + '"';
    window.location.replace(url);
  } else if (resp.records.length === 0) {
    // レコード結果がない場合の処理
    const info = new Kuc.Notification({
      text: 'レコードがありません',
      type: 'info' // blue の背景色が設定される
    });
    info.open();　// info の表示
  }
}).catch(error => {
  // REST API のエラー発生時の処理
  const errmsg = 'レコード取得時にエラーが発生しました。';
  if (error.message !== undefined) {
    errmsg += '\n' + error.message;
  }
  const alert = new Kuc.Notification({
    text: errmsg
    // type プロパティを指定しない場合、red の背景色が設定される
  });
  alert.open();　// alert の表示
});
