<template>
  <div class="wrapper">
    <div ref="chart" class="chart"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch } from 'vue';
import * as echarts from 'echarts';
import 'echarts/dist/echarts.min.js';
import 'echarts/theme/echartTheme.js';

export default defineComponent({
  setup() {
    const chart = ref(null);

    onMounted(() => {
      drawChart();

      // 每隔一段时间更新图表数据
      setInterval(() => {
        updateChartData();
      }, 600000000); // 5000毫秒（5秒）更新一次
    });

    // 初始化图表
    function drawChart() {
      const myChart = echarts.init(chart.value, 'echarTheme');
      const emptyDataArray = new Array(50).fill('');

      myChart.setOption({
        color: ['#febf02', '#c0f0f0', '#c0f0f0'],
        grid: {
          x: 1,
          y: 20,
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
          formatter: '{a0}: {c0}万',
        },
        // legend: {
        //   textStyle: {
        //     fontSize: 16,
        //     color: 'gray',
        //   },

        //   top: 20,
        //   data: ['衣服'],
        // },
        yAxis: [  // 将 x 轴配置改为 yAxis
          {
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
          {
            type: 'value',  // 将 y 轴配置改为 xAxis
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: false,
              fontSize: 16,
              color: 'gray',
              formatter: '{value}万',
            },
            data: emptyDataArray,
          },
        ],

        xAxis: [  // 将 y 轴配置改为 xAxis
          {
            type: 'category',  // 将 x 轴配置改为 xAxis
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
              show: false,
              fontSize: 16,
              color: 'gray',
              formatter: '{value}',
            },
            data: emptyDataArray,
          },
        ],
        series: [
          {
            type: 'bar',
            name: '拦截数',
            stack: '总量',
            // barHeight: 1,
            barMaxWidth: 100,
            barWidth: 16,
            barGap: 80,  // 调整列与列之间的间隙
            barCategoryGap: 80,
            label: {
              show: false,
              position: 'inside',
            },
            data: emptyDataArray,

          },
          // {
          //   type: 'bar',
          //   name: '鞋子',
          //   stack: '总量',
          //   barMaxWidth: 20,
          //   label: {
          //     show: true,
          //     position: 'inside',
          //   },
          //   data: [20, 30, 50, 60, 45, 40],
          // },
        ],
      });

      // 初始化图表数据
      updateChartData();
    }

    // 更新图表数据
    function updateChartData() {
      const myChart = echarts.getInstanceByDom(chart.value);

      // 生成随机数据
      // const randomData1 = Array.from({ length: 200 }, () => Math.floor(Math.random() * 100));
      function generateRandomData() {
        const randomData = [];

        for (let i = 0; i < 30; i++) {
          // 生成一个0到1之间的随机数
          const rand = Math.random();

          let value;

          if (rand < 2 / 3) {
            // 对于2/3的情况，生成3到20之间的随机数
            value = Math.floor(Math.random() * 18) + 3;
          } else {
            // 对于1/3的情况，生成20到100之间的随机数
            value = Math.floor(Math.random() * 81) + 20;
          }

          randomData.push(value);
        }

        return randomData;
      }

      const randomData1 = generateRandomData();

      // const randomData2 = Array.from({ length: 8 }, () => Math.floor(Math.random() * 100));

      // 更新系列数据
      myChart.setOption({
        series: [
          {
            data: randomData1,
          },
          // {
          //   data: randomData2,
          // },
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
  width: 100%;

}

.wrapper .chart {
  width: 180%;
  height: 200px;
}
</style>
