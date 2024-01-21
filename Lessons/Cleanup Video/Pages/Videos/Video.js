import { useState } from 'react';

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

export default Video