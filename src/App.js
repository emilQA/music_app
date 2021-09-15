import React, {useRef, useState} from 'react'
import Song from './components/Song'
import Player from "./components/Player";
import Library from "./components/Library";

//Styles
import './styles/app.scss';
//Util
import data from './util'

function App() {
    //Ref
    const audioRef = useRef(null)
    //State
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
    })
    const [songs, setSongs] = useState(data());
    const [currentSong, setCurrentSong] = useState(songs[0]);
    const [isPlaying, setIsPlaying] = useState(false)

    // Handlers
    function timeUpdateHandler(e) {
        const current = e.target.currentTime;
        const duration = e.target.duration;
        setSongInfo({...songInfo, currentTime: current, duration})
    }

    return (
        <div className="App">
            <Song currentSong={currentSong}/>

            <Player currentSong={currentSong}
                    isPlaying={isPlaying}
                    setIsPlaying={setIsPlaying}
                    audioRef={audioRef}
                    songInfo={songInfo}
                    setSongInfo={setSongInfo}/>

            <Library
                    isPlaying={isPlaying}
                    audioRef={audioRef}
                    songs={songs}
                    setCurrentSong={setCurrentSong}/>

            <audio
                    onTimeUpdate={timeUpdateHandler}
                    onLoadedMetadata={timeUpdateHandler}
                    ref={audioRef}
                    src={currentSong.audio}>
            </audio>

        </div>

    );
}

export default App;
