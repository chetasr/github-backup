import { Text, VStack } from '@chakra-ui/layout'
import { DateTime } from 'luxon'

export default function JobCard ({ repo = 'sample/lol', next_run_time = '2023-03-05T00:51:00+05:30' }) {
  return (
    <VStack bg='white' p={4} m={4} spacing={2} borderColor='gray.200' borderRadius='xl' alignItems='start' borderWidth={2} _hover={{ bg: 'gray.100', cursor: 'pointer' }}>
      <Text fontWeight={700} fontSize='xl'>{repo}</Text>
      <Text>Next run: {DateTime.fromISO(next_run_time).toLocaleString(DateTime.DATETIME_FULL)}</Text>
    </VStack>
  )
}
