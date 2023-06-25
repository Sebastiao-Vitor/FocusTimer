export default function() {
   const ButtonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true");
   const KitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true");
   const BgAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true");
   BgAudio.loop;
   function PressButton() {
      ButtonPressAudio.play();
   };
   function TimeEnd() {
      KitchenTimer.play();
   };
   return {
      PressButton,
      TimeEnd,
      BgAudio,
   };
};