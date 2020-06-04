import React, {useEffect} from 'react'
import VideoCard from './VideoCard'

const VideoRows = ({complaintUrls, videos}) => {

  useEffect(() => {
    console.log(videos)
  })

  return (
    <>
      {videos.map(video => <VideoCard key={video.id} complaintUrls={complaintUrls} {...video}/>)}
    </>
  )
}

export default VideoRows
