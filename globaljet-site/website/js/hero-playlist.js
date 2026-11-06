(() => {
  'use strict';

  const video = document.querySelector('.hero__video[data-video]');
  if (!video) return;

  const clips = [
    'assets/images/7224511-uhd_3840_2160_25fps.mp4',
    'assets/images/8052724-hd_1920_1080_30fps.mp4',
    'assets/images/8344927-uhd_3840_2160_25fps.mp4',
    'assets/images/8344937-uhd_3840_2160_25fps.mp4'
  ];

  let currentClip = 0;
  const playClip = index => {
    video.src = clips[index];
    video.load();
    const playback = video.play();
    if (playback?.catch) playback.catch(() => {});
  };

  video.addEventListener('ended', () => {
    currentClip = (currentClip + 1) % clips.length;
    playClip(currentClip);
  });

  playClip(currentClip);
})();
