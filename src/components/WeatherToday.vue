<script setup lang="ts">
import type { ComputedRef } from 'vue'

import { computed } from 'vue'
import WeatherTodayByHours from './WeatherTodayByHours.vue'
import { useWeatherStore } from '~/stores/index'
import { getIconName, getWeatherText, convertKmhToMs } from '~/utils/index'

const weatherStore = useWeatherStore()

const iconPath : ComputedRef<string> = computed(() => (
  `./img/${getIconName(weatherStore.weather?.condition?.code)}.svg`
))
const weatherText : ComputedRef<string> = computed(() => (
  getWeatherText(weatherStore.weather?.condition?.code)
))
</script>

<template>
  <div class="weather-today">
    <div class="weather-today__now">
      <img
        :src="iconPath"
        :alt="weatherText"
      >
      <p>{{ Math.round(weatherStore.weather.temp_c) }}°</p>
      <ul>
        <li>{{ weatherText }}</li>
        <li>Влажность: {{ weatherStore.weather.humidity }}%</li>
        <li>Ветер: {{ convertKmhToMs(weatherStore.weather.wind_kph) }}м/с</li>
      </ul>
    </div>

    <div class="weather-today__hours">
      <WeatherTodayByHours />
    </div>
  </div>
</template>

<style scoped lang="scss">

.weather-today {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 1100px) {
    flex-direction: column;
    gap: 40px;
  }

  @media (max-width: 768px) {
    gap: 24px;
  }

  &__now {
    width: 100%;
    max-width: 625px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4px;

    @media (max-width: 768px) {
      justify-content: flex-start;
      gap: 16px;
    }

    img {
      width: 180px;

      @media (max-width: 768px) {
        width: 80px;
      }
    }

    p {
      font-weight: 700;
      font-size: 100px;
      line-height: 110%;
      letter-spacing: -0.01em;

      @media (max-width: 768px) {
        font-size: 68px;
      }
    }

    ul {
      display: grid;
      gap: 12px;

      @media (max-width: 768px) {
        gap: 4px;
      }

      li {
        font-weight: 500;
        font-size: 24px;
        line-height: 120%;
        letter-spacing: -0.01em;
        white-space: nowrap;

        @media (max-width: 768px) {
          font-size: 18px;
        }
      }
    }
  }

  &__hours {
    flex-shrink: 0;

    @media (max-width: 768px) {
      width: calc(100% + 32px);
      margin-left: -16px;
      overflow-x: auto;
    }

    @media (max-width: 480px) {
      width: calc(100% + 24px);
      margin-left: -12px;
      overflow-x: auto;
    }

    .weather-hours {
      width: 648px;
    }
  }
}

</style>
