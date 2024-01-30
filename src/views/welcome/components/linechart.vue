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
      }, 30000); // 5000毫秒（5秒）更新一次
    });

    // 初始化图表
    function drawChart() {
      const myChart = echarts.init(chart.value, 'echarTheme');
      const emptyDataArray = new Array(80).fill('');

      myChart.setOption({
        color: ['#13c2c2', '#c0f0f0', '#c0f0f0'],
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
          position: function (point, params, dom, rect, size) {

            var x = point[0];//
            var y = point[1];
            var viewWidth = size.viewSize[0];
            var viewHeight = size.viewSize[1];
            var boxWidth = size.contentSize[0];
            var boxHeight = size.contentSize[1];
            var posX = 0;//x坐标位置
            var posY = 0;//y坐标位置

            if (x < boxWidth) {//当tootip水平方向越界显示不全的时候，可以通过增大或者减少posX的值来控制tooltip水平方向的显示位置  1
              posX = 10;
            } else {
              posX = x - boxWidth;
            }

            if (y < boxHeight) {//同1  避免垂直方向tooptip越界内容显示不全问题
              posY = 1;
            } else {
              posY = y - boxHeight;
            }

            return [posX, posY];

          },

        },
        yAxis: [
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
            type: 'value',
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
        xAxis: [
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
            type: 'line',  // 修改这里为 'line'
            name: '总数',
            smooth: true,  // 添加这行进行平滑处理
            symbol: 'none',  // 设置为空，表示不显示点
            symbolSize: 0,  // 设置为0，表示不显示点
            // barHeight: 1,
            // barMaxWidth: 100,
            // barWidth: 90,
            // barGap: 105,  // 调整列与列之间的间隙
            // barCategoryGap: 90,
            label: {
              show: false,
              position: 'inside',
            },
            data: emptyDataArray,
          },
        ],
      });

      // 初始化图表数据
      updateChartData();
    }

    // 更新图表数据
    function updateChartData() {
      const myChart = echarts.getInstanceByDom(chart.value);

      // 生成随机数据
      function generateRandomData() {
        const randomData = [];

        for (let i = 0; i < 10; i++) {
          const rand = Math.random();
          let value;

          if (rand < 2 / 3) {
            value = Math.floor(Math.random() * 18) + 3;
          } else {
            value = Math.floor(Math.random() * 81) + 20;
          }

          randomData.push(value);
        }

        return randomData;
      }

      const randomData1 = generateRandomData();

      // 更新系列数据
      myChart.setOption({
        series: [
          {
            data: randomData1,
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
  width: 100%;
}

.wrapper .chart {
  width: 900%;
  height: 120px;
}
</style>
