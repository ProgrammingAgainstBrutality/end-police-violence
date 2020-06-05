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
    <tr>
      <td className="rowVideo">
        <iframe title={props.title} className="video" src={props.url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen">
        </iframe>
      </td>
      <td className="rowTitle">{props.title}</td>
      <td className="rowLocation">{handleLocation()}</td>
      <td className="rowFileComplaint">{renderFileComplaint()}</td>
      <td className="rowSource"><a href={props.source} target="_blank" rel="noopener noreferrer">{props.source}</a></td>
      <td className="rowDates">{handleDate()}</td>
      <td className="rowDates">{props.uploadDate}</td>
    </tr>
  )
}

export default VideoCard
