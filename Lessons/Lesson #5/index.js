import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import {videos} from './data'

const VideoList = () => {
    return (
        <div className='videolist'>
            {videos.map((video) => {
                return <Video {...video}></Video>
            })}
        </div>
    )
}

const Video = ({thumbnail, logo, title, channelName, views}) => {
    return (
        <div className='video'>
            <img className='thumbnail' src={thumbnail} alt="video thumbnail" />
            <div className="video-content">
                <img src={logo} alt="" />
                <h2>{title}</h2>
                <p>{channelName}</p>
                <span>{views} views</span>
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<VideoList></VideoList>);