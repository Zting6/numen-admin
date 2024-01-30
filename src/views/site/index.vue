
import { object } from 'vue-types';
<template>
  <div class="outer">
    <div class="main">
      <el-table :data="filterTableData" style="width: 100%" size="large" :row-style="rowStyle">

        <el-table-column label="域名" prop="name" width="600px">

          <template #default="scope">
            <div class="name">

              <svg v-if="scope.row.name.text == 'securebanking.com' || scope.row.name.text == 'protectedshopping.org'"
                t="1706515455341" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="4306" width="26" height="26">
                <path
                  d="M909.989 343.281c-21.76-51.446-52.904-97.643-92.568-137.307-39.663-39.664-85.86-70.808-137.306-92.568-53.28-22.536-109.858-33.962-168.164-33.962S397.067 90.87 343.787 113.406c-51.446 21.76-97.643 52.904-137.307 92.568-39.664 39.664-70.808 85.86-92.568 137.307-22.536 53.28-33.962 109.858-33.962 168.164s11.426 114.884 33.962 168.164c21.76 51.445 52.904 97.643 92.568 137.306 39.664 39.664 85.86 70.809 137.307 92.568 53.28 22.535 109.858 33.962 168.164 33.962s114.884-11.427 168.164-33.962c51.445-21.76 97.643-52.904 137.306-92.568 39.664-39.663 70.809-85.86 92.568-137.306 22.535-53.28 33.962-109.858 33.962-168.164s-11.427-114.884-33.962-168.164zM543.951 376.03c17.57-0.243 35.095-0.683 52.536-1.368a1990.762 1990.762 0 0 0 91.131-5.678c10.157 34.378 16.643 71.314 19.389 110.46H543.951V376.03z m0-64.069V163.41c17.617 12.176 39.372 29.845 61.074 54.197 23.42 26.28 43.109 56.138 58.784 89.019-41.937 3.147-82.117 4.783-119.858 5.335z m-64-144.763v144.705a2038.572 2038.572 0 0 1-103.41-4.309 1929.6 1929.6 0 0 1-11.183-0.786c15.195-31.915 34.175-60.991 56.676-86.711 20.284-23.185 40.722-40.49 57.917-52.899zM370.842 371.354a2124.301 2124.301 0 0 0 109.109 4.606v103.484H322.25c2.742-39.079 9.208-75.96 19.335-110.285 9.453 0.776 19.21 1.512 29.257 2.195z m-112.731 108.09H145.342c3.916-45.757 16.208-89.778 36.139-130.276 20.257 3.578 52.836 8.759 95.407 13.641-9.902 36.699-16.182 75.682-18.777 116.635z m-0.859 64c1.975 39.144 9.712 78.242 23.101 116.799-44.093 4.976-77.797 10.319-98.621 13.992-20.08-40.64-32.458-84.841-36.39-130.792h111.91z m64.098 0h158.601v104.048c-36.37 0.602-72.818 2.13-109.109 4.601-8.41 0.573-16.612 1.182-24.609 1.821-14.322-36.523-22.659-73.543-24.883-110.47z m158.601 168.103v131.712c-16.974-15.877-36.574-35.962-56.038-59.735-18.064-22.064-33.892-44.698-47.379-67.668a2038.38 2038.38 0 0 1 103.417-4.309z m64 136.665V711.487c34.387 0.503 70.782 1.903 108.68 4.527-13.467 22.915-29.263 45.496-47.286 67.509-21.547 26.32-43.262 48.119-61.394 64.689z m52.536-199.426a2063.187 2063.187 0 0 0-52.536-1.384V543.444h163.958c-2.227 36.975-10.582 74.045-24.939 110.615a1994.972 1994.972 0 0 0-86.483-5.273z m175.521-105.342H878.56c-3.928 45.898-16.283 90.051-36.322 130.652a1822.84 1822.84 0 0 0-93.476-13.439c13.478-38.691 21.264-77.929 23.246-117.213z m-0.859-64c-2.605-41.111-8.924-80.238-18.891-117.061a1821.491 1821.491 0 0 0 90.233-13.075c19.89 40.46 32.158 84.432 36.07 130.136H771.149z m1.017-228.215a373.188 373.188 0 0 1 34.046 39.155 1772.853 1772.853 0 0 1-75.117 9.98c-19.529-46.785-45.825-88.91-78.291-125.338a423.863 423.863 0 0 0-5.386-5.927c46.185 18.263 88.573 45.955 124.748 82.13zM384.81 165.923a420.788 420.788 0 0 0-8.355 9.102c-32.552 36.525-58.904 78.775-78.449 125.71-32.357-3.484-59.48-7.244-80.226-10.469a373.386 373.386 0 0 1 33.956-39.037c38.338-38.338 83.654-67.152 133.074-85.306zM251.736 771.659a373.444 373.444 0 0 1-33.584-38.548c22.526-3.498 52.529-7.614 88.626-11.328 18.229 35.542 41.31 70.356 68.867 103.808a678.068 678.068 0 0 0 35.727 39.995c-59.757-16.875-114.524-48.814-159.636-93.927z m368.249 91.745a677.032 677.032 0 0 0 33.629-37.814c27.469-33.344 50.487-68.043 68.689-103.466a1780.315 1780.315 0 0 1 83.528 10.88 373.34 373.34 0 0 1-33.665 38.654c-43.23 43.232-95.324 74.373-152.181 91.746z"
                  fill="#13c2c2" p-id="4307"></path>
              </svg>

              <svg v-else t="1706515534183" class="icon" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="4512" width="26" height="26">
                <path
                  d="M755.851 316.833h178.396c23.895 53.16 38.215 111.397 40.613 172.866H770.17c-0.866-64.983-6.239-122.225-14.319-172.866zM677.89 72.239c102.327 39.774 186.317 115.03 238.967 210.026H750.013c-18.933-96.76-47.673-165.527-72.123-210.026zM528.467 282.262V40.965c36.799 1.614 72.486 7.432 106.641 17.002 25.928 43.56 59.33 116.32 80.43 224.297H528.467v-0.002zM301.474 697.133c-8.08-50.677-13.682-107.591-14.516-172.865h206.929v172.865H301.474z m-0.338-380.3h192.751v172.866H286.762c0.872-65.035 6.289-122.205 14.374-172.866z m86.56-259.626c34.08-9.15 69.504-15.008 106.191-16.185v241.24H306.836c21.222-108.583 54.876-181.59 80.86-225.055zM100.413 282.262c53.51-96.551 140.132-172.222 244.799-211.446-24.613 44.472-53.77 113.647-72.9 211.446H100.415zM252.18 489.699H43.133C45.44 428.27 59.253 369.89 83.1 316.833h183.412c-8.084 50.653-13.463 107.888-14.332 172.866z m14.732 207.434H84.414C60.471 643.904 45.143 585.944 42.88 524.268h209.466c0.833 65.277 6.478 122.145 14.567 172.865z m5.672 34.57c19.269 98.776 48.836 167.876 73.604 211.833-105.044-39.093-191.706-115.03-245.281-211.833h171.677z m221.304 0v241.243c-36.276-1.164-71.323-6.899-105.052-15.861-26.03-42.662-59.878-116.005-81.302-225.382h186.354z m220.951 0c-21.294 108.72-54.868 181.816-80.84 224.582-33.764 9.37-69.196 14.422-105.532 16.034V731.703h186.372zM528.467 524.268h206.928c-0.833 65.282-6.44 122.183-14.52 172.865H528.468V524.268zM735.59 489.7H528.467V316.833h192.75c8.087 50.657 13.499 107.828 14.374 172.866z m34.42 34.57h204.477c-2.285 61.626-17.5 119.61-41.323 172.864h-177.72c8.085-50.717 13.733-107.579 14.567-172.865z m146.596 207.434C864.095 827.09 779.71 902.39 676.938 942.076c24.616-44.013 53.802-112.617 72.872-210.373h166.797z"
                  p-id="4513" fill="#8a8a8a"></path>
              </svg>




              <span class="nametext">{{ scope.row.name.text }}</span>
            </div>
          </template>

        </el-table-column>
        <el-table-column label="端口">
          <template #default="scope">
            <span class="port">{{ scope.row.port }}</span>
          </template>
        </el-table-column>
        <el-table-column label="资源数" prop="resource" />

        <el-table-column label="运行模式" width="160px">

          <template #default="scope">
            <el-button type="primary" @click="handleEdit(scope.$index, scope.row)">防护</el-button>

          </template>
        </el-table-column>

        <el-table-column label="防护情况" prop="station">
          <template #default="scope">
            <!-- <el-button size="small" @click="handleEdit(scope.$index, scope.row)">Edit</el-button> -->
            <div class="station">
              <div class="request">
                <span class="title">请求</span>
                <span>{{ scope.row.stationtitle }}</span>
              </div>
              <div class="request">
                <span class="title">拦截</span>
                <span>{{ scope.row.station }}</span>
              </div>


            </div>

          </template>
        </el-table-column>



        <el-table-column align="right" width="260px">
          <template #header>
            <el-input v-model="search" placeholder="请输入名称" />
          </template>
          <template #default="scope">
            <svg style="margin-left: 80px;" t="1706516600692" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
              p-id="5614" width="28" height="28">
              <path
                d="M511.87 113.99c54.03 0 106.41 10.57 155.67 31.4 47.62 20.14 90.41 49 127.17 85.76 36.76 36.76 65.61 79.55 85.76 127.17 20.84 49.26 31.4 101.64 31.4 155.67s-10.57 106.41-31.4 155.67c-20.14 47.62-48.99 90.41-85.76 127.17-36.76 36.76-79.55 65.61-127.17 85.76-49.26 20.84-101.64 31.4-155.67 31.4s-106.41-10.57-155.67-31.4c-47.62-20.14-90.41-48.99-127.17-85.76-36.76-36.76-65.61-79.55-85.76-127.17-20.84-49.26-31.4-101.64-31.4-155.67s10.57-106.41 31.4-155.67c20.14-47.62 49-90.41 85.76-127.17 36.76-36.76 79.55-65.61 127.17-85.76 49.26-20.84 101.63-31.4 155.67-31.4m0-80c-265.1 0-480 214.9-480 480s214.9 480 480 480 480-214.9 480-480-214.91-480-480-480z"
                fill="#13c2c2" p-id="5615"></path>
              <path d="M344.45 513.99m-40 0a40 40 0 1 0 80 0 40 40 0 1 0-80 0Z" fill="#13c2c2" p-id="5616"></path>
              <path d="M681.55 513.99m-40 0a40 40 0 1 0 80 0 40 40 0 1 0-80 0Z" fill="#13c2c2" p-id="5617"></path>
              <path d="M513 513.99m-40 0a40 40 0 1 0 80 0 40 40 0 1 0-80 0Z" fill="#13c2c2" p-id="5618"></path>
            </svg>
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
  name: { icon: string; text: string } // 修改 type 的类型
  port: string
  resource: number
  stationtitle: string
  station: string
}

const search = ref('')
const filterTableData = computed(() =>
  displayedData.value.filter(
    (data) =>
      !search.value ||
      data.name.text.includes(search.value)
  )
)

const tableData = ref<User[]>([
  {
    name: { icon: 'Edit', text: 'securebanking.com' },
    port: '443',
    resource: 6782,
    stationtitle: '5464',
    station: '21'
  },
  {
    name: { icon: 'Edit', text: 'safemailserver.net' },
    port: '25',
    resource: 452,
    stationtitle: '34353',
    station: '12'
  },
  {
    name: { icon: 'Edit', text: 'protectedshopping.org' },
    port: '8443',
    resource: 46,
    stationtitle: '1313',
    station: '43'
  },
  {
    name: { icon: 'Edit', text: 'firewallprotection.biz' },
    port: '8080',
    resource: 4654,
    stationtitle: '34535',
    station: '31'
  },
  {
    name: { icon: 'Edit', text: 'secureloginpage.info' },
    port: '443',
    resource: 152,
    stationtitle: '35454',
    station: '32'
  },
  {
    name: { icon: 'Edit', text: 'safedatatransfer.co' },
    port: '22',
    resource: 52,
    stationtitle: '7854',
    station: '31'
  },
  {
    name: { icon: 'Edit', text: 'securevpnconnection.net' },
    port: '8090',
    resource: 132,
    stationtitle: '37455',
    station: '42'
  },
  {
    name: { icon: 'Edit', text: ' threatmonitoring.online' },
    port: '8081',
    resource: 51,
    stationtitle: '75244',
    station: '35'
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
    fontSize: '18px',
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

.name {
  display: flex;
  align-items: center;

}

.nametext {
  font-size: 20px;
  margin-left: 10px;
  font-weight: 400;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.port {
  color: #13c2c2;
  font-weight: 600;
}

.station {
  display: flex;
  flex-direction: column;
}

.request {
  display: flex;
}

.title {
  color: rgb(143, 143, 143);
  margin-bottom: 2px;
  margin-right: 5px;
}



.icon {
  margin-right: 5px;
}

.pagination {
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}</style>