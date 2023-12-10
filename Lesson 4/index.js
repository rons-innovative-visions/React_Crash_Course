import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

const video1 = {
    thumbnail: "https://i.ytimg.com/vi/pHvHS2EWbQ4/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAF5S6MJpjjFlppBwMnXPwJgP_HmA",
    logo: "https://yt3.googleusercontent.com/joEJBYrNbdiN5dUzIN83QRrbGThbl1enjL688XSmsA5FOOiMmilBKEcB-RTu2kVX-GD6IuOsLQ=s176-c-k-c0x00ffffff-no-rj",
    title: "Video Title 1",
    channelName: "Web Deb With Ron", 
    views: 5416
}
const video2 = {
    thumbnail: "https://i.ytimg.com/vi/0ycj2NFp5c0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCI-OcuXajTNauFSS7L24Y1r20pLw",
    logo: "https://yt3.googleusercontent.com/joEJBYrNbdiN5dUzIN83QRrbGThbl1enjL688XSmsA5FOOiMmilBKEcB-RTu2kVX-GD6IuOsLQ=s176-c-k-c0x00ffffff-no-rj",
    title: "Video Title 2",
    channelName: "Web Deb With Ron", 
    views: 1521
}
const video3 = {
    thumbnail: "https://i.ytimg.com/vi/K-MvjUAts3s/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA6sWp1qdkr_TGhQOgzB9XG-6aZ4w",
    logo: "https://yt3.googleusercontent.com/joEJBYrNbdiN5dUzIN83QRrbGThbl1enjL688XSmsA5FOOiMmilBKEcB-RTu2kVX-GD6IuOsLQ=s176-c-k-c0x00ffffff-no-rj",
    title: "Video Title 3",
    channelName: "Web Deb With Ron", 
    views: 51312,
}
const video4 = {
    thumbnail: "https://i.ytimg.com/vi/g5GKnbY082o/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAEDn4oxEBXOg4QCEZPy0fiUzTziA",
    logo: "https://yt3.googleusercontent.com/joEJBYrNbdiN5dUzIN83QRrbGThbl1enjL688XSmsA5FOOiMmilBKEcB-RTu2kVX-GD6IuOsLQ=s176-c-k-c0x00ffffff-no-rj",
    title: "Video Title 4",
    channelName: "Web Deb With Ron", 
    views: '1.4M'
}

const VideoList = () => {
    return (
        <div className='videolist'>
            <Video {...video1}></Video>
            <Video {...video2}></Video>
            <Video {...video3}></Video>
            <Video {...video4}></Video>
            <Video {...video4}></Video>
            <Video {...video3}></Video>
            <Video {...video2}></Video>
            <Video {...video1}></Video>
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
