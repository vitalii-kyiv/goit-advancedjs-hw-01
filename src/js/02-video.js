import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LS_KEY = 'videoplayer-current-time';

function onPlay({ seconds }) {
  localStorage.setItem(LS_KEY, seconds);
}

player.on('timeupdate', throttle(onPlay, 1000));
const currentPlayingTime = LS_KEY ? localStorage.getItem(LS_KEY) : 0;

player.setCurrentTime(currentPlayingTime);
