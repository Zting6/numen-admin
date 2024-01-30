
import { object } from 'vue-types';
<template>
  <div class="outer">
    <div class="main">
      <el-table :data="filterTableData" style="width: 100%" size="large" :row-style="rowStyle">
        <el-table-column label="状态" width="160px">

          <template #default="scope">
            <!-- <el-button size="small" @click="handleEdit(scope.$index, scope.row)">Edit</el-button> -->
            <el-switch v-model="scope.row.status" class="mb-2" active-text="启用" />

          </template>
        </el-table-column>
        <el-table-column label="类型" prop="type" width="160px">

          <template #default="scope">
            <div class="type">
              <svg v-if="scope.row.type.text == '白名单'" t="1706508324145" class="icon" viewBox="0 0 1024 1024"
                version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10350" width="26" height="26">
                <path
                  d="M620.08 765.73c-0.08 0.48-0.14 1-0.24 1.44 0-0.24 0.1-0.46 0.14-0.68a1.94 1.94 0 0 0 0-0.24c0.02-0.16 0.07-0.33 0.1-0.52zM620.08 765.73v-0.31c0.03 0.1 0.01 0.21 0 0.31z"
                  fill="#61cf7a" p-id="10351"></path>
                <path
                  d="M502 469.22c-111.62 0-202.1-90.49-202.1-202.11S390.33 65 502 65s202.11 90.49 202.11 202.11S613.57 469.22 502 469.22z"
                  p-id="10352" fill="#13c2c2"></path>
                <path
                  d="M572.14 715a225.33 225.33 0 0 1 81.07-106.62c36.44-26.16 81.49-39.76 126.21-39.92a244.09 244.09 0 0 1 36.8 3.2c1.51 0.24 3 0.5 4.53 0.77a423.2 423.2 0 0 0-162.6-117.66 234.67 234.67 0 0 1-137.79 61.85h-0.6c-1.53 0.14-3.07 0.27-4.61 0.38l-1 0.07c-1.41 0.1-2.83 0.18-4.24 0.25l-1.2 0.06c-1.43 0.06-2.85 0.11-4.28 0.14h-1.08q-2.65 0.06-5.31 0.06t-5.31-0.06h-1.08c-1.43 0-2.85-0.08-4.27-0.14l-1.2-0.06c-1.42-0.07-2.83-0.15-4.25-0.25l-1-0.07c-1.54-0.11-3.07-0.24-4.61-0.38h-0.6a234.67 234.67 0 0 1-137.79-61.85 424.1 424.1 0 0 0-261 441.92l279.79 0.8v0.8l141.34-0.4 91.06 0.26C557.8 843.27 550.24 775.16 572.14 715z"
                  p-id="10353" fill="#13c2c2"></path>
                <path
                  d="M779.32 617.62A170.69 170.69 0 1 0 950 788.31a170.69 170.69 0 0 0-170.68-170.69z m113.59 133.53l-12.45 13.67-86.64 95.08c-9.2 10.1-24.54 8.24-33.94 0l-8.94-7.83-62.11-54.44c-10.08-8.83-8.31-24.88 0-33.94 9.17-10 24.51-8.27 33.95 0l8.93 7.84L775 809.42q42-46.09 84-92.21c9-9.91 24.73-8.46 33.94 0 9.83 9.05 8.43 24.66-0.03 33.94z"
                  p-id="10354" fill="#13c2c2"></path>
              </svg>

              <svg v-else t="1706508507971" class="icon" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="14343" width="26" height="26">
                <path
                  d="M552.533333 641.066667c-4.266667-5.333333-9.6-11.733333-12.8-19.2-2.133333-4.266667-3.2-6.4-4.266666-10.666667-2.133333-5.333333-3.2-10.666667-3.2-16 0-7.466667 0-17.066667 1.066666-26.666667 1.066667-11.733333 5.333333-23.466667 13.866667-33.066666 5.333333-5.333333 11.733333-10.666667 17.066667-14.933334 4.266667-3.2 8.533333-5.333333 11.733333-9.6 5.333333-4.266667 9.6-11.733333 12.8-18.133333 4.266667-7.466667 6.4-14.933333 10.666667-22.4 2.133333-5.333333 4.266667-11.733333 7.466666-18.133333 2.133333-3.2 3.2-6.4 4.266667-10.666667 6.4-19.2 10.666667-35.2 12.8-50.133333 4.266667-18.133333 5.333333-35.2 7.466667-58.666667 1.066667-42.666667-4.266667-86.4-17.066667-128 0-1.066667-1.066667-3.2-1.066667-4.266667-4.266667-19.2-12.8-37.333333-24.533333-54.4-1.066667-1.066667-2.133333-3.2-3.2-4.266666l1.066667 2.133333c-1.066667-2.133333-3.2-4.266667-4.266667-5.333333-2.133333-2.133333-3.2-4.266667-4.266667-6.4l-1.066666-1.066667c-9.6-11.733333-19.2-20.266667-28.8-27.733333-13.866667-10.666667-27.733333-19.2-42.666667-24.533334-14.933333-7.466667-29.866667-11.733333-44.8-13.866666-14.933333-2.133333-28.8-3.2-42.666667-3.2h-9.6c-13.866667 0-27.733333 1.066667-42.666666 3.2-14.933333 2.133333-29.866667 6.4-43.733334 11.733333-14.933333 5.333333-28.8 13.866667-42.666666 24.533333-10.666667 7.466667-19.2 17.066667-28.8 27.733334l-1.066667 1.066666c-2.133333 2.133333-3.2 4.266667-4.266667 6.4-1.066667 2.133333-3.2 4.266667-4.266666 5.333334l-1.066667 1.066666c-1.066667 1.066667-2.133333 3.2-3.2 4.266667-11.733333 17.066667-19.2 35.2-24.533333 54.4 0 1.066667-1.066667 3.2-1.066667 4.266667-11.733333 41.6-18.133333 84.266667-17.066667 128 1.066667 23.466667 4.266667 41.6 7.466667 58.666666 3.2 14.933333 6.4 32 12.8 50.133334 1.066667 4.266667 3.2 6.4 4.266667 10.666666 3.2 6.4 5.333333 11.733333 7.466666 18.133334 3.2 7.466667 6.4 14.933333 10.666667 22.4 3.2 6.4 7.466667 12.8 12.8 18.133333 4.266667 3.2 8.533333 6.4 11.733333 9.6 5.333333 4.266667 11.733333 10.666667 17.066667 14.933333 8.533333 9.6 12.8 20.266667 13.866667 33.066667 1.066667 9.6 1.066667 18.133333 1.066666 26.666667 0 4.266667-1.066667 9.6-2.133333 13.866666v2.133334c-1.066667 4.266667-3.2 6.4-4.266667 10.666666-2.133333 3.2-3.2 4.266667-4.266666 7.466667-1.066667 2.133333-3.2 4.266667-4.266667 5.333333s-3.2 4.266667-4.266667 4.266667c-6.4 6.4-16 13.866667-27.733333 21.333333-10.666667 6.4-22.4 11.733333-35.2 17.066667s-26.666667 8.533333-40.533333 11.733333-26.666667 8.533333-40.533334 11.733334c-11.733333 4.266667-24.533333 9.6-35.2 17.066666-9.6 6.4-18.133333 13.866667-25.6 23.466667s-11.733333 21.333333-14.933333 36.266667c-8.533333 42.666667-10.666667 73.6-6.4 98.133333 3.2 24.533333 8.533333 39.466667 14.933333 43.733333 4.266667 3.2 11.733333 5.333333 26.666667 9.6 13.866667 3.2 30.933333 5.333333 50.133333 9.6 21.333333 3.2 43.733333 5.333333 66.133334 8.533334 24.533333 3.2 49.066667 4.266667 73.6 7.466666 13.866667 1.066667 26.666667 2.133333 41.6 3.2 10.666667 1.066667 19.2 1.066667 29.866666 2.133334h32c11.733333 0 22.4 1.066667 34.133334 1.066666s22.4 0 34.133333-1.066666h32c10.666667-1.066667 19.2-1.066667 29.866667-2.133334 13.866667-1.066667 26.666667-2.133333 41.6-3.2 13.866667-1.066667 26.666667-2.133333 40.533333-4.266666-44.8-48-72.533333-112-72.533333-182.4-3.2-45.866667 9.6-89.6 29.866666-128z"
                  p-id="14344" fill="#d81e06"></path>
                <path
                  d="M963.2 695.466667c-5.333333-11.733333-10.666667-22.4-18.133333-33.066667-13.866667-20.266667-30.933333-38.4-52.266667-52.266667-10.666667-6.4-21.333333-12.8-33.066667-18.133333-23.466667-9.6-48-14.933333-74.666666-14.933333-39.466667 0-76.8 11.733333-107.733334 33.066666-20.266667 13.866667-38.4 30.933333-52.266666 52.266667-4.266667 5.333333-7.466667 11.733333-10.666667 17.066667-2.133333 5.333333-5.333333 9.6-7.466667 14.933333-9.6 23.466667-14.933333 48-14.933333 74.666667 0 73.6 41.6 137.6 102.4 169.6 26.666667 13.866667 57.6 22.4 89.6 22.4 26.666667 0 52.266667-5.333333 74.666667-14.933334 11.733333-5.333333 22.4-10.666667 33.066666-18.133333 20.266667-13.866667 38.4-30.933333 52.266667-52.266667 20.266667-30.933333 33.066667-67.2 33.066667-107.733333 1.066667-24.533333-4.266667-50.133333-13.866667-72.533333z m-60.8 155.733333c9.6 9.6 9.6 25.6 0 35.2s-24.533333 9.6-35.2 0l-81.066667-81.066667-81.066666 80c-9.6 9.6-24.533333 9.6-35.2 0s-9.6-24.533333 0-35.2l81.066666-81.066666-81.066666-81.066667c-9.6-9.6-9.6-24.533333 0-35.2s24.533333-9.6 35.2 0l81.066666 81.066667 81.066667-81.066667c9.6-9.6 24.533333-9.6 35.2 0s9.6 24.533333 0 35.2L821.333333 770.133333l81.066667 81.066667z"
                  p-id="14345" fill="#d81e06"></path>
              </svg>


              <span>{{ scope.row.type.text }}</span>
            </div>
          </template>

        </el-table-column>
        <el-table-column label="名称" prop="name" />
        <el-table-column label="匹配条件" prop="match">
          <template #default="scope">
            <!-- <el-button size="small" @click="handleEdit(scope.$index, scope.row)">Edit</el-button> -->
            <div class="match">
              <span class="matchtitle">{{ scope.row.matchtitle }}</span>
              <span class="matchspan">{{ scope.row.match }}</span>
            </div>

          </template>
        </el-table-column>

        <el-table-column align="right" width="260px">
          <template #header>
            <el-input v-model="search" placeholder="请输入名称" />
          </template>
          <template #default="scope">
            <el-button style="margin-right: 20px;" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
            <el-button style="margin-right: 30px;" type="danger"
              @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
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
  status: boolean
  type: { icon: string; text: string } // 修改 type 的类型
  name: string
  matchtitle: string
  match: string
  address: string
}

const search = ref('')
const filterTableData = computed(() =>
  displayedData.value.filter(
    (data) =>
      !search.value ||
      data.name.includes(search.value)
  )
)

const tableData = ref<User[]>([
  {
    status: true,
    type: { icon: 'Edit', text: '白名单' },
    name: '网站监控白名单',
    matchtitle: '',
    match: '网站监控服务白名单',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    status: true,
    type: { icon: 'el-icon-success', text: '黑名单' },
    name: '拦截 demo.waf-ce.chaitin.cn: 8080下所有OKLJ蒙为/ inGdex2.html...',
    matchtitle: '',
    match: '复合条件',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    status: true,
    type: { icon: 'el-icon-success', text: '白名单' },
    name: '拦截/index.html下带a参数的流量',
    matchtitle: '路径正则表达式',
    match: '^ /index\htm?(a=1+&a=)',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    status: true,
    type: { icon: 'el-icon-success', text: '白名单' },
    name: '拦截URL完全等于/index.html?b=1的流量',
    matchtitle: '路径完全相等',
    match: '/ index.html ? b = 1',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    status: true,
    type: { icon: 'el-icon-success', text: '白名单' },
    name: '拦截来自192.168.10.1/24的流量',
    matchtitle: '源IPCIDR',
    match: '192.168.10.1/24',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    status: true,
    type: { icon: 'el-icon-success', text: '白名单' },
    name: 'Tom',
    matchtitle: '',
    match: 'dhisajdma',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    status: true,
    type: { icon: 'el-icon-success', text: '白名单' },
    name: 'Tom',
    matchtitle: '',
    match: 'dhisajdma',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    status: true,
    type: { icon: 'el-icon-success', text: '白名单' },
    name: 'Tom',
    matchtitle: '',
    match: 'dhisajdma',
    address: 'No. 189, Grove St, Los Angeles',
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
    fontSize: '16px',
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

.type {
  display: flex;
  align-items: center;

}

.match {
  display: flex;
  flex-direction: column;
}

.matchtitle {
  color: rgb(189, 189, 189);
  margin-bottom: 2px;

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