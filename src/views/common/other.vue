
import { object } from 'vue-types';
<template>
  <div class="outer">
    <div class="main">
      <el-table :data="filterTableData" style="width: 100%" size="large" :row-style="rowStyle">



        <el-table-column label="名称" width="600px" prop="name" />
        <el-table-column label="内容" width="700px" prop="content" />


        <el-table-column width="300px">

          <template #default="scope">
            <div class="button">
              <el-text class="mx-1" type="primary">更新</el-text>
              <el-text class="mx-1" type="info">编辑</el-text>
              <el-text class="mx-1" type="danger">删除</el-text>
            </div>
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

  name: string
  content: string

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
    name: '内部测试环境',
    content: '192.168.0.0/16等，共65536个',
  },
  {
    name: '安全审计白名单',
    content: '10.0.0.1, 10.0.0.2, 10.0.0.3等，共20个',
  },
  {
    name: 'VPN服务器IP',
    content: '172.16.0.0/24, 172.16.1.0/24等，共256个',
  },
  {
    name: '全球CDN节点',
    content: '更新时间：2024-02-06 08:02:00',
  },
]);




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

.button {
  display: flex;
  justify-content: space-evenly;
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