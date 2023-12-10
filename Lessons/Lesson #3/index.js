import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

const VideoList = () => {
    return (
        <div className='videolist'>
            <Video></Video>
            <Video></Video>
            <Video></Video>
            <Video></Video>
        </div>
    )
}

const Video = () => {
    return (
        <div className='video'>
            <img className='thumbnail' src="https://i.ytimg.com/vi/0ycj2NFp5c0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCI-OcuXajTNauFSS7L24Y1r20pLw" alt="video thumbnail" />
            <div className="video-content">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/240px-Default_pfp.svg.png" alt="" />
                <h2>Video Title</h2>
                <p>Channel Name</p>
                <span>0 views • 0 days</span>
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<VideoList></VideoList>);