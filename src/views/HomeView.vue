<template>
  <div class="home">
    <Dashboard />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Dashboard from '@/components/Dashboard.vue'

@Options({
  components: {
    Dashboard
  },
})
export default class HomeView extends Vue { }
</script>


<style>
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
}
</style>