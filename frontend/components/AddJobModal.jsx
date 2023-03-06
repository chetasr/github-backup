import {
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  VStack
} from '@chakra-ui/react'
import cronstrue from 'cronstrue'
import { useState } from 'react'
import { default as cronValidator } from 'cron-validate'
import axios from 'axios'

export default function AddJobModal ({ isOpen, onClose }) {
  const [repo, setRepo] = useState('')
  const [branch, setBranch] = useState('')
  const [cron, setCron] = useState('')
  const [error, setError] = useState('')

  const handleRepoChange = (e) => setRepo(e.target.value)
  const handleBranchChange = (e) => setBranch(e.target.value)
  const handleCronChange = (e) => setCron(e.target.value)

  const cronValidate = cronValidator(cron)

  const handleSubmit = async () => {
    // TODO: Add job using API
    try {
      setError('')
      await axios.post('http://localhost:8000/jobs', {
        repo,
        branch,
        cron
      })
      onClose()
    } catch (error) {
      setError(error.response.data.detail)
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Job</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack>
            <FormControl isInvalid={error === 'reponf'}>
              <FormLabel>Repository</FormLabel>
              <Input type='text' onChange={handleRepoChange} />
              {error === 'reponf' && <FormErrorMessage>Repository not found</FormErrorMessage>}
            </FormControl>
            <FormControl isInvalid={error === 'brnf'}>
              <FormLabel>Branch</FormLabel>
              <Input type='text' onChange={handleBranchChange} />
              {error === 'brnf' && <FormErrorMessage>Branch not found</FormErrorMessage>}
            </FormControl>
            <FormControl isInvalid={!cronValidate.isValid()}>
              <FormLabel>Crontab Expression</FormLabel>
              <Input type='text' onChange={handleCronChange} />
              {cronValidate.isValid() && <FormHelperText>{cronstrue.toString(cron, { throwExceptionOnParseError: false })}</FormHelperText>}
              {!cronValidate.isValid() && <FormErrorMessage>Invalid cron string</FormErrorMessage>}
            </FormControl>
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={handleSubmit}>
            Create
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
