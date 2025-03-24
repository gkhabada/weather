<script setup lang="ts">
import { defineProps } from 'vue'
// @ts-ignore
import VueSelect from 'vue-select'

type selectItem = {
  id: string | number,
  name: string | number,
}

defineProps<{
  items: selectItem[],
}>()

const value = defineModel()
</script>

<template>
  <VueSelect
    v-model="value"
    :options="items"
    :clearable="false"
    :searchable="false"
    label="name"
  >
    <template #open-indicator="{ attributes }">
      <img
        :src="'./img/arrow-down.svg'"
        alt="down"
        v-bind="attributes"
      >
    </template>
  </VueSelect>
</template>

<style lang="scss">

.v-select {
  .vs__dropdown-toggle {
    height: 46px;
    padding: 0;
    background-color: rgba(233, 233, 243, 0.1);
    border-radius: 8px;


    .vs__selected-options {
      margin-left: 6px;

      .vs__selected {
        padding: 0;
        margin: 0;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        height: 100%;

        font-size: 22px;
        line-height: 120%;
        letter-spacing: -0.01em;
        color: #FFFFFF;
        font-weight: 500;

        @media (max-width: 768px) {
          font-size: 20px;
        }

        @media (max-width: 480px) {
          font-size: 16px;
        }
      }
    }

    .vs__actions {
      margin-right: 15px;
    }
  }

  .vs__dropdown-menu {
    padding: 0;
    transform: translateY(12px);
    background-color: #1A669C;
    border-radius: 8px;
  }

  .vs__dropdown-option {
    padding: 10px 16px;
    font-size: 22px;
    line-height: 120%;
    letter-spacing: -0.01em;
    color: #FFFFFF;
    font-weight: 500;

    @media (max-width: 768px) {
      font-size: 20px;
    }

    @media (max-width: 480px) {
      font-size: 16px;
    }

    &:hover {
      background-color: #E9E9F333;
    }
  }
}

</style>

<style>
  @import "vue-select/dist/vue-select.css";
</style>
