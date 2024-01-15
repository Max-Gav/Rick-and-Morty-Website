import React, { useRef } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'

const AddEpisodeForm = ({episodes,setEpisodes}) => {
    const episodeInput = useRef();

    //Function to add the new episode
    const handleSubmit = () => {
        setEpisodes([...episodes, {name:episodeInput.current.value, watched:false}]);
      }

  return (
    <InputGroup className="mb-3">
    <Form.Control ref={episodeInput}
      placeholder="Enter Episode"
    />
    <Button variant="secondary" onClick={handleSubmit}>
      Add Episode
    </Button>

  </InputGroup>
  )
}

export default AddEpisodeForm