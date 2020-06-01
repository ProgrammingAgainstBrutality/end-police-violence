import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const About = () => {
  return (
    <Modal trigger={<Button>About</Button>}>
      <Modal.Header>About</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Header>About this Site</Header>
          <p>The creators of this site do not condone or encourage violence.</p>
          <p>This site is dedicated to sharing and preserving records of police violence during the 2020 protests sparked by the murder of George Floyd by ex-cop Derek Chauvin.</p>
          <p>From Martin Luther King Jr.:</p>
          <quote>I think America must see that riots do not develop out of thin air. Certain conditions continue to exist in our society which must be condemned as vigorously as we condemn riots. But in the final analysis, a riot is the language of the unheard.</quote>
          <p>Credit to Reddit users 3VD and wet4 for compiling the original lists of videos used to make this site</p>
          <Header>How to Contribute</Header>
          <p>The content on this site is static - there is no way to directly submit content. If you have a video that you would like to contribute, please provide the information by <a href="https://github.com/ProgrammingAgainstBrutality/end-police-violence/issues/new">opening a ticket here</a>. Please provide context and source link, prefferably from Reddit, Twitter, Youtube or Streamable so the content and be downloaded and preserved.</p>
          <p>You can also contribute by downloading copies of these videos to help ensure they are preserved and continue to be shared in the event that the current videos and sources are removed.</p>
          <p>If you have some experience working with GitHub, please feel free to fork, clone and host your own copy of this website.</p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
}

export default About