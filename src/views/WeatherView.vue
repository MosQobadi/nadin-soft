<template>
  <div class="home">
    <Weather />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Weather from '@/components/Weather.vue'

@Options({
  components: {
    Weather
  },
})
export default class HomeView extends Vue { }
</script>
