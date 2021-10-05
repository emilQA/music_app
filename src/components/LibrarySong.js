import React from 'react';

const LibrarySong = ({song, setSongs ,songs, setCurrentSong, id, audioRef, isPlaying}) => {
    const songSelectHandler = () => {
        const selectedSong = songs.filter((state) => state.id === id);
        setCurrentSong(selectedSong[0])
        // Add active state
        const newSong = songs.map((song) => {
            if (song.id === id) {
                return {
                    ...song,
                    active: true,
                }
            } else {
                return {
                    ...song,
                    active: false,
                }
            }
        })
        setSongs(newSong)
        //check if the song is playing
        if (isPlaying) {
            const playPromise = audioRef.current.play()
            if (playPromise !== undefined) {
                playPromise.then((audio) => audioRef.current.play())
            }
        }
    }
    return (
        <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : ''}`}>
            <img src={song.cover} alt={song.cover}></img>
            <div className="library-song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong;