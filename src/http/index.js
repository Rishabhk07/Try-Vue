/**
 * Created by rishabhkhanna on 28/06/17.
 */
import axios from 'axios'

const API = axios.create({
  baseURL: 'http://cb-hb-dev.herokuapp.com'
})

export default API
