LoadEventListeners();
function LoadEventListeners(){
    document.addEventListener('DOMContentLoaded', function() {calcTime();})
}
let timeTo = document.getElementById('time-to').value,
    date,
    now = new Date(),
    newYear = new Date('1.1.2020').getTime(),
    startTimer = '';
function calcTime(dates){
    clearInterval(startTimer)
    if(typeof(dates) == 'undefined'){
        date = new Date(newYear).getTime()
    }  else {
        date = new Date(dates).getTime()
    }
    function updateTimer(date){
        let now = new Date().getTime()
        let distance = date - now;

        let days = Math.floor(distance / (1000*60*60*24))
        let hours = Math.floor(distance % (1000*60*60*24)/(1000*60*60))
        let minute = Math.floor(distance %(1000*60*60*24*60)/(60*1000*60))
        let seconds = Math.floor(distance %(1000*24)/(1000))
        document.querySelector('.clock-day').innerHTML = days;
        document.querySelector('.clock-hours').innerHTML = hours;
        document.querySelector('.clock-minutes').innerHTML = minute
        document.querySelector('.clock-seconds').innerHTML = seconds

        if(now >= date){
            clearInterval(startTimer);
            document.querySelector('.clock-day').innerHTML = 'D';
            document.querySelector('.clock-hours').innerHTML = 'O';
            document.querySelector('.clock-minutes').innerHTML = 'N';
            document.querySelector('.clock-seconds').innerHTML = 'E';
        }
    }
    startTimer = setInterval(function () {updateTimer(date);}, 1000)
}