import JobCard from '@/components/JobCard'
import NavBar from '@/components/NavBar'
import useSWR from 'swr'
import { fetcher } from '@/lib/fetcher'

export default function Home () {
  const { data } = useSWR('http://localhost:8000/jobs', fetcher)

  return (
    <>
      <NavBar />
      {data && data.map(job => (
        <JobCard key={job.id} {...job} />
      ))}
    </>
  )
}
