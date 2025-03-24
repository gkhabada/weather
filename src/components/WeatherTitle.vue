<script setup lang="ts">
import type { Ref, ComputedRef } from 'vue'

import { ref, computed, onBeforeUnmount } from 'vue'
import { daysOfWeek } from '~/data/index';
import { useWeatherStore } from '../stores/index'

const weatherStore = useWeatherStore()

// time
const now : Ref<Date> = ref(new Date());
const dateInterval = setInterval(() => {
  now.value = new Date()
}, 1000 * 60)
onBeforeUnmount(() => {
  clearInterval(dateInterval);
})

const weekDay : ComputedRef<string> = computed(() => daysOfWeek[now.value.getDay()] || '')
const time : ComputedRef<string> = computed(() => {
  const hours = String(now.value.getHours()).padStart(2, '0');
  const minutes = String(now.value.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
})
</script>

<template>
  <div class="weather-title">
    <h1>{{ weatherStore.city.name }}</h1>
    <p>{{ weekDay }}, {{ time }}</p>
  </div>
</template>

<style scoped lang="scss">

.weather-title {
  h1 {
    margin-bottom: 12px;
    font-weight: 600;
    font-size: 36px;
    line-height: 130%;
    letter-spacing: -0.01em;

    @media (max-width: 768px) {
      margin-bottom: 8px;
      font-size: 30px;
    }
  }

  p {
    font-weight: 500;
    font-size: 30px;
    line-height: 120%;
    letter-spacing: -0.01em;
    color: rgba(233, 233, 243, 0.6);

    @media (max-width: 768px) {
      font-size: 22px;
    }
  }
}

</style>
