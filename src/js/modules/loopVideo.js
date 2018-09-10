const video = document.querySelector('.fullscreen-video');
let mainPage = document.getElementsByClassName('main-page');
if (mainPage.length > 0) {
  const videoLoop = () => {
    if (typeof video.loop == 'boolean') { // loop supported
      video.loop = true;
    } else { // loop property not supported
      video.addEventListener('ended', function () {
        this.currentTime = 0;
        this.play();
      }, false);
    }
  }
  document.addEventListener('DOMContentLoaded', videoLoop);
  // loop video
}



