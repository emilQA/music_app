import React from "react";

const LibrarySong = (props) => {
    console.log(props)
    return (
        <div className='library-song'>
            <img src={props.song.cover} alt={props.song.name}/>
            <div className="library-song-description">
                <h3>{props.song.name}</h3>
                <h4>{props.song.artist}</h4>
            </div>

        </div>
    )


}

export default LibrarySong;