import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const HowToDownload = () => {
  return (
    <Modal trigger={<Button>How to Download These Videos</Button>}>
      <Modal.Header>How to Download These Videos</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Header>How to Download Programmatically</Header>
          <p>All video information for this site is stored <a href="https://raw.githubusercontent.com/ProgrammingAgainstBrutality/end-police-violence/master/videos.json">in a JSON file</a></p>

          <p>If you're using a Mac, you can quickly download all the videos compiled here
          via the terminal. First, if you don't have it, install <a href="https://brew.sh/" target="_blank">Homebrew</a>:</p>

          <div className="code">
            <code>
            /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
            </code>
          </div>

          <p>Then, install <a href="https://stedolan.github.io/jq/download/"><code>jq</code></a> and <a href="https://github.com/ytdl-org/youtube-dl">youtube-dl</a>:</p>

          <div className="code">
            <code>
            brew install jq
            </code>
            <br />
            <code>
            brew install youtube-dl
            </code>
          </div>
          <p>Then, run the following command (as one line):</p>

          <div className="code">
            <code>
            curl 'https://raw.githubusercontent.com/ProgrammingAgainstBrutality/end-police-violence/master/videos.json' | jq -r '.[].url' > videos.txt && youtube-dl -i -a videos.txt -o '%(id)s.%(ext)s'
            </code>
          </div>

          <p>This will download all videos and save them by their IDs.</p>

          <Header>Manually Download Videos</Header>

          <p>To manually download these videos, copy the source link for each video displayed on the site and paste into one of the following online downloaders:</p>

          <li>For Reddit videos, we used <a href="https://redv.co/">https://redv.co/</a> (Note: online version does not
          perserve sound)</li>

          <li>For Twitter videos: <a href="https://twdownload.com/">https://twdownload.com/</a></li>

          <li>For YouTube and Streamable: <a href="https://keepv.id/">https://keepv.id/</a></li>

        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
}

export default HowToDownload