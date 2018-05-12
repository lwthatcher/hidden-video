import videojs from 'video.js';

const defaults = {};
const Button = videojs.getComponent('Button');

class StopButtonToggle extends Button {

  constructor(player, options) {
    super(player, options);
  }

  buildCSSClass() {
    return 'vjs-stop-button vjs-icon-square vjs-button vjs-control ${super.buildCSSClass()}';
  }

  handleClick() {
    let player = this.player();
    player.pause();
    player.currentTime(0);
    player.bigPlayButton.show();
    player.posterImage.show();
    this.trigger('stopped');
  }

}

const stopButton = function(options) {
  let player = this;
  this.ready(() => {
    let stopButtonToggle = this.controlBar.addChild('StopButton', options);
    let volumeMenuButton = document.getElementsByClassName('vjs-volume-menu-button')[0];
    player.controlBar.el().insertBefore(stopButtonToggle.el(), volumeMenuButton);
  });
};

videojs.registerComponent('StopButton', StopButtonToggle);
videojs.plugin('stopButton', stopButton);

stopButton.VERSION = '__VERSION__';

export {StopButtonToggle, stopButton};
