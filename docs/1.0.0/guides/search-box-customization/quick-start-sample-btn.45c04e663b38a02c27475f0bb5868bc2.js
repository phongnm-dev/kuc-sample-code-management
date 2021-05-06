const button = new Kuc.Button({
  type: 'submit',
  text: '検索',
  id: 'kuc_button'
});

// add Event
// 表示したボタンに click イベントの処理を追加
button.addEventListener('click', event => {      
  const keyword = text.value;
  const errorMessage = '全角のみ入力できます';
  // 表示したメッセージの初期化
  text.error = ''; 
  
  // 全角文字の判定
  if (!keyword.match(/^[^\x01-\x7E\xA1-\xDF]+$/)) {
    // 全角以外ならエラーメッセージを表示して処理を中断する
    text.error = errorMessage;
    return;
  }
});
