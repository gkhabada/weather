import axios from 'axios'
type UrlType = 'forecast' | 'current'

// @ts-ignore
const key = import.meta.env.VITE_WEATHER_API_KEY;

function getUrl(type: UrlType = 'forecast') {
  return `https://api.weatherapi.com/v1/${type}.json?key=${key}&aqi=no`;
}

class Api {
  getTodayWeather(city: string) {
    return axios.get(`${getUrl()}&q=${city}`)
      .then(response => response.data)
  }

  getWeekWeather(city: string) {
    return axios.get(`${getUrl()}&days=7&q=${city}`)
      .then(response => response.data)
  }

  getCityWeather(city: string) {
    return axios.get(`${getUrl('current')}&q=${city}`)
      .then(response => response.data)
  }
}

const apiService = new Api()

export default apiService
