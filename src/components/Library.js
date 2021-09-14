import React from "react";
import LibrarySong from "./LibrarySong";

const Library = (props) => {
    console.log(props)
    return (
        <div className='library'>
            <h2>Library</h2>
            <div className="library-songs">
                {props.songs.map(song => (
                    <LibrarySong song={song}
                                 songs={props.songs}
                                 setCurrentSong={props.setCurrentSong}
                                 id={song.id}
                                 key={song.id}
                    />
                ))}
            </div>
        </div>
    )
}

export default Library