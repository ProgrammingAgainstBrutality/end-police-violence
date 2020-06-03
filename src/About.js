import React from 'react'
import { Button, Header, Modal } from 'semantic-ui-react'

const About = () => {
  return (
    <Modal trigger={<Button>About</Button>}>
      <Modal.Header>About</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Header>About this Site</Header>
          <p>This site is dedicated to sharing and preserving records of police violence during the 2020 protests sparked by the murder of George Floyd by ex-cop Derek Chauvin.</p>
          <p>The creator of this site does not condone or encourage violence. I do hope, though, that these videos show that the narrative portrayed in media is never the full picture, and that much of the protesting and rioting happening now is in response to violence and excessive force perpetrated by law enforcement.</p>
          <p>There are many articles and news reports focusing on looters and destruction. However, if all you see are these reports, it makes it easy to denounce the current protests. It also makes it easy to dismiss them even when you see evidence of police violence, as there is a feeling of comfort and moral 'high-ground' in declaring violence on both sides.</p>
          <p>Before dismissing what is going on or walking away because this subject is uncomfortable, I encourage you to <a href="https://twitter.com/clairewillett/status/1266894029498675200" target="_blank" rel="noopener noreferrer">read this</a> and <a href="https://vimeo.com/425192186" target="_blank" rel="noopener noreferrer">watch this</a>.</p>
          <p>From Martin Luther King Jr.:</p>
          <blockquote>I think America must see that riots do not develop out of thin air. Certain conditions continue to exist in our society which must be condemned as vigorously as we condemn riots. But in the final analysis, a riot is the language of the unheard.</blockquote>
          <Header>How to Help</Header>
          <p>There are many resources online that explain the current situation in the US far better than I can. <a href="https://blacklivesmatters.carrd.co/" target="_blank" rel="noopener noreferrer">Start by reading through the information here and seeing how you can help</a></p>
          <p>Do not be silent. Fight racism and the systems that perpetuate and defend it. To be silent is to be complicit.</p>
          <Header>How to Contribute To This Site</Header>
          <p>The content on this site is static - there is no way to directly submit content. If you have a video that you would like to contribute, please provide the information by <a href="https://github.com/ProgrammingAgainstBrutality/end-police-violence/issues/new" target="_blank" rel="noopener noreferrer">opening a ticket here</a>. Please provide context and source link, prefferably from Reddit, Twitter, Youtube or Streamable so the content and be downloaded and preserved.</p>
          <p>To protect protesters, no videos including protester faces or identifying features will be added to this site unless the video is clearly from a news outlet.</p>
          <p>You can also contribute by downloading copies of these videos to help ensure they are preserved and continue to be shared in the event that the current videos and sources are removed.</p>
          <p>If you have some experience working with GitHub, please feel free to fork, clone and host your own copy of this website.</p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
}

export default About