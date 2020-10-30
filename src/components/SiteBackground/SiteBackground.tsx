import React from 'react'
import styled from 'styled-components'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

interface SiteBackgroundProps {
  backgroundIndex?: number
}


const SiteBackground: React.FC<SiteBackgroundProps> = ({
  backgroundIndex
}) => {

  const backgroundURLs = [
    "https://video.wixstatic.com/video/46216d_cc8e600fd0644e17810611e74f750de0/720p/mp4/file.mp4",
    "https://video.wixstatic.com/video/46216d_79be0598c34a47478c69b850cad22914/720p/mp4/file.mp4"
  ]

  return (
    <Switch>
      <Route path="/" exact>
        
        <StyledDiv>
          <video role="presentation" preload="auto" crossOrigin="anonymous" loop muted playsInline autoPlay src={backgroundURLs[0]}/>
        </StyledDiv> 
        </Route>
        <Route>
        <StyledDiv>
          <video role="presentation" preload="auto" crossOrigin="anonymous" loop muted playsInline autoPlay src={backgroundURLs[1]}/>
        </StyledDiv> 
        </Route> 
      </Switch>
  )
}


const StyledDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  z-index:-1;

  video {
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    min-height:100%;
    min-width:100%;
    position: fixed;
    top: 0;
    left: 0;
  }
}
`


export default SiteBackground

