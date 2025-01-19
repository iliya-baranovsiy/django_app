import { calculate } from "./func.js";
import { get_cur } from "./get_j.js";
import { post } from "./post_j.js";
import { select } from "./sel_url.js";

const spinButton = document.getElementById('spin-button');
const reels = document.querySelectorAll('.reel');
const resultContainer = document.getElementById('result-container');
const win_but = document.getElementById('win');

let id = select();
let def_cur = 0;


get_cur(id).then(cur => {
    def_cur = cur;
    resultContainer.innerHTML = `Money: ${def_cur}`;
});

function getRandomImage() {
    return images[Math.floor(Math.random() * images.length)];
}

function spin() {
    win_but.innerHTML = `win: ${0}`;
    def_cur -= 10;
    post(id, undefined, def_cur);
    resultContainer.innerHTML = `Money: ${def_cur}`;

    spinButton.disabled = true;
    reels.forEach((reel) => {
        reel.innerHTML = '';

        for (let i = 0; i < 40; i++) {
            setTimeout(() => {
                const img = document.createElement('img');
                img.src = getRandomImage();
                reel.innerHTML = '';
                reel.appendChild(img);
            }, i * 100);
        }
    });

    setTimeout(() => {
        const finalImages = Array.from(reels).map(reel => reel.querySelector('img').src.split('/').pop());
        let win = calculate(finalImages);
        def_cur += win;
        post(id, undefined, def_cur);
        win_but.innerHTML = `win: ${win}`;
        resultContainer.innerHTML = `Money: ${def_cur}`;
        spinButton.disabled = false;
    }, 3900);
}

spinButton.addEventListener('click', spin);