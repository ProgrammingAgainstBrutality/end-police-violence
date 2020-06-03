import React, {useEffect} from 'react'
import VideoCard from './VideoCard'

const VideoRows = ({videos}) => {
  
  useEffect(() => {
    console.log(videos)
  })
  
  return (
    <>
      {videos.map(video => <VideoCard key={video.id} {...video}/>)}
    </>
  )
}

export default VideoRows