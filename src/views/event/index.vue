
import { object } from 'vue-types';
<template>
  <div class="outer">
    <div class="main">
      <el-table :data="filterTableData" style="width: 100%" size="large" :row-style="rowStyle">

        <el-table-column label="攻击IP" prop="ip" width="600px">

          <template #default="scope">
            <div class="ip">
              <span>{{ scope.row.ip.text }}</span>
              <span class="loc">（{{ scope.row.ip.loc }}）</span>
            </div>
          </template>

        </el-table-column>

        <el-table-column label="日志数目" width="320px">

          <template #default="scope">
            <div class="dairy">
              <div class="intercept">
                <div class="interceptTitle">拦截</div>
                <div class="num">{{ scope.row.intercept }}</div>
              </div>
              <div class="watch">
                <div class="watchTitle">观察</div>
                <div class="num">{{ scope.row.watch }}</div>
              </div>
            </div>
          </template>

        </el-table-column>

        <el-table-column label="持续时间" prop="time" />

        <el-table-column label="开始时间" prop="begintime">
          <template #default="scope">

            <div class="begintime">
              <!-- <span>{{ nowtime }}</span> -->
              <span>{{ scope.row.begintime }}</span>
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
  ip: { text: string; loc: string }
  intercept: number
  watch: number
  time: string
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
    intercept: 6,
    watch: 0,
    time: '少于1分钟',
    begintime: '2024-02-06 08:02:03',
  },
  {
    ip: { text: '118.31.166.49', loc: '浙江省' },
    intercept: 2,
    watch: 0,
    time: '少于1分钟',
    begintime: '2024-02-06 09:11:10',
  },
  {
    "ip": { "text": "203.117.231.45", "loc": "新加坡" },
    "intercept": 8,
    "watch": 0,
    "time": "不到1分钟",
    "begintime": "2024-02-06 10:30:45"
  },
  {
    "ip": { "text": "172.56.78.91", "loc": "加利福尼亚州" },
    "intercept": 4,
    "watch": 0,
    "time": "不到1分钟",
    "begintime": "2024-02-06 14:45:22"
  },
  {
    "ip": { "text": "124.78.39.102", "loc": "上海市" },
    "intercept": 5,
    "watch": 0,
    "time": "不到1分钟",
    "begintime": "2024-02-07 09:55:30"
  },
  {
    "ip": { "text": "82.45.76.98", "loc": "巴黎" },
    "intercept": 3,
    "watch": 0,
    "time": "不到1分钟",
    "begintime": "2024-02-07 14:05:15"
  },
  {
    "ip": { "text": "95.128.45.67", "loc": "莫斯科" },
    "intercept": 3,
    "watch": 0,
    "time": "不到1分钟",
    "begintime": "2024-02-07 16:20:12"
  },
  {
    "ip": { "text": "120.67.89.123", "loc": "广州市" },
    "intercept": 6,
    "watch": 0,
    "time": "不到1分钟",
    "begintime": "2024-02-08 14:20:58"
  },
  {
    "ip": { "text": "202.45.76.98", "loc": "成都市" },
    "intercept": 3,
    "watch": 0,
    "time": "不到1分钟",
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

.loc {
  color: rgb(169, 169, 169);
}

.dairy {
  display: flex;

}


.intercept {
  display: flex;
  align-items: center;
  margin-right: 20px;


  .interceptTitle {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px 0 0 5px;
    width: 50px;
    height: 30px;
    color: red;
    background-color: #ffd1da;
  }

  .num {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0 5px 5px 0;
    width: 26px;
    height: 30px;
    color: white;
    background-color: red;
  }
}



.watch {
  display: flex;
  align-items: center;

  .watchTitle {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px 0 0 5px;
    width: 50px;
    height: 30px;
    color: #13c2c2;
    background-color: #ccf2ed;
  }

  .num {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0 5px 5px 0;
    width: 26px;
    height: 30px;
    color: white;
    background-color: #13c2c2;
  }
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