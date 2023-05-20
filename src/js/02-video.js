import Player from '@vimeo/player';
import _throttle from 'lodash.throttle';

const CURRENT_TIME = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', _throttle(currentTime, 1000));

function currentTime({ seconds }) {
  localStorage.setItem(CURRENT_TIME, seconds);
}

function getCurrentTimeVieoOfLocalStorage() {
  return localStorage.getItem(CURRENT_TIME);
}

player
  .setCurrentTime(getCurrentTimeVieoOfLocalStorage())
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
