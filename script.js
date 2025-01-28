let deadline = '08-12-2025'
function getTime(endtime) {
    // let newTime = new Date(2024, 1, 1)
    // console.log(newTime);
     let time = Date.parse(deadline) - Date.parse(new Date())
    // console.log(Date.parse(deadline));
    // console.log(Date.parse(new Date()));
    // console.log(time);
// let seconds = Math.floor((time / 1000) % 60);
// let minutes = Math.floor((time / (1000 * 60)) % 60);
// let hours = Math.floor((time / (1000 * 60 * 60)) % 24);
// let days = Math.floor(time / (1000 * 60 * 60 * 24));
   

    let seconds = Math.floor((time / 1000) % 60)
    let minutes = Math.floor((time / 1000/60) % 60)
    let hours = Math.floor(time / (1000*60*60)) % 24
    let days = Math.floor((time / (1000*60*60*24)))

    return {
        'total': time,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds,
        'days': days
    }
    // let seconds = document.querySelectorAll('.seconds')
    // let minutes = document.querySelectorAll('.minutes')
    // let hours = document.querySelectorAll('.hours')
    
}

function setTime(id, endtime){
let timer1 = document.getElementById(id)
let seconds = timer1.querySelector('.seconds')
let minutes = timer1.querySelector('.minutes')
let days = timer1.querySelector('.days')
timeInterval = setInterval(updateTime, 1000)

function updateTime(){
    let time = getTime(endtime)    
    seconds.textContent = `${time.seconds} seconds`;
    minutes.textContent = `${time.minutes} minutes`;
    hours.textContent = `${time.hours} hours`;
    days.textContent = `${time.days} days`;
}

updateTime()

}

setTime('timer1', deadline)