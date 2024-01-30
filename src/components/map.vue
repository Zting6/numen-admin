<template>
  <div ref="main"></div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import * as echarts from 'echarts';
import 'echarts/dist/echarts.min.js'
import 'echarts/map/world.js'
import 'echarts/theme/echartTheme.js';

export default defineComponent({
  setup() {
    const main = ref(null);

    onMounted(() => {
      initEcharts();
    });

    function randomData() {
      return Math.round(Math.random() * 500);
    }

    function initEcharts() {
      main.value.style.width = '730px';
      main.value.style.height = '501px';
      // 初始化echarts实例
      const myChart = echarts.init(main.value, 'echarTheme');

      // 使用指定的配置项和数据显示图表
      myChart.setOption({
        // backgroundColor: "#02AFDB",
        title: {
          // text: '在线设备分布',
          left: '40%',
          top: '0px',
          textStyle: {
            color: '#fff',
            opacity: 0.7
          }
        },
        dataRange: {
          show: false,
          min: 0,
          max: 1000000,
          text: ['High', 'Low'],
          realtime: true,
          calculable: true,
          color: ['#13c2c2', '#dbf2f2', '#dbf2f2']
        },
        tooltip: {
          trigger: 'item'
        },
        geo: {
          map: 'world',
          label: {
            emphasis: {
              show: false
            }
          },
          roam: false,
          silent: true,
          itemStyle: {
            normal: {
              areaColor: '#dbf2f2',
              borderColor: 'gray'
            },
            emphasis: {
              areaColor: '#13c2c2'
            }
          }
        },
        series: [{
          type: 'map',
          mapType: 'world',
          mapLocation: {
            y: 100
          },
          data: [
            {
              name: 'Afghanistan',
              value: 2837
            },
            {
              name: 'Angola',
              value: 1954
            },
            {
              name: 'Albania',
              value: 3150
            },
            {
              name: 'United Arab Emirates',
              value: 844
            },
            {
              name: 'Argentina',
              value: 40374
            },
            {
              name: 'Armenia',
              value: 2963
            },
            {
              name: 'French Southern and Antarctic Lands',
              value: 268
            },
            {
              name: 'Australia',
              value: 22404
            },
            {
              name: 'Austria',
              value: 8401
            },
            {
              name: 'Azerbaijan',
              value: 9094
            },
            {
              name: 'Burundi',
              value: 923
            },
            {
              name: 'Belgium',
              value: 10941
            },
            {
              name: 'Benin',
              value: 9509
            },
            {
              name: 'Burkina Faso',
              value: 15540
            },
            {
              name: 'Bangladesh',
              value: 1511
            },
            {
              name: 'Bulgaria',
              value: 7389
            },
            {
              name: 'The Bahamas',
              value: 66402
            },
            {
              name: 'Bosnia and Herzegovina',
              value: 3845
            },
            {
              name: 'Belarus',
              value: 9491
            },
            {
              name: 'Belize',
              value: 308
            },
            {
              name: 'Bermuda',
              value: 64.951
            },
            {
              name: 'Bolivia',
              value: 716
            },
            {
              name: 'Brazil',
              value: 19521
            },
            {
              name: 'Brunei',
              value: 27
            },
            {
              name: 'Bhutan',
              value: 716
            },
            {
              name: 'Botswana',
              value: 1969
            },
            {
              name: 'Central African Republic',
              value: 4349
            },
            {
              name: 'Canada',
              value: 34126
            },
            {
              name: 'Switzerland',
              value: 7830
            },
            {
              name: 'Chile',
              value: 17150
            },
            {
              name: 'China',
              value: 1106559
            },
            {
              name: 'Ivory Coast',
              value: 60508
            },
            {
              name: 'Cameroon',
              value: 20624
            },
            {
              name: 'Democratic Republic of the Congo',
              value: 62191
            },
            {
              name: 'Republic of the Congo',
              value: 3573
            },
            {
              name: 'Colombia',
              value: 4644
            },
            {
              name: 'Costa Rica',
              value: 4669
            },
            {
              name: 'Cuba',
              value: 11281
            },
            {
              name: 'Northern Cyprus',
              value: 168
            },
            {
              name: 'Cyprus',
              value: 1103
            },
            {
              name: 'Czech Republic',
              value: 10553
            },
            {
              name: 'Germany',
              value: 908301
            },
            {
              name: 'Djibouti',
              value: 834
            },
            {
              name: 'Denmark',
              value: 5550
            },
            {
              name: 'Dominican Republic',
              value: 10016
            },
            {
              name: 'Algeria',
              value: 37062
            },
            {
              name: 'Ecuador',
              value: 15001
            },
            {
              name: 'Egypt',
              value: 78075
            },
            {
              name: 'Eritrea',
              value: 5741
            },
            {
              name: 'Spain',
              value: 46182
            },
            {
              name: 'Estonia',
              value: 1298
            },
            {
              name: 'Ethiopia',
              value: 87095
            },
            {
              name: 'Finland',
              value: 5367
            },
            {
              name: 'Fiji',
              value: 860
            },
            {
              name: 'Falkland Islands',
              value: 49
            },
            {
              name: 'France',
              value: 63230
            },
            {
              name: 'Gabon',
              value: 1556
            },
            {
              name: 'United Kingdom',
              value: 706206
            },
            {
              name: 'Georgia',
              value: 4388
            },
            {
              name: 'Ghana',
              value: 24262
            },
            {
              name: 'Guinea',
              value: 10876
            },
            {
              name: 'Gambia',
              value: 1680
            },
            {
              name: 'Guinea Bissau',
              value: 10876
            },
            {
              name: 'Equatorial Guinea',
              value: 696
            },
            {
              name: 'Greece',
              value: 11109
            },
            {
              name: 'Greenland',
              value: 56
            },
            {
              name: 'Guatemala',
              value: 14341
            },
            {
              name: 'French Guiana',
              value: 231
            },
            {
              name: 'Guyana',
              value: 786
            },
            {
              name: 'Honduras',
              value: 7621
            },
            {
              name: 'Croatia',
              value: 4338
            },
            {
              name: 'Haiti',
              value: 9896
            },
            {
              name: 'Hungary',
              value: 10014
            },
            {
              name: 'Indonesia',
              value: 240676
            },
            {
              name: 'India',
              value: 12054
            },
            {
              name: 'Ireland',
              value: 4467
            },
            {
              name: 'Iran',
              value: 24067
            },
            {
              name: 'Iraq',
              value: 30962
            },
            {
              name: 'Iceland',
              value: 318
            },
            {
              name: 'Israel',
              value: 7420
            },
            {
              name: 'Italy',
              value: 60508
            },
            {
              name: 'Jamaica',
              value: 2741
            },
            {
              name: 'Jordan',
              value: 6454
            },
            {
              name: 'Japan',
              value: 12735
            },
            {
              name: 'Kazakhstan',
              value: 1592
            },
            {
              name: 'Kenya',
              value: 40909.194
            },
            {
              name: 'Kyrgyzstan',
              value: 533
            },
            {
              name: 'Cambodia',
              value: 143
            },
            {
              name: 'South Korea',
              value: 5145
            },
            {
              name: 'Kosovo',
              value: 97
            },
            {
              name: 'Kuwait',
              value: 299
            },
            {
              name: 'Laos',
              value: 639
            },
            {
              name: 'Lebanon',
              value: 434
            },
            {
              name: 'Liberia',
              value: 3957
            },
            {
              name: 'Libya',
              value: 6040
            },
            {
              name: 'Sri Lanka',
              value: 20758
            },
            {
              name: 'Lesotho',
              value: 2008
            },
            {
              name: 'Lithuania',
              value: 3068
            },
            {
              name: 'Luxembourg',
              value: 507
            },
            {
              name: 'Latvia',
              value: 2090
            },
            {
              name: 'Morocco',
              value: 31642
            },
            {
              name: 'Moldova',
              value: 103
            },
            {
              name: 'Madagascar',
              value: 21079
            },
            {
              name: 'Mexico',
              value: 11788
            },
            {
              name: 'Macedonia',
              value: 507
            },
            {
              name: 'Mali',
              value: 13985
            },
            {
              name: 'Myanmar',
              value: 51931
            },
            {
              name: 'Montenegro',
              value: 620
            },
            {
              name: 'Mongolia',
              value: 2712
            },
            {
              name: 'Mozambique',
              value: 23967
            },
            {
              name: 'Mauritania',
              value: 3609
            },
            {
              name: 'Malawi',
              value: 15013
            },
            {
              name: 'Malaysia',
              value: 28275
            },
            {
              name: 'Namibia',
              value: 2178
            },
            {
              name: 'New Caledonia',
              value: 246
            },
            {
              name: 'Niger',
              value: 15893
            },
            {
              name: 'Nigeria',
              value: 1597
            },
            {
              name: 'Nicaragua',
              value: 582
            },
            {
              name: 'Netherlands',
              value: 16615
            },
            {
              name: 'Norway',
              value: 4891
            },
            {
              name: 'Nepal',
              value: 26846
            },
            {
              name: 'New Zealand',
              value: 4368
            },
            {
              name: 'Oman',
              value: 280
            },
            {
              name: 'Pakistan',
              value: 17314
            },
            {
              name: 'Panama',
              value: 3678
            },
            {
              name: 'Peru',
              value: 2926
            },
            {
              name: 'Philippines',
              value: 9344
            },
            {
              name: 'Papua New Guinea',
              value: 68
            },
            {
              name: 'Poland',
              value: 3819
            },
            {
              name: 'Puerto Rico',
              value: 3709
            },
            {
              name: 'North Korea',
              value: 168
            },
            {
              name: 'Portugal',
              value: 10589
            },
            {
              name: 'Paraguay',
              value: 6459
            },
            {
              name: 'Qatar',
              value: 1749
            },
            {
              name: 'Romania',
              value: 218
            },
            {
              name: 'Russia',
              value: 2186
            },
            {
              name: 'Rwanda',
              value: 108
            },
            {
              name: 'Western Sahara',
              value: 51
            },
            {
              name: 'Saudi Arabia',
              value: 27258
            },
            {
              name: 'Sudan',
              value: 35652
            },
            {
              name: 'South Sudan',
              value: 9940
            },
            {
              name: 'Senegal',
              value: 12950
            },
            {
              name: 'Solomon Islands',
              value: 526
            },
            {
              name: 'Sierra Leone',
              value: 5751
            },
            {
              name: 'El Salvador',
              value: 6218
            },
            {
              name: 'Somaliland',
              value: 963
            },
            {
              name: 'Somalia',
              value: 9636
            },
            {
              name: 'Republic of Serbia',
              value: 3573
            },
            {
              name: 'Suriname',
              value: 524
            },
            {
              name: 'Slovakia',
              value: 543
            },
            {
              name: 'Slovenia',
              value: 205
            },
            {
              name: 'Sweden',
              value: 9382
            },
            {
              name: 'Swaziland',
              value: 1193
            },
            {
              name: 'Syria',
              value: 783
            },
            {
              name: 'Chad',
              value: 1172
            },
            {
              name: 'Togo',
              value: 630
            },
            {
              name: 'Thailand',
              value: 66402
            },
            {
              name: 'Tajikistan',
              value: 7627
            },
            {
              name: 'Turkmenistan',
              value: 504
            },
            {
              name: 'East Timor',
              value: 10016
            },
            {
              name: 'Trinidad and Tobago',
              value: 1328
            },
            {
              name: 'Tunisia',
              value: 10631
            },
            {
              name: 'Turkey',
              value: 72137
            },
            {
              name: 'United Republic of Tanzania',
              value: 44973
            },
            {
              name: 'Uganda',
              value: 33987
            },
            {
              name: 'Ukraine',
              value: 46050
            },
            {
              name: 'Uruguay',
              value: 3371
            },
            {
              name: 'United States of America',
              value: 31224
            },
            {
              name: 'Uzbekistan',
              value: 2776
            },
            {
              name: 'Venezuela',
              value: 236
            },
            {
              name: 'Vietnam',
              value: 89047
            },
            {
              name: 'Vanuatu',
              value: 236
            },
            {
              name: 'West Bank',
              value: 1365
            },
            {
              name: 'Yemen',
              value: 227
            },
            {
              name: 'South Africa',
              value: 51452
            },
            {
              name: 'Zambia',
              value: 13216
            },
            {
              name: 'Zimbabwe',
              value: 130978
            }
          ],
          symbolSize: 12,
          // 国家名称
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: true
            }
          },
          itemStyle: {
            emphasis: {
              borderColor: '#fff',
              borderWidth: 1
            }
          }
        }],
      });
    }

    return {
      main,
    };
  },
});
</script>

<style scoped></style>
