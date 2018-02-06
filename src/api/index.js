import axios from 'axios'
import { toQueryString } from '@/functions'
import Config from '../config.js'
const SPOTIFY = 'https://api.spotify.com/v1/'
const headers = {}

export function auth () {
  return `https://accounts.spotify.com/authorize?${toQueryString(Config.auth)}`
}

export function me (accessToken) {
  headers.Authorization = `Bearer ${accessToken}`
  return axios.get(`${SPOTIFY}me`, { headers })
}

export function getPlaylists (accessToken) {
    headers.Authorization = `Bearer ${accessToken}`
    return axios.get(`${SPOTIFY}me/playlists`, { headers })
}