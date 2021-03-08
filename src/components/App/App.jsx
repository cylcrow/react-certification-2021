import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { LayoutWrapper } from '../Layout';
import HomeVideos from '../HomeVideos/HomeVideos';
import { lightTheme, darkTheme } from '../../providers/themes';
import VideoPlayerContainer from '../HomeVideos/VideoPlayerContainer';

const StyledWelcome = styled.div`
  text-align: center;
`;

function App() {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const [videoID, setVideoID] = useState(null);

  const switchTheme = () => {
    setIsLightTheme(!isLightTheme);
  };

  const getThemeConfig = () => ({
    theme: isLightTheme ? lightTheme : darkTheme,
    switchTheme,
  });

  return (
    <ThemeProvider theme={getThemeConfig()}>
      <LayoutWrapper>
        {videoID ? (
          <div data-testid="video-player-container">
            <VideoPlayerContainer />
          </div>
        ) : (
          <div>
            <StyledWelcome>
              <h1>Welcome to the challenge!</h1>
            </StyledWelcome>
            <HomeVideos playVideoNow={setVideoID} />
          </div>
        )}
      </LayoutWrapper>
    </ThemeProvider>
  );
}

export default App;