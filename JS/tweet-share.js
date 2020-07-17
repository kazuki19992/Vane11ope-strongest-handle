// SNSボタンを追加するエリア
const area = document.getElementById('vane11ope_share');
// シェア時に使用する値
const default_url = location.href; // 現在のページURLを使用する場合 location.href;
const shareTextContent = document.getElementById('result');
const default_text = shareTextContent.innerText;
const default_tags = '#ぼくの考えた最強のヴァネロピ'
// シェアボタンを更新する関数
const update_share_button = ({ text: _text, url: _url, tags: _tags } = {}) => {
    const text = _text || default_text;
    const url = _url || default_url;
    const tags = _tags || default_tags;
    
    // 各シェアボタンのリンク先
    const twHref = `https://twitter.com/share?text=${encodeURIComponent(text)}%0a${encodeURIComponent(tags)}%0a&url=${encodeURIComponent(url)}`;
    const liHref = `https://line.me/R/msg/text/?${encodeURIComponent(text)} ${encodeURIComponent(url)}`;

    // シェアボタンのリンクを変更
    document.getElementById('vane11ope_share_twitter').href = twHref;
    document.getElementById('vane11ope_share_line').href = liHref;
};

const reload_content = text => {
    update_share_button({ text });
};

// クリック時にポップアップで表示させる関数
const popupWindow = url => {
    window.open(url, '', 'width=580,height=400,menubar=no,toolbar=no,scrollbars=yes');
}
