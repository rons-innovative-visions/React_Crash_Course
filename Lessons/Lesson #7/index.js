import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import {videos} from './data'
import { useState } from 'react';

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

const Video = ({thumbnail, logo, title, channelName, views}) => {

    const [vidViews, setVidViews] = useState(views)

    return (
        <div className='video' onClick={() => setVidViews(vidViews+1)}>
            <img className='thumbnail' src={thumbnail} alt="video thumbnail" />
            <div className="video-content">
                <img src={logo} alt="" />
                <h2>{title}</h2>
                <p>{channelName}</p>
                <span>{vidViews} views</span>
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<VideoList></VideoList>);