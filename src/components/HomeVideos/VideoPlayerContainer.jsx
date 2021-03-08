import React, { useEffect } from 'react';
import styled from 'styled-components';

const StyledVideoPlayerContainer = styled.div``;

const VideoPlayerContainer = () => {
  useEffect(() => {
    let done = false;
    /* global YT */
    /* eslint no-undef: "error" */
    const player = new YT.Player('player', {
      height: '390',
      width: '640',
      videoId: 'M7lc1UVf-VE',
      events: {
        onReady(event) {
          event.target.playVideo();
        },
        onStateChange(event) {
          if (event.data === YT.PlayerState.PLAYING && !done) {
            setTimeout(player.stopVideo, 6000);
            done = true;
          }
        },
      },
    });
  });

  return (
    <StyledVideoPlayerContainer>
      <div id="player" />
    </StyledVideoPlayerContainer>
  );
};

export default VideoPlayerContainer;
