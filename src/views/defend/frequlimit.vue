
import { object } from 'vue-types';
<template>
  <div class="outer">
    <div class="main">
      <el-table :data="filterTableData" style="width: 100%" size="large" :row-style="rowStyle">

        <el-table-column label="限制IP" prop="ip" width="500px">

          <template #default="scope">
            <div class="ip">
              <span>{{ scope.row.ip.text }}</span>
              <span class="loc">（{{ scope.row.ip.loc }}）</span>
            </div>
          </template>

        </el-table-column>

        <el-table-column label="原因" prop="reazon" />
        <el-table-column label="限制结果" prop="result" />
        <el-table-column label="剩余限制时间" prop="remain" />
        <el-table-column label="已限制请求数" prop="num" />
        <el-table-column label="限制开始时间" width="260px" prop="begintime" />

        <el-table-column label="操作" width="160px">

          <template #default="scope">
            <el-button type="primary" @click="handleEdit(scope.$index, scope.row)">解除限制</el-button>

          </template>
        </el-table-column>

      </el-table>
      <div class="pagination">
        <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize" :page-sizes="[5, 10, 15, 20]"
          :disabled="disabled" :background="background" layout="total, sizes" :total="total"
          @size-change="handleSizeChange" @current-change="handleCurrentChange" />
        <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize" :page-sizes="[5, 10, 15, 20]"
          :disabled="disabled" :background="background" layout="prev, pager, next, jumper" :total="total"
          @size-change="handleSizeChange" @current-change="handleCurrentChange" />
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'


interface User {
  ip: { text: string; loc: string }
  reazon: string
  result: string
  remain: string
  num: number
  begintime: string
}

const search = ref('')
const filterTableData = computed(() =>
  displayedData.value.filter(
    (data) =>
      !search.value ||
      data.ip.text.includes(search.value)
  )
)

const tableData = ref<User[]>([
  {
    ip: { text: '60.205.224.223', loc: '北京市' },
    reazon: '高频访问',
    result: '人机验证',
    remain: '已结束',
    num: 264,
    begintime: '2024-02-06 08:02:03',
  },
  {
    ip: { text: '118.31.166.49', loc: '浙江省' },
    reazon: '高频访问',
    result: '人机验证',
    remain: '已结束',
    num: 51,
    begintime: '2024-02-06 09:11:10',
  },
  {
    ip: { "text": "203.117.231.45", "loc": "新加坡" },
    reazon: '高频访问',
    result: '人机验证',
    remain: '已结束',
    num: 1,
    begintime: "2024-02-06 10:30:45"
  },
  {
    ip: { "text": "172.56.78.91", "loc": "加利福尼亚州" },
    reazon: '高频访问',
    result: '人机验证',
    remain: '已结束',
    num: 4513,
    "begintime": "2024-02-06 14:45:22"
  },
  {
    "ip": { "text": "124.78.39.102", "loc": "上海市" },
    reazon: '高频访问',
    result: '人机验证',
    remain: '已结束',
    num: 451,
    "begintime": "2024-02-07 09:55:30"
  },
  {
    "ip": { "text": "82.45.76.98", "loc": "巴黎" },
    reazon: '高频访问',
    result: '人机验证',
    remain: '已结束',
    num: 2,
    "begintime": "2024-02-07 14:05:15"
  },
  {
    "ip": { "text": "95.128.45.67", "loc": "莫斯科" },
    reazon: '高频访问',
    result: '人机验证',
    remain: '已结束',
    num: 0,
    "begintime": "2024-02-07 16:20:12"
  },
  {
    "ip": { "text": "120.67.89.123", "loc": "广州市" },
    reazon: '高频访问',
    result: '人机验证',
    remain: '已结束',
    num: 1,
    "begintime": "2024-02-08 14:20:58"
  },
  {
    "ip": { "text": "202.45.76.98", "loc": "成都市" },
    reazon: '高频访问',
    result: '人机验证',
    remain: '已结束',
    num: 6,
    "begintime": "2024-02-08 15:10:35"
  },
]);


const handleEdit = (index: number, row: User) => {
  console.log(index, row)
}
const handleDelete = (index: number, row: User) => {
  console.log(index, row)
}



// 分页
const currentPage = ref(1)
const pageSize = ref(5)
const background = ref(false)
const disabled = ref(false)

// 计算属性，动态计算总的数据条数
const total = computed(() => tableData.value.length);
// 计算起始索引和结束索引
const startIndex = computed(() => (currentPage.value - 1) * pageSize.value);
const endIndex = computed(() => startIndex.value + pageSize.value);

// 获取当前页的数据
const displayedData = computed(() => tableData.value.slice(startIndex.value, endIndex.value));

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`);
  pageSize.value = val;
  currentPage.value = 1; // reset current page when page size changes
};

const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`);
  currentPage.value = val;
};


// 表格行样式
const rowStyle = () => {
  return {
    height: '150px', // 设置每一行的高度
    color: 'black',
    // fontFamily: 'cursive',
    fontSize: '15px',
    fontWeight: '500',
  };
};
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  position: relative;


}

.loc {
  color: rgb(169, 169, 169);
}




.icon {
  margin-right: 5px;
}

.pagination {
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>