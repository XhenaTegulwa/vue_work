Vue.createApp({
    data() {
        return {
            light: true
        }
    },
    methods: {
        change_bol_value() {
            this.light = !this.light;
        }
    }
}).mount('#bulb')