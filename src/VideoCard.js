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

  return (
    <tr>
      <td>
        <iframe title={props.title} width="560" height="315" src={props.url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen">
        </iframe>
      </td>
      <td className="rowTitle">{props.title}</td>
      <td className="rowLocation">{handleLocation()}</td>
      <td className="rowSource"><a href={props.source} target="_blank" rel="noopener noreferrer">{props.source}</a></td>
      <td>{handleDate()}</td>
      <td>{props.uploadDate}</td>
    </tr>
  )
}

export default VideoCard