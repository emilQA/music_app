import React from "react";

const LibrarySong = (props) => {
    // console.log(props)
    const songSelectHandler = () => {
        // const selectedSong = props.songs.filter((state) => state.id === props.id)
        // props.setCurrentSong(song)

        //OR

        props.setCurrentSong(props.song)
        props.audioRef.current.play()

        if (props.isPlaying) {
            const playPromise = props.audioRef.current.play();
            if (playPromise !== undefined){
                    playPromise.then((audio)=>{
                            props.audioRef.current.play();
                    })
            }
        }
    }
    return (
        <div onClick={songSelectHandler} className='library-song'>
            <img src={props.song.cover} alt={props.song.name}/>
            <div className="library-song-description">
                <h3>{props.song.name}</h3>
                <h4>{props.song.artist}</h4>
            </div>

        </div>
    )
}

export default LibrarySong;