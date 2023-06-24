function updateTime() {
  var currentTime = new Date();
  
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  
  // Adiciona um zero à esquerda se o número for menor que 10
  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;
  
  var timeString = hours + ":" + minutes + ":" + seconds;
  
  var daysOfWeek = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
  var day = daysOfWeek[currentTime.getDay()];
  
  var date = currentTime.toLocaleDateString('pt-BR');
  
  document.getElementById("time").innerHTML = timeString;
  document.getElementById("date").innerHTML = date;
  document.getElementById("day").innerHTML = day;
}

updateTime();
setInterval(updateTime, 1000);
