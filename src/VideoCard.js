import React from 'react'


const VideoCard = (props) => {
  const handleDate = () => {
    if (props.recordingDate) {
      return <span>{props.recordingDate}</span>
    }  else {
      return null
    }
  }
  const handleLocation = () => {
    if (props.location) {
      return <span>{props.location}</span>
    }  else {
      return null
    }
  }

  const renderFileComplaint = () => {
    const complaintUrl = props.complaintUrls[props.location]

    if (complaintUrl) {
      return (
        <a href={complaintUrl} target="_blank" rel="noreferrer noopener">
          <span>File a Complaint</span>
        </a>
      )
    }  else {
      return null
    }
  }

  return (
    <>
      <div className="grid-item">
        <iframe title={props.title} className="video" src={props.url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen">
        </iframe>
      </div>
      <div className="grid-item">{props.title}</div>
      <div className="grid-item">{handleLocation()}</div>
      <div className="grid-item">{renderFileComplaint()}</div>
      <div className="grid-item"><a href={props.source} target="_blank" rel="noopener noreferrer">Source</a></div>
      <div className="grid-item date">{handleDate()}</div>
      <div className="grid-item date">{props.uploadDate}</div>
    </>
  )
}

export default VideoCard
