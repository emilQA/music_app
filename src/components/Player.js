import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay, faAngleLeft, faAngleRight, faPause} from "@fortawesome/free-solid-svg-icons"


const Player = (props) => {


    //Event Handlers
    function playSongHandler() {
        if (props.isPlaying) {
                props.audioRef.current.pause();
            props.setIsPlaying(!props.isPlaying)
        } else {
            props.audioRef.current.play();
            props.setIsPlaying(!props.isPlaying)
        }
    }



    function dragHandler(e) {
        props.audioRef.current.currentTime = e.target.value;
        props.setSongInfo({...props.songInfo, currentTime: e.target.value})
    }


    const getTime = (time) => {
        return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )
    }



    return (
        <div className='player'>
            <div className="time-control">
                <p>{getTime(props.songInfo.currentTime)}</p>
                <input min={0}
                       max={props.songInfo.duration}
                       value={props.songInfo.currentTime}
                       type="range"
                       onChange={dragHandler}
                />
                <p>{getTime(props.songInfo.duration)}</p>
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

        </div>
    )
}

export default Player;