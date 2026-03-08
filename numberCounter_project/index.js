
const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');
const increaseBtn = document.getElementById('increaseBtn');
const countLable = document.getElementById('countLable');
let count = 0;

decreaseBtn.onclick = function decrease(){
    count --;
    countLable.textContent = count;
}

increaseBtn.onclick = function increase(){
    count ++;
    countLable.textContent = count;
}

resetBtn.onclick = function reset(){
    count = 0;
    countLable.textContent = count;
}