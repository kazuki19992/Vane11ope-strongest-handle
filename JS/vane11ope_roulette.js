// ヴァネロピの要素1
// vane11ope_one + conjunction + vane11ope_two + 'ヴァネロピ'
const vane11ope_one = ['最強', '闇', '光', '混沌', '夜', '無職', '太陽', '昼',
                       '堕天使', 'OSS', '闇社会', 'ツイキャス', '夕暮れ',
                       '(๑•ૅㅁ•๑)', '性欲', '執着', '人類', 'メモ帳', 'ボディ・サスペンション',
                       '連続殺人犯', '明朝体', '無抵抗', 'SMプレイ', 'ログインボーナス', 'お月見団子',
                       '東京オリンピック', '脱落', '原子力', '登竜門', 'サメプロ', '金の卵', '近視眼',
                       'ボケ防止', '母親', '豆腐メンタル', 'メンヘラ', 'コンテナ', 'アンドーナツ', '四面楚歌',
                       'なりすまし', '回し蹴り', 'ビンタ', '(๑•̥ૅㅁ•̥๑)', '(๑>◡<๑)', '٩(๑❛ᴗ❛๑)۶', '受験', '思考停止',
                       '物乞い', '期末テスト', 'お釈迦様', '不良番長', 'バナナセーキ', '少年法', '体育教師', '水泳', 'ジャスミン茶',
                       'radare', 'ヴァネロピ', '破壊王', '全て', 'この世', '宇宙', '男子トイレ', 'Twitter', 'ThinkPad', 'ヴァネロピﾁｬﾝ😅',
                       '藤井聡太', '将棋', 'いいこと😍', '属性', 'React', 'ポートフォリオ', '公園', '散歩', 'JS', '小学生', '中学生', '高校生',
                       '開成', '灘', '筑駒', 'ks', '日本', 'アメリカ', 'MS', 'マイクロソフト', 'WSL', 'Linux', 'Linus', 'UNIX', 'Mac', 'iPhone',
                       'Huawei', 'ティム・クック', 'ビル・ゲイツ', 'ヴァ・ネロピ=サン(794~1192)', 'Windows', '英語', 'YouTube'
                      ];
const conjunction = ['の', 'は', 'を', 'が', 'と', 'に', '😅', ''];
const vane11ope_two = ['帝王', '王様', '覇者', '犬', '神', 'プロ', '王', 'ちゅっ😘💓', 'キス💏', 'ツイキャス', '棋聖', 'にゃーん', ''];


const vane11ope_maker = () => {
    const output_html = document.getElementById('result');

    const text = vane11ope_one[getRandomInt(vane11ope_one.length - 1)]
               + conjunction[getRandomInt(conjunction.length - 1)]
               + vane11ope_two[getRandomInt(vane11ope_two.length - 1)]
               + ' ヴァネロピ';
    output_html.innerText = text;
    reload_content(text);
};

const getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
};


// ロード時
document.addEventListener('DOMContentLoaded', e => {
    update_share_button();
    document.getElementById('vane11ope_maker_trigger').addEventListener('click', vane11ope_maker);
});
