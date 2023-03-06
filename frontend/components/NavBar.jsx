import { Flex, HStack, Spacer, Text } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import AddJobModal from './AddJobModal'
import { useDisclosure } from '@chakra-ui/hooks'
import UploadJobModal from './UploadJobModal'

export default function NavBar () {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isOpen: isUploadOpen, onOpen: onUploadOpen, onClose: onUploadClose } = useDisclosure()
  // TODO: Add job input modal
  return (
    <>
      <HStack bg='gray.200' px={4} spacing={8}>
        <Flex h={16} alignItems='center'>
          <Text fontWeight={700}>GitHub Backup System</Text>
        </Flex>
        <Spacer />
        <Flex h={16} alignItems='center' gap={4}>
          <Button variant='ghost' size='sm' onClick={onUploadOpen}>Upload File</Button>
          <Button variant='ghost' size='sm' onClick={onOpen}>Add Job</Button>
        </Flex>
      </HStack>
      <AddJobModal isOpen={isOpen} onClose={onClose} />
      <UploadJobModal isOpen={isUploadOpen} onClose={onUploadClose} />
    </>
  )
}
