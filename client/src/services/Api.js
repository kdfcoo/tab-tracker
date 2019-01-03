import axios from 'axios'

const instant = axios.create({
  baseURL: 'http://localhost:8081/'
})

export default instant
