<script setup lang="ts">
import * as echarts from 'echarts';
import { type CSSProperties, ref, computed, onMounted } from "vue";


const elStyle = computed((): CSSProperties => {
  return {
    width: "85vw",
    justifyContent: "start"
  };
});



</script>

<template>
  <div class="outer" :style="elStyle">

    <el-card class="box-card card" shadow="never" style="border: none;">

      <div class="infos">
        <div class="info">
          <h1>系统版本号</h1>
          <span>5.1.0</span>
        </div>
        <div class="info">
          <h1>操作系统类型和版本</h1>
          <span>Linux CentOS 7.5</span>
        </div>
        <div class="info">
          <h1>Web服务器</h1>
          <span>Nginx 1.18.0</span>
        </div>
        <div class="info">
          <h1>数据库服务器</h1>
          <span>MySQL 5.7</span>
        </div>

      </div>

    </el-card>
  </div>
</template>

<style scoped>
.infos {
  display: flex;
  flex-direction: column;
}

.info {
  display: flex;
  align-items: center;
  height: 40px;

  h1 {
    width: 320px;
    font-size: 16px;

  }

  span {}
}
</style>
