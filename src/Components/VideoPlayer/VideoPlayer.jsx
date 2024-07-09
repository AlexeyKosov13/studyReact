import React, { useRef } from 'react'
import './VideoPlayer.css'
import video from '../../assets/video.mp4'
import close from '../../assets/close.png'

const VideoPlayer = ({ PlayState, setPlayState }) => {

    const player = useRef(null);

    const closePlayer = (e) => {
        if (e.target === player.current) {
            setPlayState(false)
        }
    }

    return (
        <div className={`videoplayer ${PlayState ? `` : `hide`}`} ref={player}
            onClick={closePlayer}>
            <video src={video} autoPlay muted controls></video>         
        </div>
    )
}

export default VideoPlayer