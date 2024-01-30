<template>
  <div class="wrapper">
    <div ref="chart" class="chart"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import * as echarts from 'echarts';
import 'echarts/dist/echarts.min.js';
import 'echarts/theme/echartTheme.js';

export default defineComponent({
  setup() {
    const chart = ref(null);

    onMounted(() => {
      drawChart();
    });

    function drawChart() {
      // 初始化echarts实例
      const myChart = echarts.init(chart.value, 'echarTheme');

      // // 监听屏幕变化自动缩放图表
      // window.addEventListener('resize', function () {
      //   myChart.resize();
      // });

      // 绘制图表
      myChart.setOption({
        color: ['#13c2c2', '#c0f0f0', '#c0f0f0'],
        grid: {
          x: 40,
          y: 60,
          x2: 50,
          y2: 30,
          containLabel: true,
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'none',
          },
          textStyle: {
            color: 'gray',
          },
          formatter: '{b}<br />{a0}: {c0}万<br />{a1}: {c1}万',
        },
        legend: {
          textStyle: {
            fontSize: 16,
            color: 'gray',
          },
          top: 20,
          data: ['请求', '拦截'],
        },
        xAxis: {
          type: 'value',
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
        },
        yAxis: [
          {
            type: 'category',
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: '#cdd3ee',
              },
            },
            splitLine: {
              show: false,
            },
            axisLabel: {
              show: true,
              fontSize: 16,
              color: 'gray',
              formatter: '{value}',
            },
            data: ['韩国', '德国', '美国', '英国', '印尼', '中国'],
          },
          {
            type: 'category',
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: true,
              fontSize: 16,
              color: 'gray',
              formatter: '{value}万',
            },
            data: [60, 70, 70, 80, 90, 110],
          },
        ],
        series: [
          {
            type: 'bar',
            name: '请求',
            stack: '总量',
            barMaxWidth: 20,
            label: {
              show: true,
              position: 'inside',
            },
            data: [40, 50, 50, 60, 60, 70],
          },
          {
            type: 'bar',
            name: '拦截',
            stack: '总量',
            barMaxWidth: 20,
            label: {
              show: true,
              position: 'inside',
            },
            data: [20, 20, 20, 20, 30, 40],
          },
        ],
      });
    }

    return {
      chart,
    };
  },
});
</script>

<style scoped>
.wrapper {
  width: 400px;
}

.wrapper .chart {
  width: 100%;
  height: 400px;
}
</style>
