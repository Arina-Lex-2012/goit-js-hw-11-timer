import './sass/main.scss';

const refs = {
//    clockface: document.getElementById('timer-1'),
   days: document.querySelector('[data-value="days"]'),
   hours: document.querySelector('[data-value="hours"]'),
   mins: document.querySelector('[data-value="mins"]'),
   secs: document.querySelector('[data-value="secs"]'),
};

// console.log(refs.days.textContent);
// console.log(refs.hours.textContent);
// console.log(refs.mins.textContent);
// console.log(refs.secs.textContent);

const timer = {
    selector: '#timer-1',
    targetDate: new Date('Sep 01, 2021'),

    start() {
        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = this.targetDate - currentTime;
            // const { days, hours, mins, secs } = getTimeComponents(deltaTime);            
            // console.log(`${days} : ${hours} : ${mins} : ${secs}`);
            getTimeComponents(deltaTime); 
            // console.log(time);
        }, 0);
    },
};

timer.start(); 

// function updateClockface({ days, hours, mins, secs }) {
    // refs.a = `${days} : ${hours} : ${mins} : ${secs}`;

function updateClockface ({ days, hours, mins, secs }) {
    console.log({ days, hours, mins, secs });
};

updateClockface({ days:3, hours:3, mins:3, secs:3 });
getTimeComponents();


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



// 1 января 1970 00:00, милисекунды


// new CountdownTimer({
//     selector: '#timer-1',
//     targetDate: new Date('Jul 17, 2019'),
//   });