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

function setTime(GMT) {
  const fusoHorario = GMT;

  // Obter a data e hora atuais no fuso horário recebido
  const today = new Date().toLocaleString('en-US', { timeZone: fusoHorario });
  const formattedTime = formatTime(today);

  document.getElementById('timenow').innerHTML = formattedTime;
  
  function formatTime(dateString) {
    const date = new Date(dateString);
    let h = date.getHours();
    let m = date.getMinutes();
  
    // Adicionar um zero na frente de números < 10
    h = (h < 10) ? `0${h}` : h;
    m = (m < 10) ? `0${m}` : m;
  
    return `${h}:${m}`;
  }
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

setTime('America/Sao_Paulo');
setDate();