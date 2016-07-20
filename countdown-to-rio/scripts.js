
// var rioStart = Date.parse('August 5, 2016 19:00');
var rioStart = new Date('August 5, 2016 19:00').getTime();

// Various time units in seconds
 
 var secondsInAMinute = 60;
 var secondsInAnHour = secondsInAMinute * 60;
 var secondsInADay = secondsInAnHour * 24;
 var secondsInAWeek = secondsInADay * 7;

 // Get various DOM elements in var's
var countdownTimer = document.getElementById("countdown-timer");
var secondsDigit = document.getElementsByClassName("seconds-number") [0];
var minutesDigit = document.getElementsByClassName("minutes-number") [0];
var hoursDigit = document.getElementsByClassName("hours-number")[0];
var daysDigit = document.getElementsByClassName("days-number")[0];
var weeksDigit = document.getElementsByClassName("weeks-number")[0];


function updateCounter(){
// Get the current time in milliseconds since 1970 (UNIX epoch).
var now = Date.now();

// Time in seconds between current moment and start of Rio 2016
var getTimeTillRio = (rioStart - now) / 1000;


// Get various units of time till event
var seconds = Math.floor(getTimeTillRio % 60);
var minutes = Math.floor((getTimeTillRio / secondsInAMinute) % 60);
var hours = Math.floor((getTimeTillRio / secondsInAnHour) % 24);
var days = Math.floor((getTimeTillRio / secondsInADay) % 7);
var weeks = Math.floor((getTimeTillRio / secondsInAWeek) % 52);

console.log(seconds);
console.log(minutes);
console.log(hours);
console.log(days);
console.log(weeks);
// Set the HTML of the given unit with the new amount

secondsDigit.innerHTML = seconds;
minutesDigit.innerHTML = minutes;
hoursDigit.innerHTML = hours;
daysDigit.innerHTML = days;
weeksDigit.innerHTML = weeks;
// console.log(document.querySelector('.weeks-number')); Accomplishes same thing as line 29
// console.log(document.getElementsByClassName('weeks-number')[0]); Accomplishes same thing as line 32
// console.log(document.getElementsByTagName('span')[0]); Accomplishes same thing as line 32

}
// Call the setInterval which wil run our update function every 1000 ms/ 1 second
setInterval(updateCounter, 1000);