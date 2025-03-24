<script setup lang="ts">
import type { ComputedRef } from 'vue';
import type { City } from '~/types';

import { computed } from 'vue';
import WeatherCity from './WeatherCity.vue';
import { cities } from '~/data';
import { useWeatherStore } from '~/stores/index'

const weatherStore = useWeatherStore()

const otherCities : ComputedRef<City[]> = computed(() => (
  cities.filter((city: City) => city.id !== weatherStore.city.id)
))
</script>

<template>
  <section class="weather-cities">
    <div class="weather-cities__header">
      <h3>Погода в популярных городах</h3>
      <button>
        <img
          :src="'./img/question.svg'"
          alt="?"
        >
      </button>
    </div>


    <div class="weather-cities__list">
      <WeatherCity
        v-for="city in otherCities"
        :key="city.id"
        :city
        class="weather-cities__item"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">

.weather-cities {
  width: 100%;

  &__header {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 32px;

    @media (max-width: 768px) {
      margin-bottom: 12px;
    }

    button {
      padding: 10px;
      width: 38px;
      height: 38px;
      cursor: pointer;
      background-color: rgba(233, 233, 243, 0.1);
      border-radius: 100px;
      border: none;

      @media (max-width: 768px) {
        width: 30px;
        height: 30px;
      }
    }
  }

  h3 {
    font-weight: 600;
    font-size: 36px;
    line-height: 130%;
    letter-spacing: -0.01em;
    color: #FFFFFF;

    @media (max-width: 768px) {
      font-size: 24px;
    }
  }

  &__list {
    display: flex;
    justify-content: space-between;

    @media (max-width: 1100px) {
      gap: 20px;
      flex-wrap: wrap;
      justify-content: flex-start;
    }

    @media (max-width: 768px) {
      gap: 12px;
    }
  }

  &__item {
    width: min(242px, 19%);

    @media (max-width: 1100px) {
      width: calc(33% - 12px);
    }

    @media (max-width: 768px) {
      width: calc(50% - 6px);
    }

    @media (max-width: 480px) {
      width: 100%;
    }
  }
}

</style>
