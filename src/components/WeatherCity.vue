<script setup lang="ts">
import type { City } from '~/types';
import type { ComputedRef } from 'vue';

import { computed, ref } from 'vue';
import api from '~/service/index'
import { getIconName, getWeatherText } from '~/utils/index'

const { city } = defineProps<{
  city: City,
}>()

const cityWeather : any = ref({});
function fetchCityWeather() {
  api.getCityWeather(city.id)
    .then((data) => {
      cityWeather.value = data.current;
    })
}
fetchCityWeather()

const iconPath : ComputedRef<string> = computed(() => (
  `./img/${getIconName(cityWeather.value.condition?.code)}.svg`
))
const weatherText : ComputedRef<string> = computed(() => (
  getWeatherText(cityWeather.value.condition?.code)
))

</script>

<template>
  <div class="weather-city">
    <h2>{{ city.name }}</h2>
    <p>{{ weatherText }}</p>
    <img
      :src="iconPath"
      :alt="weatherText"
    >
    <h3>{{ Math.round(cityWeather.temp_c) }}°</h3>
    <p>Влажность: {{ cityWeather.humidity }}%</p>
  </div>
</template>

<style scoped lang="scss">

.weather-city {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 10px;

  background: radial-gradient(134% 134% at -18% -23%, rgba(255, 255, 255, 0.2) 0%, rgba(238, 237, 237, 0.1) 100%) ;
  border-radius: 8px;
  border: 1px solid #5b8db3;

  text-align: center;

  h2 {
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 26px;
    line-height: 120%;
    letter-spacing: -0.01em;
  }

  p {
    font-weight: 500;
    font-size: 18px;
    line-height: 120%;
    letter-spacing: -0.01em;
  }

  img {
    width: 60px;
    height: 60px;
    object-fit: contain;
    margin-block: 16px;
  }

  h3 {
    margin-bottom: 16px;
    font-weight: 600;
    font-size: 48px;
    line-height: 130%;
    letter-spacing: -0.01em;
  }
}

</style>
