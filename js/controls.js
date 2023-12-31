//  Controles do Cronômetro
export default function Controls({
   buttonPlay, 
   buttonPause,
   buttonSet,
   buttonStop,
}) {

   function ReleaseTheTime() {
      buttonPlay.classList.toggle('hide');
      buttonPause.classList.toggle('hide');
      buttonSet.classList.add('hide');
      buttonStop.classList.remove('hide');
   };

   function StopOrContinueTime() {
      buttonPlay.classList.toggle('hide');
      buttonPause.classList.toggle('hide');
   };

   function ResetTimeControl() {
      buttonStop.classList.toggle('hide');
      buttonSet.classList.toggle('hide');
      buttonPause.classList.add('hide');
      buttonPlay.classList.remove('hide');
   };

   function getMinutes() {
      let NewMinutes = prompt('Quantos minutos vc quer?') || 0;
      if(!NewMinutes) {
         return false;
      };
      return NewMinutes;
   };
   
   return {
      ReleaseTheTime,
      StopOrContinueTime,
      ResetTimeControl,
      getMinutes,
   }
};