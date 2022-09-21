import React from 'react';
import YouTube from 'react-youtube';

export default function Team() {
    return (
        <section id="team">
            <div id="team-heading" className='sub-heading'>
                <h2>Meet the team</h2>
                <p>Through our tutorial</p>
            </div>
            <Tutorial />
        </section>
    )
}

// https://stackoverflow.com/questions/1248081/how-to-get-the-browser-viewport-dimensions
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)

let h = 300;
let w = 500;

if ( vw < 500) { h = 200; w = 340;};

class Tutorial extends React.Component {
    render() {
      const opts = {
        height: h,
        width: w,
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      
      //Embed the team video!
      return <YouTube videoId="Cqu2ynINZFc" opts={opts} onReady={this._onReady} className="tutorial-video"/>;
    }
  
    _onReady(event) {
      // access to player in all event handlers via event.target
      event.target.pauseVideo();
    }
  }