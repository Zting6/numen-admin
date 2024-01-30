<script setup lang="ts">
import * as echarts from 'echarts';
import { type CSSProperties, ref, computed, onMounted } from "vue";
import EchartsComponent from '@/components/map.vue';
import RowChart from './components/rowchart.vue';
import ColChart from './components/colchart.vue';
import BottomLeftChart from './components/bottomLeftChart.vue';
import BottomRightChart from './components/bottomRightChart.vue';
import LineChart from './components/linechart.vue';



const elStyle = computed((): CSSProperties => {
  return {
    width: "85vw",
    justifyContent: "start"
  };
});
const elBodyStyle = computed((): CSSProperties => {
  return {
    width: '210px',
    height: '80px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    borderRight: '3px solid rgb(247 247 247)',
    marginRight: '26px'
  }
});


</script>

<template>
  <div class="outer" :style="elStyle">
    <div class="first">
      <div class="first_left">
        <div class="fl_top">
          <el-card class="box-card fcard" style="width: 460px; margin-right: 20px;">
            <el-card class="box-card card" shadow="never" style="border: none;">

              <h1 class="cardTitle">今日请求数</h1>
              <span class="cardSpan">65,439</span>

            </el-card>
          </el-card>

          <el-card class="box-card fcard" :body-style="{
            display: 'flex',
            alignItems: 'center'
          }">

            <el-card class="box-card card" shadow="never" style="border: none;"
              :body-style="{ width: '210px', height: '80px', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', borderRight: '3px solid rgb(247 247 247)', marginRight: '10px' }">

              <h1 class="cardTitle">今日拦截</h1>
              <span class="cardOrangeSpan">1,684</span>

            </el-card>
            <el-card class="box-card" shadow="never" style="border: none;" :body-style="{
              width: '220px'
            }">
              <h1 class="cardTitle">今日拦截独立IP</h1>
              <span class="cardOrangeSpan">159</span>

            </el-card>

          </el-card>
        </div>
        <div class="fl_bottom">
          <el-card class="box-card fcard" style="width: 100%; margin-right: 2vw;" :body-style="{
            display: 'flex',
            alignItems: 'center'
          }">
            <el-card class="bosx-card card" shadow="never" style="border: none;" :body-style="elBodyStyle">

              <h1 class="cardTitle">4xx错误数量</h1>
              <span class="cardSpan">13,746</span>

            </el-card>
            <el-card class="bosx-card card" shadow="never" style="border: none;" :body-style="elBodyStyle">

              <h1 class="cardTitle">4xx错误率</h1>
              <span class="cardSpan">21.01%</span>

            </el-card>
            <el-card class="bosx-card card" shadow="never" style="border: none;" :body-style="elBodyStyle">

              <h1 class="cardTitle">5xx错误数量</h1>
              <span class="cardSpan">0</span>

            </el-card>
            <el-card class="box-card card" shadow="never" style="border: none;"
              :body-style="{ width: '210px', height: '80px', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }">

              <h1 class="cardTitle">5xx错误率</h1>
              <span class="cardSpan">0%</span>

            </el-card>
          </el-card>
        </div>
      </div>
      <div class="first_right">
        <el-card class="box-card" style="width: 620px; height: 220px;">
          <h1 class="cardTitle">实时QPS</h1>
          <ColChart />
        </el-card>
      </div>
    </div>
    <div class="second">
      <div class="second_left">
        <div class="sl_left">
          <h1 class="cardmainTitle">30天访问来源地区</h1>

          <el-card class="box-card" style="" :body-style="{
            width: '',
            height: '460px',
            display: 'flex',
            alignItems: 'center'

          }">
            <EchartsComponent />

            <RowChart />


          </el-card>

        </div>

      </div>
      <div class="second_right">
        <div class="sr_right">
          <el-card class="box-card" style="width: 394px; height: 461px;">
            <h1 class="cardTitle">网站访问情况</h1>

            <el-card class="box-card card" shadow="never" style="border: none;"
              :body-style="{ width: '360px', height: '130px', display: 'flex', flexDirection: 'column' }">

              <h1 class="cardTitle">页面浏览(PV)</h1>
              <LineChart />
            </el-card>
            <el-card class="box-card card" shadow="never" style="border: none;"
              :body-style="{ width: '360px', height: '130px', display: 'flex', flexDirection: 'column' }">

              <h1 class="cardTitle">独立访客(UV)</h1>
              <LineChart />
            </el-card>
            <el-card class="box-card card" shadow="never" style="border: none;"
              :body-style="{ width: '360px', height: '130px', display: 'flex', flexDirection: 'column' }">

              <h1 class="cardTitle">独立IP</h1>
              <LineChart />
            </el-card>
          </el-card>


        </div>
      </div>
    </div>
    <div class="third">
      <div class="t_left">
        <el-card class="box-card" style="width: 780px; height: 220px;">
          <h1 class="cardTitle">30天访问情况</h1>
          <BottomLeftChart />
        </el-card>
      </div>
      <div class="t_right">
        <el-card class="box-card" style="width: 780px; height: 220px;">
          <h1 class="cardTitle">30天拦截情况</h1>
          <BottomRightChart />
        </el-card>
      </div>
    </div>
  </div>
</template>

<style scoped>
.first {
  display: flex;

}

.first_left {
  width: 946px;
}

.first_right {
  margin-left: 20px;
}

.fcard {
  height: 100px;
  display: flex;
  align-items: center;
}

.fl_top {
  display: flex;
}

.fl_bottom {
  margin-top: 20px;
}

.second {
  margin-top: 20px;
  display: flex;
}

.sl_left {
  display: flex;
  margin-right: 20px;
  position: relative;
}

.sr_right {
  width: 300px;
}

.third {
  margin-top: 20px;
  display: flex;
}

.t_left {
  margin-right: 20px;
}

.cardTitle {
  font-size: 16px;
  font-weight: 500;
  color: gray;
  margin-bottom: 6px;
}

.cardmainTitle {
  font-size: 16px;
  font-weight: 500;
  color: gray;
  position: absolute;
  top: 20px;
  left: 20px;
}

.cardSpan {
  font-size: 26px;
  color: #9fdbdb;
}

.cardOrangeSpan {
  font-size: 26px;
  color: #febf02;
}
</style>
