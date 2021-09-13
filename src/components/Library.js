import React from "react";
import LibrarySong from "./LibrarySong";

const Library = (props) => {
    return (
        <div className='library'>
            <h2>Library</h2>
            <div className="library-songs">
                {
                    props.songs.map(song => (<LibrarySong song={song}/>))
                }
            </div>
        </div>
    )
}

export default Library