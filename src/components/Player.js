import React, {useRef, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay, faAngleLeft, faAngleRight, faPause} from "@fortawesome/free-solid-svg-icons"


const Player = (props) => {
    //Ref
    const audioRef = useRef(null)

    //Event Handlers
    function playSongHandler() {
        if (props.isPlaying) {
            audioRef.current.pause();
            props.setIsPlaying(!props.isPlaying)
        } else {
            audioRef.current.play();
            props.setIsPlaying(!props.isPlaying)
        }
    }

    function timeUpdateHandler(e) {
        const current = e.target.currentTime;
        const duration = e.target.duration;
        setSongInfo({...songInfo, currentTime: current, duration})
    }

    function dragHandler(e) {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({...songInfo, currentTime: e.target.value})
    }

    //State
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
    })
    const getTime = (time) => {
        return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )
    }
    return (
        <div className='player'>
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input min={0}
                       max={songInfo.duration}
                       value={songInfo.currentTime}
                       type="range"
                       onChange={dragHandler}
                />
                <p>{getTime(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className='skip-back'
                                 size='2x'
                                 icon={faAngleLeft}/>

                <FontAwesomeIcon onClick={playSongHandler}
                                 className='play'
                                 size='2x'
                                 icon={ props.isPlaying ? faPause:faPlay }/>

                <FontAwesomeIcon className='skip-forward'
                                 size='2x'
                                 icon={faAngleRight}/>

            </div>
            <audio
                onTimeUpdate={timeUpdateHandler}
                onLoadedMetadata={timeUpdateHandler}
                ref={audioRef}
                src={props.currentSong.audio}></audio>
        </div>
    )
}

export default Player;