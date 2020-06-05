import React from 'react';

import About from './About'
import HowToDownload from './HowToDownload'
import VideoRows from './VideoRows'
import './App.css';

class App extends React.Component {

  state = {
    complaintUrls: {},
    videos: [],
    sortBy: ''
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
    .then(videos => this.setState({videos}))
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
        <table>
          <thead>
            <tr>
              <th className="rowVideo">Video</th>
              <th onClick={e => this.onSort(e, 'title')}>Description</th>
              <th onClick={e => this.onSort(e, 'location')}>Location</th>
              <th onClick={e => this.onSort(e, 'fileAComplaint')}>File a Complaint</th>
              <th onClick={e => this.onSort(e, 'source')}>Original Source</th>
              <th onClick={e => this.onSort(e, 'recordingDate')}>Recording Date</th>
              <th onClick={e => this.onSort(e, 'uploadDate')}>Upload Date</th>
            </tr>
          </thead>
          <tbody>
            <VideoRows complaintUrls={this.state.complaintUrls} videos={this.state.videos}/>
          </tbody>
        </table>
        </main>
      </div>
    );
  }

}

export default App;
