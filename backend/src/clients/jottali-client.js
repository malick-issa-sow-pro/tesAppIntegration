const axios = require('axios').default

const {
  JOTTALI_BASE_URL,
} = process.env

const jottaliClient = axios.create({
  baseURL: JOTTALI_BASE_URL,
})

module.exports = jottaliClient
