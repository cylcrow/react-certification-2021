import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import SearchContext from '../../providers/SearchContext';
import RelatedVideoList from './RelatedVideoList';

const StyledVideoPlayerContainer = styled.div`
  display: flex;
`;

const VideoPlayerContainer = ({ videoId }) => {
  const { videos } = useContext(SearchContext);

  useEffect(() => {
    let done = false;
    /* global YT */
    /* eslint no-undef: "error" */
    window.player = new YT.Player('player', {
      height:
        0.5 *
        Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0),
      width: '60%',
      videoId,
      events: {
        onReady(event) {
          event.target.playVideo();
        },
        onStateChange(event) {
          if (event.data === YT.PlayerState.PLAYING && !done) {
            setTimeout(window.player.stopVideo, 6000);
            done = true;
          }
        },
      },
    });
  });

  return (
    <StyledVideoPlayerContainer id="video-player-container">
      <div id="player" />
      <RelatedVideoList
        videos={videos}
        playVideoByID={(videoID) => window.player.loadVideoById(videoID, 0)}
      />
    </StyledVideoPlayerContainer>
  );
};

export default VideoPlayerContainer;
