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
import CategoryApi from 'api/main/category/index'
import { Promise } from 'q';
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
            columns: ['品类', '商品数'],
            rows: []
          }
        };
    },

    created() {
      this.getdata()
    },

    methods: {
      getdata() {
        Promise.all([CategoryApi.CategoryData(), CategoryApi.List()]).then(data => {
          console.log(data)
          data[0].list.forEach(item => {
            data[1].list.forEach(it => {
              if(item.category == it.category){
                let opt = { '品类': it.name, '商品数': item.number }
                this.chartData.rows.push(opt)
              }
            })
          })
        })
      }
    }
}
</script>
<style lang='scss' scoped>
</style>