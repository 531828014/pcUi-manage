<!--  -->
<template>
    <div>
      <el-row>
      <el-col :span="12">
        <ve-pie :data="chartData"></ve-pie>
      </el-col>
      <el-col :span="12">
        <ve-histogram
          :data="saleData"
          :extend="chartExtend">
        </ve-histogram>
      </el-col>
      </el-row>
    </div>
</template>

<script>
export default {
    data() {
      this.chartExtend = {
        series (v) {
          v.forEach(i => {
            i.barWidth = 10
          })
          return v
        },
        tooltip (v) {
          v.trigger = 'none'
          return v
        }
      }
        return {
          saleData: {
            columns: ['日期', '成本', '利润'],
            rows: [
                { '日期': '1月1日', '成本': 15, '利润': 12 },
                { '日期': '1月2日', '成本': 12, '利润': 25 },
                { '日期': '1月3日', '成本': 21, '利润': 10 },
                { '日期': '1月4日', '成本': 41, '利润': 32 },
                { '日期': '1月5日', '成本': 31, '利润': 30 },
                { '日期': '1月6日', '成本': 71, '利润': 55 }
              ]
          },
          chartData: {
            columns: ['日期', '访问用户'],
            rows: [
                { '日期': '1/1', '访问用户': 1393 },
                { '日期': '1/2', '访问用户': 3530 },
                { '日期': '1/3', '访问用户': 2923 },
                { '日期': '1/4', '访问用户': 1723 },
                { '日期': '1/5', '访问用户': 3792 },
                { '日期': '1/6', '访问用户': 4593 }
              ]
          }
        };
    },

    components: {},

    computed: {},

    methods: {}
}

</script>
<style lang='scss' scoped>
</style>