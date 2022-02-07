var p = document.getElementById('text');
var p2= document.getElementById('text2');


//タイピングする文字列をここで用意しておく
var textLists = [
    'ハローワールド☭Hello World',
    'テスト☭test'
];
var checkTexts = [];
var hrgn = str.substr(0, str.indexOf('☭'));


createText();

function createText() {
    //文字列をランダムに取得する
    var rnd0 = Math.floor(Math.random() * textLists.length);
    var rnd = rnd0.substr(rnd0.indexOf('☭') + 1);


    //前の文字列を削除してから次の文字列を表示する
    p.textContent = '';
    p2.textContent = hrgn;
    
    //文字列を1文字ずつに分解して、それぞれにspanタグを挿入する
    checkTexts = textLists[rnd].split('').map(function(value) {
        var span = document.createElement('span');

        span.textContent = value;
        p.appendChild(span);

        return span;
    });
}

document.addEventListener('keydown', keyDown);


function keyDown(e) {

    //キーボードからの入力は「e.key」に格納されている
    if(e.key === checkTexts[0].textContent) {
        checkTexts[0].className = 'add-blue';

        //0番目の配列要素を削除して、次の1文字を比較対象にする
        checkTexts.shift();

        //配列要素が空っぽになったら次の問題を出す
        if(!checkTexts.length) {
          createText();
                               }
    }
}
