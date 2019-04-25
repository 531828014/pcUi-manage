<!--  -->
<template>
    <el-table
        class="mms-table normal"
        ref="table"
        :data="data"
        :height="height"
        :max-height="maxHeight"
        :stripe="stripe"
        :border="border"
        :fit="fit"
        :show-header="showHeader"
        :highlight-current-row="highlightCurrentRow"
        :row-class-name="rowClassName"
        :row-style="rowStyle"
        :cell-class-name="cellClassName"
        :cell-style="cellStyle"
        :header-row-class-name="headerRowClassName"
        :header-row-style="headerRowStyle"
        :header-cell-class-name="headerCellClassName"
        :header-cell-style="headerCellStyle"
        :row-key="rowKey"
        :empty-text="emptyText"
        :default-expand-all="defaultExpandAll"
        :expand-row-keys="expandRowKeys"
        :tooltip-effect="tooltipEffect"
        :show-summary="showSummary"
        :sum-text="sumText"
        :summary-method="summaryMethod"
        :span-method="spanMethod"
        :select-on-indeterminate="selectOnIndeterminate"
        :indent="indent"
        :lazy="lazy"
        :load="load"
        @select="select"
        @select-all="selectAll"
        @selection-change="selectionChange"
        @cell-mouse-enter="cellMouseEnter"
        @cell-mouse-leave="cellMouseLeave"
        @cell-click="cellClick"
        @cell-dblclick="cellDblclick"
        @row-click="rowClick"
        @row-contextmenu="rowContextmenu"
        @row-dblclick="rowDblclick"
        @header-click="headerClick"
        @sort-change="sortChange"
        @filter-change="filterChange"
        @current-change="currentChange"
        @header-dragend="headerDragend"
        @expand-change="expandChange">
        <el-table-column v-if="selectable" type="selection"></el-table-column>
        <el-table-column v-if="showIndex" type="index"></el-table-column>
        <el-table-column v-if="expand" type="expand">
            <template slot-scope="scope">
                <slot name="expand" :scope="scope"></slot>
            </template>
        </el-table-column>
        <el-table-column
            v-for="(col, index) in columns" 
            :key="`${col.prop}${index}`"
            :type="col.type"
            :index="col.index"
            :column-key="col.columnKey"
            :label="col.label"
            :prop="col.prop"
            :width="col.width"
            :min-width="col.minWidth"
            :fixed="col.fixed"
            :render-header="col.renderHeader"
            :sortable="col.sortable"
            :sort-method="col.sortMethod"
            :sort-by="col.sortBy"
            :sort-orders="col.sortOrders"
            :resizable="col.resizable"
            :formatter="col.formatter"
            :show-overflow-tooltip="col.showOverflowTooltip"
            :align="col.align"
            :header-align="col.headerAlign"
            :class-name="col.className"
            :label-class-name="col.labelClassName"
            :selectable="col.selectable"
            :reserve-selection="col.reserveSelection"
            :filters="col.filters"
            :filter-placement="col.filterPlacement"
            :filter-multiple="col.filterMultiple"
            :filter-method="col.filterMethod"
            :filtered-value="col.filteredValue">
            <template slot-scope="scope">
                <slot :name="col.scopeName ? col.scopeName : col.prop" :scope="scope">
                    {{scope.row[col.prop]}}
                </slot>
            </template>
        </el-table-column>
    </el-table>
</template>
<script>
export default {
    name: 'mms-table',
    props: {
        data: {
            type: Array,
            default: () => []
        },
        columns: {
            type: Array,
            default: () => []
        },
        showIndex: {
            type: Boolean,
            default: true
        },
        selectable: {
            type: Boolean,
            default: false
        },
        expand: {
            type: Boolean,
            default: false
        },
        height: {
            type: [Number, String]
        },
        maxHeight: {
            type: [Number, String]
        },
        stripe: {
            type: Boolean,
            default: true
        },
        border: {
            type: Boolean,
            default: false
        },
        fit: {
            type: Boolean,
            default: true
        },
        showHeader: {
            type: Boolean,
            default: true
        },
        highlightCurrentRow: {
            type: Boolean,
            default: true
        },
        rowClassName: {
            type: [Function, String]
        },
        rowStyle: {
            type: [Function, Object]
        },
        cellClassName: {
            type: [Function, String]
        },
        cellStyle: {
            type: [Function, Object]
        },
        headerRowClassName: {
            type: [Function, String]
        },
        headerRowStyle: {
            type: [Function, Object]
        },
        headerCellClassName: {
            type: [Function, String]
        },
        headerCellStyle: {
            type: [Function, Object]
        },
        rowKey: {
            type: [Function, String]
        },
        emptyText: {
            type: String,
            default: '暂无数据'
        },
        defaultExpandAll: {
            type: Boolean,
            default: false
        },
        expandRowKeys: {
            type: Array
        },
        tooltipEffect: {
            type: String,
            default: 'light'
        },
        showSummary: {
            type: Boolean,
            default: false
        },
        sumText: {
            type: String,
            default: '合计'
        },
        summaryMethod: {
            type: Function
        },
        spanMethod: {
            type: Function
        },
        selectOnIndeterminate: {
            type: Boolean,
            default: true
        },
        indent: {
            type: Number,
            default: 16
        },
        lazy: {
            type: Boolean
        },
        load: {
            type: Function
        }
    },
    mounted() {
        console.log(this.$scopedSlots)
    },
    methods: {
        select(selection, row) {
            this.$emit('select', selection, row)
        },
        selectAll(selection) {
            this.$emit('select-all', selection)
        },
        selectionChange(selection) {
            this.$emit('selection-change', selection)
        },
        cellMouseEnter(row, column, cell, event) {
            this.$emit('cell-mouse-enter', row, column, cell, event)
        },
        cellMouseLeave(row, column, cell, event) {
            this.$emit('cell-mouse-leave', row, column, cell, event)
        },
        cellClick(row, column, cell, event) {
            this.$emit('cell-click', row, column, cell, event)
        },
        cellDblclick(row, column, cell, event) {
            this.$emit('cell-dblclick', row, column, cell, event)
        },
        rowClick(row, column, event) {
            this.$emit('row-click', row, column, event)
        },
        rowContextmenu(row, column, event) {
            this.$emit('row-contextmenu', row, column, event)
        },
        rowDblclick(row, column, event) {
            this.$emit('row-dblclick', row, column, event)
        },
        headerClick(column, event) {
            this.$emit('header-click', column, event)
        },
        headerContextmenu(column, event) {
            this.$emit('header-contextmenu', column, event)
        },
        sortChange({column, prop, order}) {
            this.$emit('sort-change', {column, prop, order})
        },
        filterChange(filters) {
            this.$emit('filter-change', filters)
        },
        currentChange(currentRow, oldCurrentRow) {
            this.$emit('current-change', currentRow, oldCurrentRow)
        },
        headerDragend(newWidth, oldWidth, column, event) {
            this.$emit('header-dragend', newWidth, oldWidth, column, event)
        },
        expandChange(row, expandedRows) {
            this.$emit('expand-change', row, expandedRows)
        },
        clearSelection() {
            this.$refs.table.clearSelection()
        },
        toggleRowSelection(row, selected) {
            this.$refs.table.toggleRowSelection(row, selected)
        },
        toggleAllSelection() {
            this.$refs.table.toggleAllSelection()
        },
        toggleRowExpansion(row, expanded) {
            this.$refs.table.toggleRowExpandsion(row, expanded)
        },
        setCurrentRow(row) {
            this.$refs.table.setCurrentRow(row)
        },
        clearSort() {
            this.$refs.table.clearSort()
        },
        clearFilter(columnKey) {
            this.$refs.table.clearFilter(columnKey)
        },
        doLayout() {
            console.log('111')
            this.$refs.table.doLayout()
        },
        sort(prop, order) {
            this.$refs.table.sort(prop, order)
        }
    }
}

</script>
<style lang='scss' scoped>
.mms-table{
    & >>> .el-form-item{
        margin-bottom: 0;
    }
    & >>> .required-field > .cell:after{
        content: '*';
        color: #f56c6c;
        margin-right: 4px;
    }
}
</style>