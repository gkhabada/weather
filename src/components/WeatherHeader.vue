<script setup lang="ts">
import type { City, PageType } from '~/types/index';

import { watch } from 'vue'
import CommonSelect from './common/CommonSelect.vue'
import { cities } from '~/data/index'
import { useWeatherStore } from '~/stores/index'

const weatherStore = useWeatherStore()
weatherStore.fetchTodayWeather();

// city
const city = defineModel()
city.value = weatherStore.city
watch(city, () => {
  weatherStore.setCity(city.value as City);
  weatherStore.fetchWeather()
})

// page
function setPageType(value: PageType) {
  if (weatherStore.pageType !== value) {
    weatherStore.setPageType(value)
    weatherStore.fetchWeather()
  }
}
</script>

<template>
  <header class="header">
    <div class="header__switch">
      <button
        :class="{ active: weatherStore.pageType === 'day' }"
        @click="setPageType('day')"
      >
        Главная
      </button>
      <button
        :class="{ active: weatherStore.pageType === 'week' }"
        @click="setPageType('week')"
      >
        Погода за неделю
      </button>
    </div>

    <CommonSelect
      v-model="city"
      :items="cities"
      class="header__select"
    />
  </header>
</template>

<style scoped lang="scss">

.header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 12px;
  }

  &__switch {
    border-radius: 8px;
    overflow: hidden;

    @media (max-width: 768px) {
      width: 100%;
    }

    button {
      padding: 10px 16px;
      background-color: rgba(233, 233, 243, 0.1);
      border: none;
      cursor: pointer;
      transition: color 0.2s;

      font-weight: 500;
      font-size: 22px;
      line-height: 120%;
      letter-spacing: -0.01em;
      color: rgba(#ffffff, 0.4);
      white-space: nowrap;

      @media (max-width: 768px) {
        font-size: 20px;
      }

      @media (max-width: 480px) {
        font-size: 16px;
      }

      &:first-of-type {
        border-right: 1px solid #476589;
      }

      &.active {
        color: #ffffff;
      }

      @media (max-width: 768px) {
        padding-inline: 5px;
        width: 50%;
      }
    }
  }

  &__select {
    width: 246px;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
}

</style>
