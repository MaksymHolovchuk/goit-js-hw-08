import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const CURRENT_TIME = 'vimeoplayer-current-time';

player.setCurrentTime(localStorage.getItem(CURRENT_TIME));

const updateTime = time => localStorage.setItem(CURRENT_TIME, time.seconds);
player.on('timeupdate', throttle(updateTime, 1000));