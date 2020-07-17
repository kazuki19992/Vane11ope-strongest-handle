// SNSボタンを追加するエリア
let area = document.getElementById('vane11ope_share');
// シェア時に使用する値
let url = location.href; // 現在のページURLを使用する場合 location.href;
let shareTextContent = document.getElementById('result');
let text = shareTextContent.innerText;
let tags = '#ぼくの考えた最強のヴァネロピ'
// シェアボタンを生成する関数
function generate_share_button() {

    // 各シェアボタンのリンク先
    let twHref = 'https://twitter.com/share?text='+encodeURIComponent(text)+'%0a'+encodeURIComponent(tags)+'%0a'+'&url='+encodeURIComponent(url);
    let liHref = 'https://line.me/R/msg/text/?'+encodeURIComponent(text)+' '+encodeURIComponent(url);

    // シェアボタンにリンクを追加
    let twBtnContent = `<div class="share-btn-Twitter waves-effect waves-light">
                            <div>
                                <span class="btn_icon-share"><i class="fab fa-twitter fa-fw fa-2x"></i></span><br>
                                Twitterでヴァネロピを自慢する！
                            </div>
                        </div>`;

    let liBtnContent = `<div class="share-btn-line waves-effect waves-light">
                            <div>
                                <span class="btn_icon-share"><i class="fab fa-line fa-fw fa-2x"></i></span><br>
                                LINEでヴァネロピを自慢する！
                            </div>
                        </div>`;

    let clickEv = 'onclick="popupWindow(this.href); return false;"';
    let twLink = '<a href="' + twHref + '" ' + clickEv + 'onclick="reload_content()">' + twBtnContent + '</a>';
    let liLink = '<a href="' + liHref + '" target="_blank" onclick="reload_content()">' + liBtnContent + '</a>';

    // シェアボタンを挿入
    area.insertAdjacentHTML(
        'afterbegin',
        '<div class="left twitter-btn">' + twLink + '</div>'
        + '<div class="right line-btn">' + liLink + '</div>'
    );
}

function reload_content(){
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
