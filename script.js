document.addEventListener('DOMContentLoaded', () => {
    const puyocchiImage = document.getElementById('puyocchi-image');
    const feedButton = document.getElementById('feed-button');
    const trainButton = document.getElementById('train-button');

    let isPuyocchi = true; // 今はぷよっちの状態か

    feedButton.addEventListener('click', () => {
        alert('ぷよっちにごはんをあげました！');
        // ここにごはんをあげたときのロジックを追加
        // 例: ステータス変化、画像変化など
    });

    trainButton.addEventListener('click', () => {
        alert('ぷよっちがトレーニングをしました！');
        // ここにトレーニングしたときのロジックを追加
        // 例: ステータス変化、画像変化など
        if (isPuyocchi) {
            // 仮でマッチョっちに変化させる
            puyocchiImage.src = 'images/matchotchi.png'; // 後で作成するマッチョっち画像
            puyocchiImage.alt = 'マッチョっち';
            isPuyocchi = false;
        }
    });

    // 将来的にはここでぷよっちの画像を読み込む
    puyocchiImage.src = 'images/puyocchi.png'; // 後で作成するぷよっち画像
    puyocchiImage.alt = 'ぷよっち';
});
