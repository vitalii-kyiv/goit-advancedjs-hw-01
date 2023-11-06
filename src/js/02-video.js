import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function onPlay(data) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
}

player.on('timeupdate', throttle(onPlay, 1000));
const currentPlayingTime = JSON.parse(
  localStorage.getItem('videoplayer-current-time')
);

player
  .setCurrentTime(currentPlayingTime.seconds)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
