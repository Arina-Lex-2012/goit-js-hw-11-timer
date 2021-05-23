import './sass/main.scss';

const refs = {
   days: document.querySelector('[data-value="days"]'),
   hours: document.querySelector('[data-value="hours"]'),
   mins: document.querySelector('[data-value="mins"]'),
   secs: document.querySelector('[data-value="secs"]'),
};


class CountdownTimer{
    constructor(targetDate) {
        this.targetDate = new Date(targetDate);
    }    
};

const timer = new CountdownTimer('Sep 01, 2021');

setInterval(() => {
    const currentDate = new Date();
    const deltaTime = timer.targetDate - currentDate;
    getTimeComponents(deltaTime);
}, 1000);


// добавляет ноль перед одноцифровым значением времени
function pad(value){
    return String(value).padStart(2, '0');
};


// преобразует милисекунды в дни, часы, минуты, секунды
function getTimeComponents(time){
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.mins.textContent = mins;
    refs.secs.textContent = secs;    
    // return { days, hours, mins, secs};
};

// // // 1 января 1970 00:00, милисекунды


