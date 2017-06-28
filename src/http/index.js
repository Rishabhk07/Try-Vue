/**
 * Created by rishabhkhanna on 28/06/17.
 */
import axios from 'axios'
import store from '@/store'

const API = axios.create({
  baseURL: 'http://cb-hb-dev.herokuapp.com',
  headers: {
    'Content-Type': 'application/json'
  },
  tranformRequest: [
    function (data, headers) {
      if (store.state.user.token) {
        headers['Authorization'] = `Bearer ${store.satte.user.token}`
      }
    }
  ]
})

export default API
