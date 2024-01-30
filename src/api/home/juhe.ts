import * as echarts from 'echarts';

const juhechart = echarts.init(document.getElementById('juhe'));

// Specify chart configuration and data
const option: echarts.EChartsOption = {
  tooltip: {},
  animationDuration: 3000,
  animationEasingUpdate: 'quinticInOut',
  series: [
    {
      name: '攻击',
      type: 'graph',
      layout: 'force',
      draggable: false,
      force: {
        initLayout: 'circular',
        gravity: 0.5,
        repulsion: 120,
      },
      data: [
        { name: '攻击', symbolSize: 35, draggable: false, value: 27, depth: 0 },
        { name: 'DDOS', value: 15, symbolSize: 18, category: 'DDOS', draggable: false, depth: 1 },
        { name: 'IP', symbolSize: 7, category: 'DDOS', draggable: false, value: 1, depth: 0 },
        // ... (other data entries)
      ],
      links: [
        { source: '攻击', target: 'DDOS' },
        { source: 'DDOS', target: 'IP' },
        // ... (other links)
      ],
      categories: [
        { name: 'DDOS' },
        { name: '恶意代码' },
        { name: 'web攻击' },
        { name: '病毒' },
        { name: '其它' },
        { name: '信息收集型' },
      ],
      focusNodeAdjacency: true,
      roam: false,
      label: {
        normal: {
          show: false,
        },
      },
      lineStyle: {
        normal: {
          color: 'source',
          curveness: 0,
          type: 'solid',
          shadowColor: 'rgba(0, 0, 0, 0.5)',
          shadowBlur: 10,
        },
      },
    },
  ],
};

// Log specific properties
console.log(option.series[0].force.repulsion);

// Use the specified configuration and data to display the chart
juhechart.setOption(option);
export { juhechart, option };