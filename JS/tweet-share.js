// SNSボタンを追加するエリア
let area = document.getElementById('vane11ope_share');
// シェア時に使用する値
let url = location.href; // 現在のページURLを使用する場合 location.href;
let shareTextContent = document.getElementById('result');
let text = shareTextContent.innerHTML + '%0a#ぼくの考えた最強のヴァネロピ%0a';

// シェアボタンを生成する関数
function generate_share_button() {

    // シェアボタンの作成
    let twBtn = document.createElement('div');
    twBtn.className = 'left twitter-btn';
    let liBtn = document.createElement('div');
    liBtn.className = 'right line-btn';

    // 各シェアボタンのリンク先
    let twHref = 'https://twitter.com/share?text='+encodeURIComponent(text)+'&url='+encodeURIComponent(url);
    let liHref = 'https://line.me/R/msg/text/?'+encodeURIComponent(text)+' '+encodeURIComponent(url);

    // シェアボタンにリンクを追加
    let twBtnContent = '<div class="share-btn-Twitter waves-effect waves-light">';
    twBtnContent += '       <div>';
    twBtnContent += '           <span class="btn_icon-share"><i class="fab fa-twitter fa-fw fa-2x"></i></span><br>';
    twBtnContent += '           Twitterでヴァネロピを自慢する！';
    twBtnContent += '       </div>';
    twBtnContent += '</div>';

    let liBtnContent = '<div  class="share-btn-line waves-effect waves-light">';
    liBtnContent += '       <div>';
    liBtnContent += '           <span class="btn_icon-share"><i class="fab fa-line fa-fw fa-2x"></i></span><br>';
    liBtnContent += '           LINEでヴァネロピを自慢する！';
    liBtnContent += '       </div>';
    liBtnContent += '</div>';

    let clickEv = 'onclick="popupWindow(this.href); return false;"';
    let twLink = '<a href="' + twHref + '" ' + clickEv + 'onclick="reload_content()">' + twBtnContent + '</a>';
    let liLink = '<a href="' + liHref + '" target="_blank" onclick="reload_content()">' + liBtnContent + '</a>';
    twBtn.innerHTML = twLink;
    liBtn.innerHTML = liLink;

    // シェアボタンを表示
    area.appendChild(twBtn);
    area.appendChild(liBtn);
}

function reload_content(){
    shareTextContent = document.getElementById('result');
    text = shareTextContent.innerHTML + '%0a#ぼくの考えた最強のヴァネロピ%0a';

    let element = document.getElementById("vane11ope_share");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    generate_share_button();
}

// クリック時にポップアップで表示させる関数
function popupWindow(url) {
    window.open(url, '', 'width=580,height=400,menubar=no,toolbar=no,scrollbars=yes');
}