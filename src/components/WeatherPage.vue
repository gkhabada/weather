<script setup lang="ts">
import { computed } from 'vue'
import WeatherHeader from './WeatherHeader.vue'
import WeatherTitle from './WeatherTitle.vue'
import WeatherToday from './WeatherToday.vue'
import WeatherWeek from './WeatherWeek.vue'
import WeatherPopularCities from './WeatherPopularCities.vue'

import { useWeatherStore } from '../stores/index'

const weatherStore = useWeatherStore()

const haveWeather = computed(() => Object.keys(weatherStore.weather).length)
</script>

<template>
  <main class="weather">
    <WeatherHeader class="weather__header" />
    <WeatherTitle
      v-if="haveWeather"
      class="weather__title"
    />

    <KeepAlive v-if="haveWeather" >
      <WeatherToday
        v-if="weatherStore.pageType === 'day'"
        class="weather__content"
      />
      <WeatherWeek
        v-else-if="weatherStore.pageType === 'week'"
        class="weather__content"
      />
    </KeepAlive>

    <WeatherPopularCities
      v-if="haveWeather"
      class="weather__cities"
    />
  </main>
</template>

<style scoped lang="scss">

.weather {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  min-height: 100vh;
  padding: 40px;
  background: linear-gradient(116.21deg, #052652 -3.25%, #2D9CDB 107.37%), #FFFFFF;

  @media (max-width: 1100px) {
    padding: 24px;
  }

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }

  &__header,
  &__content {
    margin-bottom: 56px;

    @media (max-width: 1100px) {
      margin-bottom: 40px;
    }

    @media (max-width: 768px) {
      margin-bottom: 24px;
    }
  }

  &__title {
    margin-bottom: 48px;

    @media (max-width: 1100px) {
      margin-bottom: 40px;
    }

    @media (max-width: 768px) {
      margin-bottom: 24px;
    }
  }
}

</style>
