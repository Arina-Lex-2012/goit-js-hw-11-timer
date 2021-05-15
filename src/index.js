import './sass/main.scss';

const refs = {
   clockface: document.getElementById('timer-1'),
   a: document.body.querySelectorAll('[data-value]'),
};

const a = document.body.querySelectorAll('[data-value]');
console.log(a.forEach(element => console.log(element)));
console.log(refs.a.forEach(element => console.log(element)));

function updateClockface({ days, hours, mins, secs }) {
    refs.a = `${days} : ${hours} : ${mins} : ${secs}`;
};

updateClockface(Date.now());

const timer = {
    selector: '#timer-1',
    targetDate: new Date('Sep 01, 2021'),

    start() {
        // const startTime = Date.now();

        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = this.targetDate - currentTime;
            const { days, hours, mins, secs } = getTimeComponents(deltaTime);            
            // console.log(`${days} : ${hours} : ${mins} : ${secs}`);
        }, 1000)
    },
};

timer.start();

function pad(value){
    return String(value).padStart(2, '0');
};

function getTimeComponents(time){
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
    
    return { days, hours, mins, secs};
};







// const days = Math.floor(time / (1000 * 60 * 60 * 24));

// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

// const secs = Math.floor((time % (1000 * 60)) / 1000);

// 1 января 1970 00:00, миллисекунды


// new CountdownTimer({
//     selector: '#timer-1',
//     targetDate: new Date('Jul 17, 2019'),
//   });