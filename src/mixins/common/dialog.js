export default {
    data() {
        return {
            dialogVisible: false,
            dialogName: ''
        }
    },
    methods: {
        show() {
            this.dialogVisible = true
        },
        hiden() {
            this.dialogVisible = false
        }
    }
}