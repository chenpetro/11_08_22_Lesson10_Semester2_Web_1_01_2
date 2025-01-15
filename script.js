let deadline = '08-12-2025'
function getTime(endtime) {
    // let newTime = new Date(2024, 1, 1)
    // console.log(newTime);
     let time = Date.parse(deadline) - Date.parse(new Date())
    console.log(Date.parse(deadline));
    console.log(Date.parse(new Date()));
    console.log(time);
// let seconds = Math.floor((time / 1000) % 60);
// let minutes = Math.floor((time / (1000 * 60)) % 60);
// let hours = Math.floor((time / (1000 * 60 * 60)) % 24);
// let days = Math.floor(time / (1000 * 60 * 60 * 24));
   

    let seconds = Math.floor((time / 1000) % 60)
    let minutes = Math.floor((time / 1000/60) % 60)
    let hours = Math.floor(time / (1000*60*60)) % 24
    let days = Math.floor((time / (1000*60*60*24)))
    
    console.log(seconds);
    console.log(minutes);
    console.log(hours);
    console.log(days);

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

getTime()