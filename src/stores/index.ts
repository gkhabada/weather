import type { PageType, City } from '~/types'

import { defineStore } from 'pinia'
import api from '~/service/index.ts'
import { cities } from '~/data/index'

type storeState = {
  pageType: PageType,
  city: City
  weather: any,
  location: any,
  forecast: any,
  loading: boolean,
}

export const useWeatherStore = defineStore('weather', {
  state: () : storeState => {
    return {
      pageType: 'day',
      city: cities[0],
      weather: {},
      forecast: {},
      location: {},
      loading: false,
    }
  },
  getters: {
    getWeatherForecastday: (state) => (state.forecast?.forecastday || []),
  },
  actions: {
    setPageType(value: PageType) {
      this.pageType = value
    },
    setCity(city: City) {
      this.city = city;
    },

    fetchWeather() {
      if (this.pageType === 'day') {
        this.fetchTodayWeather()
      }
      if (this.pageType === 'week') {
        this.fetchWeekWeather()
      }
    },
    async fetchTodayWeather() {
      const response = await api.getTodayWeather(this.city.id);

      this.weather = response.current;
      this.forecast = response.forecast;
      this.location = response.location;
    },
    async fetchWeekWeather() {
      const response = await api.getWeekWeather(this.city.id);

      this.weather = response.current;
      this.forecast = response.forecast;
      this.location = response.location;
    }
  },
})
