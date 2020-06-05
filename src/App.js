import React from 'react';

import About from './About'
import HowToDownload from './HowToDownload'
import VideoCard from './VideoCard'
import './App.css';

class App extends React.Component {

  state = {
    complaintUrls: {},
    videos: [],
    sortBy: 'uploadDateReverse'
  }

  componentDidMount() {
    this.fetchVideos()
    this.fetchComplaintUrls()
  }


  fetchComplaintUrls() {
    fetch('https://raw.githubusercontent.com/ProgrammingAgainstBrutality/end-police-violence/master/complaint-urls.json')
    .then(response => response.json())
    .then(complaintUrls => this.setState({complaintUrls}))
  }

  fetchVideos() {
    fetch('https://raw.githubusercontent.com/ProgrammingAgainstBrutality/end-police-violence/master/videos.json')
    .then(response => response.json())
    .then(videos => {
      videos.reverse()
      this.setState({videos})
    })
  }

  onSort = (event, sortKey) => {
    const videos = this.state.videos;
    let sortBy = this.state.sortBy;
    videos.sort((a,b) => a[sortKey].localeCompare(b[sortKey]))

    if (sortBy === sortKey) {
      videos.reverse();
      sortBy = sortKey + 'Reverse'
    } else {
      sortBy = sortKey
    }

    this.setState((prevState) => ({
      ...prevState,
      videos,
      sortBy
    }))
  }

  render() {
    return (
      <div className="App">
        <header>
         <h1 className="title">End Police Violence</h1>
         <h2 className="subtitle">Records of Police Brutality and Excessive Force During the 2020 George Floyd Protests</h2>
         <h4 className="warning"><strong>Videos contain graphic content</strong></h4>
         <About />
         <HowToDownload />
        </header>
        <main>
        <div className="tbl-grid">
          <div className="grid-item table-header">Video</div>
          <div onClick={e => this.onSort(e, "title")} className="grid-item table-header">Description</div>
          <div onClick={e => this.onSort(e, "location")} className="grid-item table-header">Location</div>
          <div className="grid-item table-header">File a Complaint</div>
          <div className="grid-item table-header">Original Source</div>
          <div onClick={e => this.onSort(e, "recordingDate")} className="grid-item table-header">Recording Date</div>
          <div onClick={e => this.onSort(e, "uploadDate")} className="grid-item table-header">Upload Date</div>
          {this.state.videos.map(video => <VideoCard key={video.id} complaintUrls={this.state.complaintUrls} {...video}/>)}
        </div>
        </main>
      </div>
    );
  }

}

export default App;
