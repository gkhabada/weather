<script setup lang="ts">
import type { ComputedRef } from 'vue'
type dayWeather = {
  weekDay: string,
  temp: string,
  icon: string,
}

import { computed } from 'vue';
import { useWeatherStore } from '~/stores/index'
import { daysOfWeek } from '~/data/index';
import { getIconName } from '~/utils/index'

const weatherStore = useWeatherStore()

const weekWeather : ComputedRef<dayWeather[]> = computed(() => {
  return weatherStore.getWeatherForecastday.map((day: any) => {
    const date = new Date(day.date)

    return {
      weekDay: daysOfWeek[date.getDay()],
      temp: Math.round(day.day.avgtemp_c),
      icon: `./img/${getIconName(day.day.condition.code)}.svg`,
    }
  })
})

</script>

<template>
  <div class="weather-week">
    <div
      v-for="day in weekWeather"
      :key="day.weekDay"
      class="weather-week__item"
    >
      <p>{{ day.weekDay }}</p>
      <img
        :src="day.icon"
        :alt="day.weekDay"
      >
      <b>{{ day.temp }}°</b>
    </div>
  </div>
</template>

<style scoped lang="scss">

.weather-week {
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 20px 12px;
  }

  &__item {
    min-width: 122px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    text-align: center;

    @media (max-width: 1100px) {
      min-width: calc(33% - 11px);
    }

    @media (max-width: 768px) {
      min-width: calc(50% - 12px);
    }

    p {
      font-size: 18px;
      line-height: 120%;
      letter-spacing: -0.01em;
    }

    img {
      height: 60px;
      width: 60px;
      object-fit: contain;
    }

    b {
      font-weight: 500;
      font-size: 18px;
      line-height: 120%;
      letter-spacing: -0.01em;
    }
  }
}

</style>
