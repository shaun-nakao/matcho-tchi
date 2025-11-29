document.addEventListener('DOMContentLoaded', () => {
    // HTMLの要素を取得
    const muscleStatDisplay = document.getElementById('muscle-stat');
    const fatStatDisplay = document.getElementById('fat-stat');
    const feedButton = document.getElementById('feed-button');
    const trainButton = document.getElementById('train-button');

    // --- ゲームの状態を管理する変数 ---
    let gameState = {
        muscle: 10, // 初期の筋肉量
        fat: 80     // 初期の脂肪量
    };

    // --- 関数：画面のステータス表示を更新する ---
    function updateDisplay() {
        muscleStatDisplay.textContent = gameState.muscle;
        fatStatDisplay.textContent = gameState.fat;
    }

    // --- イベントリスナー：ボタンが押されたときの処理 ---

    // 「ごはんをあげる」ボタン
    feedButton.addEventListener('click', () => {
        // 脂肪が増える
        gameState.fat += 10;
        
        console.log('ごはんを食べました。脂肪が増加！');
        updateDisplay(); // 画面を更新
    });

    // 「トレーニングする」ボタン
    trainButton.addEventListener('click', () => {
        // 筋肉が増え、脂肪が減る
        gameState.muscle += 5;
        gameState.fat -= 5;

        // 脂肪がマイナスにならないように調整
        if (gameState.fat < 0) gameState.fat = 0;

        console.log('トレーニングしました！筋肉増加、脂肪減少！');
        updateDisplay(); // 画面を更新
    });

    // --- ゲーム開始時の初期化処理 ---
    updateDisplay(); // 最初のステータスを表示
});
