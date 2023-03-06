import { useState } from 'react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button } from '@chakra-ui/react'
import FilePicker from 'chakra-ui-file-picker'
import axios from 'axios'

export default function UploadJobModal ({ isOpen, onClose }) {
  const [file, setFile] = useState(null)

  const handleSubmit = async () => {
    const reader = new FileReader()
    reader.onload = async (e) => {
      const data = JSON.parse(e.target.result)
      try {
        await axios.post('http://localhost:8000/jobs/bulk', data)
        onClose()
      } catch (error) {
        console.log(error.response.data)
      }
    }
    reader.readAsText(file)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Upload JSON File</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FilePicker
            onFileChange={(fileList) => { setFile(fileList[0]) }}
            placeholder='Choose a file...'
            clearButtonLabel='Clear'
            multipleFiles
            accept='application/json'
            hideClearButton={false}
          />
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={handleSubmit}>
            Upload
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
