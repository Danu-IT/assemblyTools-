const timerInput = document.querySelector('#timer__input');
const timerShow = document.querySelector('#timer__text');
const start = document.querySelector('#timer__btn');
const stop = document.querySelector('#timer__btnStop');
let timeMinute = '';
let timer;

const sound = new Howl({
    src: ['/audio/timer.mp3']
});

start.addEventListener('click', () => {
    if(timeMinute == ''){
        timeMinute = parseInt(timerInput.value) * 60;
    }
    timer = setInterval(() => {
        let seconds = timeMinute%60;
        let minutes = timeMinute/60%60;
        let hour = timeMinute/60/60%60;
        let strTimer;

        if(timeMinute <= 0){
            sound.play();
            alert('Таймер закончил отсчет');
            timerShow.innerHTML = '';
            timerInput.value = '';
            clearInterval(timer);
        } else if(minutes){
            strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
            timerShow.innerHTML = strTimer;
        }
        --timeMinute;
    }, 1000)
});

stop.addEventListener('click', () => {
    clearInterval(timer);
})