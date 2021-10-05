import React, {useRef, useState} from 'react';
import Song from './components/Song';
import Player from "./components/Player";
import Library from "./components/Library";
import Nav from "./components/Nav";

//Styles
import './styles/app.scss';
//Util
import data from './util';

function App() {
    //Ref
    const audioRef = useRef(null)
    //state
    const [songs, setSongs] = useState(data())
    const [currentSong, setCurrentSong] = useState(songs[0])
    const [isPlaying, setIsPlaying] = useState(false)
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
    })
    const [libraryStatus, setLibraryStatus] = useState(false)

    // handler
    const timeUpdateHandler = (e) => {
        const current = e.target.currentTime;
        const duration = e.target.duration;

        setSongInfo({
            ...songInfo, currentTime: current, duration,
        })
    }
    return (
        <div className='App'>
            <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
            <Song
                currentSong={currentSong}
            />
            <Player
                currentSong={currentSong}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                audioRef={audioRef}
                songInfo={songInfo}
                setSongInfo={setSongInfo}
            />
            <Library
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
                audioRef={audioRef}
                songs={songs}
                isPlaying={isPlaying}
                setSongs={setSongs}
                libraryStatus={libraryStatus}
            />
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
