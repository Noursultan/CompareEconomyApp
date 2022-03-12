<template>
  <div>
    <canvas id="econ-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import econChartData from '../econ-data.js'

export default {
  name: 'EconChart',
  data() {
    return {
      econChartData: econChartData
    }
  }, 
  mounted() {
    const ctx = document.getElementById('econ-chart');
    new Chart(ctx, this.econChartData);
  }
}
</script>