<!--  -->
<template>
    <div class="search-add">
        <a-row>
            <a-col :span="6">
                <span v-if="searchAddList.buttons">
                    <a-button 
                        class="normal btn"
                        v-for="(bt, index) in searchAddList.buttons"
                        :key="index"
                        :type="bt.type"
                        v-show="bt.show"
                        @click="btnClick(bt.onClickName)">
                        <!-- <a-icon :type="bt.icon" /> -->
                        {{bt.text}}
                        </a-button>
                </span>
            </a-col>
            <a-col class="normal" :span="10">
                <div v-if="searchAddList.time">
                    <div v-if="searchAddList.time.show">
                        <label class="label">{{searchAddList.time.timeLabel}}:</label>
                        <a-range-picker
                            class="normal"
                            :placeholder="datePlace"
                            :ranges="{ 今天: [moment(), moment()], '当月': [moment(), moment().endOf('month')] }"
                            showTime
                            format="YYYY/MM/DD"
                            @change="onChange"
                            />
                    </div>
                </div>
            </a-col>
            <a-col :span="8">
                <a-input-group compact class="normal" v-if="searchAddList.searchShow">
                    <a-select 
                        ref="selectOption"
                        :defaultValue="setdefaultValue"
                        @change="onchange">
                        <a-select-option
                            v-for="(item, index) in searchAddList.option"
                            :key="index"
                            :value="item.value">{{item.text}}</a-select-option>
                    </a-select>
                    <a-input-search
                        style="width: 60%"
                        placeholder="请输入搜索文本"
                        @search="onSearch"
                        enterButton
                        />
                </a-input-group>
            </a-col>
        </a-row>
    </div>
</template>
<script>

import moment from 'moment';
export default {
    data() {
        return {
            datePlace: ['开始日期', '结束日期'],
            returnObject: {
                optionValue: '', //选择的搜索项
                searchText: '', //搜索文本
                From: '', //开始时间
                to: '', //结束时间
            },
        };
    },
    props: ['searchAddList'],
    components: {},

    computed: {
        setdefaultValue() {
            if(this.searchAddList.option[0]) {
                return this.searchAddList.option[0].value
            }else {
                return '暂无数据'
            }
        }
    },
    methods: {
        onSearch(value) {
            if(this.searchAddList.option[0] && this.returnObject.optionValue == '') {
                this.returnObject.optionValue = this.searchAddList.option[0].value
            }
            this.returnObject.searchText = value
            this.$emit('onSearchList', this.returnObject)
            console.log(this.returnObject)
        },
        onchange(value) {
            this.returnObject.optionValue = value
        },
        moment,
        onChange(dates, dateStrings) {
            this.returnObject.From = dateStrings[0]
            this.returnObject.to = dateStrings[1]
        },
        btnClick(onClickName) {
            this.$emit(`${onClickName}`)
        }
    }
}

</script>
<style lang='scss' scoped>
@import 'sass/index.scss';
.search-add{
    .btn, .label{
        margin-right: $con-spacing-row-sm;
    }
}
</style>