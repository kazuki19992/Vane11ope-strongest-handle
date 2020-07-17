// SNSボタンを追加するエリア
let snsArea = document.getElementById('vane11ope_share');

// シェア時に使用する値
let shareUrl = location.href; // 現在のページURLを使用する場合 location.href;

generate_share_button(snsArea, shareUrl, shareText);

// シェアボタンを生成する関数
function generate_share_button(area, url, text) {
    let shareTextContent = document.getElementById('result');
    let shareText = shareTextContent.innerHTML + '#ぼくの考えた最強のヴァネロピ';
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

    let liBtnContent = '<div class="share-btn-line waves-effect waves-light">';
    liBtnContent += '       <div>';
    liBtnContent += '           <span class="btn_icon-share"><i class="fab fa-line fa-fw fa-2x"></i></span><br>';
    liBtnContent += '           LINEでヴァネロピを自慢する！';
    liBtnContent += '       </div>';
    liBtnContent += '</div>';

    let clickEv = 'onclick="popupWindow(this.href); return false;"';
    let twLink = '<a href="' + twHref + '" ' + clickEv + '>' + twBtnContent + '</a>';
    let liLink = '<a href="' + liHref + '" target="_blank">' + liBtnContent + '</a>';
    twBtn.innerHTML = twLink;
    liBtn.innerHTML = liLink;

    // シェアボタンを表示
    area.appendChild(twBtn);
    area.appendChild(liBtn);
}

// クリック時にポップアップで表示させる関数
function popupWindow(url) {
    window.open(url, '', 'width=580,height=400,menubar=no,toolbar=no,scrollbars=yes');
}