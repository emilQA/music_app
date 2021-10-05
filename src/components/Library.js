import React from 'react';
import LibrarySong from './LibrarySong'


const Library = ({songs , setSongs, setCurrentSong , audioRef , isPlaying ,libraryStatus}) => {
 return(
     <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
            <h2>Library</h2>
         <div className="library-songs">
             {songs.map((song)=>(
              <LibrarySong song={song}
                           songs={songs}
                           setSongs={setSongs}
                           id={song.id}
                           key={song.id}
                           audioRef={audioRef}
                           isPlaying={isPlaying}
                           setCurrentSong={setCurrentSong}/>
             ))}
         </div>
     </div>
 )
}

export default Library;