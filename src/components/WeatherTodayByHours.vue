<script setup lang="ts">
import type { ComputedRef } from 'vue'
type TimeWeather = {
  time: string,
  timeText: string,
  wind: number,
  temp: number,
  icon: string,
  weatherText: string,
  humidity: string,
}

import { computed } from 'vue'
import { useWeatherStore } from '~/stores/index'
import { getIconName, getWeatherText, convertKmhToMs } from '~/utils/index'

const weatherStore = useWeatherStore()

const weatherByHours : ComputedRef<TimeWeather[]> = computed(() => {
  if (!weatherStore.forecast?.forecastday?.[0]?.hour) {
    return []
  }

   const hours : { [key: string]: string } = {
    '00:00': 'Ночь',
    '03:00': 'Ночь',
    '06:00': 'Утро',
    '09:00': 'Утро',
    '12:00': 'День',
    '15:00': 'День',
    '18:00': 'Вечер',
    '21:00': 'Вечер',
   };

   return weatherStore.forecast.forecastday[0].hour.reduce((result: TimeWeather[], item: any) => {
    const time : string = item.time.split(' ')[1];

    if (hours[time]) {
      const timeWeather : TimeWeather = {
        time,
        timeText: hours[time],
        wind: convertKmhToMs(item.wind_kph),
        temp: Math.round(item.temp_c),
        icon: `./img/${getIconName(item.condition.code)}.svg`,
        weatherText: getWeatherText(item.condition.code),
        humidity: item.humidity,
      }

      result.push(timeWeather);
    }

    return result;
   }, []);
})


</script>

<template>
  <div class="weather-hours">
    <div
      v-for="hour in weatherByHours"
      :key="hour.time"
      class="weather-hours__row"
    >
      <p class="weather-hours__time">
        <span>{{ hour.time }}</span>
        <span>{{ hour.timeText }}</span>
      </p>
      <p class="weather-hours__temp">
        {{ hour.temp }}°
      </p>
      <img
        :src="hour.icon"
        :alt="hour.weatherText"
      >
      <p class="weather-hours__text">
        {{ hour.weatherText }}
      </p>
      <p class="weather-hours__wind">
        {{ hour.wind }}м/с
      </p>
      <p class="weather-hours__humidity">
        {{ hour.humidity }}%
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">

.weather-hours {
  width: 100%;
  display: flex;
  flex-direction: column;

  &__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 78px;

    &:not(:last-of-type) {
      border-bottom: 1px solid #E9E9F31A;
    }
  }

  &__time {
    width: 107px;
    display: grid;
    align-items: center;
    gap: 8px;

    span {
      text-align: center;
      font-weight: 400;
      font-size: 18px;
      line-height: 120%;
      letter-spacing: -0.01em;
    }
  }

  &__temp {
    width: 137px;
    text-align: center;
    font-weight: 600;
    font-size: 48px;
    line-height: 130%;
    letter-spacing: -0.01em;

    @media (max-width: 768px) {
      width: 100px;
      font-size: 32px;
    }
  }

  img {
    width: 60px;
    height: 60px;
    object-fit: contain;
  }

  &__text {
    width: 122px;
    font-weight: 400;
    font-size: 18px;
    line-height: 120%;
    letter-spacing: -0.01em;
  }

  &__wind {
    width: 83px;
    text-align: center;
    font-weight: 500;
    font-size: 18px;
    line-height: 120%;
    letter-spacing: -0.01em;
  }

  &__humidity {
    width: 87px;
    text-align: center;
    font-weight: 500;
    font-size: 18px;
    line-height: 120%;
    letter-spacing: -0.01em;
  }
}

</style>
