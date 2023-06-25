// EcmaScript - ES6 Modules
import Controls from './controls.js';
import Timer from './timer.js';
import { 
  buttonPause, 
  buttonPlay, 
  buttonSet, 
  buttonStop, 
  minutesDisplay, 
  secondsDisplay 
} from "./elements.js";
import Sound from './sounds.js';
import Events from './events.js';
// Soms da aplicação
const sound = Sound();
// Controls Factory 
const controls = Controls ({
   buttonPlay, 
   buttonPause,
   buttonSet,
   buttonStop,
});
// Timer Factory 
const timer = Timer({
   minutesDisplay,
   secondsDisplay,
   ResetTimeControl: controls.ResetTimeControl,
});
Events({ controls, timer, sound });