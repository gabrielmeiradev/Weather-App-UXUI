// DOM ELEMENTS
const cityinfoElement = document.querySelector('#city-info'),
      dayspnowElement = document.querySelector('#dayspnow'),
      daynowElement = document.querySelector('#daynow'),
      monthElement = document.querySelector('#month'),
      statustElement = document.querySelector('#status-t'),
      monthnumElement = document.querySelector('#month-h'),
      locationsButton = document.querySelectorAll('.locations-btn')
      week = {
        0: 'Sunday',
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday'
      }

locationsButton.forEach(item => {
  item.addEventListener('click', handleClickTime)
})


function handleClickTime(event) {
    const location = event.currentTarget.dataset.location;
    setTime(locationsTime[location]) 
}


function formatTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

const locationsTime = {
  'São Paulo': 'America/Sao_Paulo',
  'Birmingham': 'Europe/London',
  'Manchester': 'Europe/London',
  'New York': 'America/New_York',
  'California': 'America/Los_Angeles'
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

setTime(locationsTime['São Paulo']);
setDate();