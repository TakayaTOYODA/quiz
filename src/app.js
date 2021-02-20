const quiz = [
    {
        question: 'Q1. ゲーム機史上、最も売れたゲーム機は次の内どれ？',
        answers: [
                     'スーパーファミコン',
                     'プレステーション２',
                     'ニンテンドースイッチ',
                     'ニンテンドーDS'
                 ],
        correct: 'ニンテンドーDS'
    },{
        question: 'Q2. 次のうち、俳句の季語として認定されていないものはどれ？',
                answers: [
                             'サザン',
                             'チューブ',
                             'ユーミン',
                             '山下達郎'
                         ],
                correct: 'チューブ'
    },{
        question: 'Q3. アニメ「サザエさん」にでてくるアナゴさんの年齢は？',
                answers: [
                             '25歳',
                             '28歳',
                             '33歳',
                             '41歳'
                         ],
                correct: '28歳'
    },{
        question: 'Q4. 2020年7月の初競りでは1つ130万円の値段がついた「ルビーロマン」。さてこれはどんな果物の品種？',
                answers: [
                             'りんご',
                             'いちご',
                             'ぶどう',
                             'すいか'
                         ],
                correct: 'ぶどう'
    },{
        question: 'Q5. レディー・ガガの配信ダウンロード売り上げランキング第一位は？',
                        answers: [
                                     'Born This Way',
                                     'Poker Face',
                                     'Edge Of Glory',
                                     'Applause'
                                 ],
                        correct: 'Born This Way'
    }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length

// クイズの問題文、選択肢を定義
const setupQuiz = function(){
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex<buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}
setupQuiz();


const clickHandler = function(e){
    if(quiz[quizIndex].correct === e.target.textContent){
            window.alert('正解 ！');
            score++;
        }else{
            window.alert("不正解 ！ 正解は " + quiz[quizIndex].correct + " です",);
        }
    quizIndex++;
    if(quizIndex < quizLength){
        setupQuiz();
    }else{
        window.alert('終了！　あなたの正解数は' + score + '/' + quizLength + 'です。');
    }
};
// ボタンクリックしたら正誤判定
let handleIndex = 0;
while(handleIndex < buttonLength) {
    $button[handleIndex].addEventListener('click',function(e){
        clickHandler(e);
    });
    handleIndex++;
};
