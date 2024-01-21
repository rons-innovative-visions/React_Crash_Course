import { useState } from 'react';
import { videos } from '../../data'
import Video from './Video';

const VideoList = () => {
    const [search, setSearch] = useState();

    return (
        <div>
            <input type="text" className='search' placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)}/>
            <div className='videolist'>
                {videos.map((video) => {
                    if(search){
                        return video.title.toLowerCase().includes(search.toLowerCase()) && <Video key={video.views} {...video}></Video>
                    }
                    return <Video key={video.views} {...video}></Video>
                })}
            </div>
        </div>
    )
}

export default VideoList