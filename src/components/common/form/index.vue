<script>
export default {
    name: 'mms-form',
    props: {
        items: {
            type: Array,
            default: () => []
        },
        formData: {
            type: Object,
            default: () => {}
        }
    },
    render(h) {
        const children = this.items.map(item => {
            const isExist = this.$slots.hasOwnProperty(item.prop)
            let node = null
            if (isExist) {
                node = this.$slots[item.prop]
            } else if (item.component === 'el-select') {
                const optionList = item.data.options ? item.data.options : []
                const options = optionList.map(t => {
                    return (
                        <el-option label={t.label} value={t.value}></el-option>
                    )
                })
                node = <el-select vModel={this.formData[item.prop]}>{options}</el-select>
            } else if(item.component === 'el-radio') {
                const radioList = item.data.radios ? item.data.radios : []
                const radios = radioList.map(radio => {
                    return (
                        <el-radio label={radio.value}>{radio.label}</el-radio>
                    )
                })
                node = <el-radio-group vModel={this.formData[item.prop]}>{radios}</el-radio-group>
            } else {
                node = <item.component vModel={this.formData[item.prop]}></item.component>
            }

            if(item.attrs) {
                this.setNodeAttrs(node, item.attrs)
            }
            return (
                <el-form-item 
                    label={item.label}
                    prop={item.prop}>
                    {node}
                </el-form-item>
            )
        })
        return (
            <div>
                {children}
            </div>
        )
    },
    methods: {
        setNodeAttrs(node, attrs) {
            if (Array.isArray(node)) {
                node.map(item => {
                    let dataAttrs = item.data.attrs
                    let propsData = node.componentOptions.propsData ? node.componentOptions.propsData : {}

                    item.data.attrs = dataAttrs ? Object.assign(dataAttrs, attrs) : Object.assign({}, attrs)
                    item.componentOptions.propsData = propsData ? Object.assign(propsData, attrs) : Object.assign({}, attrs)
                })
            } else {
                let dataAttrs = node.data.attrs
                let propsData = node.componentOptions.propsData ? node.componentOptions.propsData : {}

                node.data.attrs = dataAttrs ? Object.assign(dataAttrs, attrs) : Object.assign({}, attrs)
                node.componentOptions.propsData = propsData ? Object.assign(propsData, attrs) : Object.assign({}, attrs)
            }
        }
    }
}
</script>