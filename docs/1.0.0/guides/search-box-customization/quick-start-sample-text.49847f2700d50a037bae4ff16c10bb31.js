// プロパティで付与した id を利用して増殖バグを防ぐ
if (document.getElementById('kuc_text') !== null) {
  return event;
}

const header = kintone.app.getHeaderMenuSpaceElement();
const text = new Kuc.Text({
  placeholder: 'キーワードを入力してください',
  id: 'kuc_text' // id を付与
});
