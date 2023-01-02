// DOM ELEMENTS
let weatherh1 = document.querySelector('#weather-h1'),
    cityinfo  = document.querySelector('#city-info'),
    dayspnow  = document.querySelector('#dayspnow'),
    daynow    = document.querySelector('#daynow'),
    month     = document.querySelector('#month'),
    monthnum  = document.querySelector('#month-h'),
    statust   = document.querySelector('#status-t'),
    statusr   = document.querySelector('#status-r'),
    numr      = document.querySelector('#num-r'),
    statush   = document.querySelector('#status-h'),
    numh      = document.querySelector('#num-h'),
    statusw   = document.querySelector('#status-w'),
    numw      = document.querySelector('#num-w');



function checkTime(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }
    
    function startTime() {
   
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        
        // add a zero in front of numbers<10
        m = checkTime(m);
        s = checkTime(s);
        t = setTimeout(function () {
            startTime()
        }, 500);
        document.getElementById('timenow').innerHTML = h + ":" + m;
    }
    startTime();
