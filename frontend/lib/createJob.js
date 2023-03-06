import axios from 'axios'
export default function createJob (repo, branch, cron) {
  return axios.post('http://localhost:8000/jobs', {
    repo,
    branch,
    cron
  }).then(res => true).catch(err => err.response.data.detail)
}
