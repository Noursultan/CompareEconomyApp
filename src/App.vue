<template>
  <div id="app">
    <h2>One of the biggest indicators of successful economy is the GDP per Capita indicator</h2>
    <h2>Here is listed highest GDP per Capita economies</h2>
    <Economies />
    <EconChart />
  </div>
</template>

<script>
import Economies from '@/components/Economies.vue'
import EconChart from '@/components/EconChart.vue'

export default {
  name: 'App',
  components: {
    Economies,
    EconChart
  }
}
</script>

<style>
#app {
background: #E5E5F4;
text-align: center;
}
</style>