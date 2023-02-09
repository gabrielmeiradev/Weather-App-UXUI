// DOM ELEMENTS
const cityinfoElement = document.querySelector('#city-info'),
      dayspnowElement = document.querySelector('#dayspnow'),
      daynowElement = document.querySelector('#daynow'),
      monthElement = document.querySelector('#month'),
      statustElement = document.querySelector('#status-t'),
      monthnumElement = document.querySelector('#month-h')
      week = {
        0: 'Sunday',
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday'
      }
      




function formatTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function setTime() {

    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    // add a zero in front of numbers<10
    m = formatTime(m);
    s = formatTime(s);
    t = setTimeout(() => {
        setTime()
    }, 500);
    document.getElementById('timenow').innerHTML = h + ":" + m;

}

function setDate() {
    let today = new Date();
    let month = new Intl.DateTimeFormat("en-US", { month: 'long' }).format(today)
    let day = today.getDate();
    let weekDay = week[today.getDay()];


    dayspnowElement.textContent = weekDay
    monthElement.textContent = month
    daynowElement.textContent = day

}
setTime();
setDate();