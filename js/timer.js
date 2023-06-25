// Funções de tempo do cronômetro
// Atualizar o tempo do cronômetro

import Sounds from './sounds.js';
// Factory Crinado uma Fabrica
export default function Timer({
   minutesDisplay,
   secondsDisplay,
   ResetTimeControl,
}) {

   // Variáveis
   let timerTimeOut;
   let minutes = Number(minutesDisplay.textContent);


   // Atualização da tela
   function updateDisplay(NewMinutes, seconds) {
      NewMinutes = NewMinutes === undefined ? minutes : NewMinutes;
      seconds = seconds === undefined ? 0 : seconds;
      minutesDisplay.textContent = String(NewMinutes).padStart(2, '0');
      secondsDisplay.textContent = String(seconds).padStart(2, '0');
   };

   // Resetar o tempo do cronômetro

   function ResetStopwatch() {
      updateDisplay(minutes, 0);
      Hold();
   };

   // Atualizando os minutos 
   function updateMinutes(NewMinutes) {
      minutes = NewMinutes
   };

   // Pausar o tempo
   function Hold() {
      clearTimeout(timerTimeOut);
   };

   // Contagem do tempo

   function CountDown() {
   timerTimeOut = setTimeout (function() {
         let seconds = Number(secondsDisplay.textContent);
         let minutes = Number(minutesDisplay.textContent);
         let isFinished = minutes <= 0 && seconds <= 0;

      updateDisplay(minutes, 0);

      if(isFinished) {
         ResetTimeControl();
         updateDisplay();
         Sounds().TimeEnd();
         return;
      } else if(seconds <= 0) {
         seconds = 60;
         --minutes;
      };

      updateDisplay(minutes, String(--seconds));
         
         CountDown(); 
      }, 1000);
   };

   return {
      CountDown,
      ResetStopwatch,
      updateMinutes,
      Hold,
      updateDisplay,
   };
};