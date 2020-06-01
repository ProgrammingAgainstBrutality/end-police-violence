import React, {useState, useEffect} from 'react';
import VideoCard from './VideoCard'
import About from './About'
import './App.css';

function App() {
  const [videos, setVideos] = useState([])

  const getVideos = () => {
    fetch('https://raw.githubusercontent.com/ProgrammingAgainstBrutality/end-police-violence/master/videos.json')
    .then(response => response.json())
    .then(videos => setVideos(videos))
  }

  useEffect(() => {
    getVideos()
    console.log('only on start')
  }, [])

  useEffect(() => {
    console.log(videos)
  }, [videos])

  const onSort = (event, sortKey) => {
    const data = videos;
    data.sort((a,b) => a[sortKey].localeCompare(b[sortKey]))
    setVideos(data)
  }

  return (
    <div className="App">
      <header>
       <h1 className="title">End Police Violence</h1>
       <h2 className="subtitle">Records of Police Brutality During the 2020 George Floyd Protests</h2>
       <h4 className="warning"><strong>Please be advised - Videos contain graphic content</strong></h4>
       <About />
      </header>
      <main>
      <table>
        <thead>
          <tr>
            <th>Video</th>
            <th onClick={e => onSort(e, 'title')}>Description</th>
            <th onClick={e => onSort(e, 'location')}>Location</th>
            <th onClick={e => onSort(e, 'source')}>Original Source</th>
            <th onClick={e => onSort(e, 'recordingDate')}>Recording Date</th>
            <th onClick={e => onSort(e, 'uploadDate')}>Upload Date</th>
          </tr>
        </thead>
        <tbody>
          {videos.map(video => <VideoCard key={video.id} {...video}/>)}
        </tbody>
      </table>
      </main>
    </div>
  );
}

export default App;
