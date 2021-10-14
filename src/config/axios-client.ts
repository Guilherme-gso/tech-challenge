import axios from 'axios'

const axiosClient = axios.create({
  baseURL: 'http://www.omdbapi.com',
  params: {
    apiKey: process.env.OMDB_API_KEY
  }
})

export { axiosClient }
