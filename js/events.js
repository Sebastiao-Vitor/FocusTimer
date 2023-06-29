import {
   buttonPause,
   buttonPlay,
   buttonSet,
   buttonSoundOff,
   buttonSoundOn,
   buttonStop
 } from "./elements.js"
export default function Events({ controls, timer, sound }) {
// CallBacks
buttonPlay.addEventListener('click', () => {
   controls.ReleaseTheTime();
   timer.CountDown();
   sound.PressButton();
});
buttonPause.addEventListener('click', () => {
   controls.StopOrContinueTime();
   timer.Hold();
   sound.PressButton();
});
buttonStop.addEventListener('click', () => {
   controls.ResetTimeControl();
   timer.ResetStopwatch();
   sound.PressButton();
});
buttonSet.addEventListener('click', () => {
   sound.PressButton();
   let NewMinutes = controls.getMinutes();
   if(!NewMinutes) {
      timer.ResetStopwatch();
      return;
   };
   timer.updateDisplay(NewMinutes, 0);
   timer.updateMinutes(NewMinutes);
});
buttonSoundOn.addEventListener('click', () => {
   buttonSoundOff.classList.remove('hide');
   buttonSoundOn.classList.add('hide');
   sound.BgAudio.pause();
});
buttonSoundOff.addEventListener('click', () => {
   buttonSoundOff.classList.add('hide');
   buttonSoundOn.classList.remove('hide');
   sound.BgAudio.play();
});
};