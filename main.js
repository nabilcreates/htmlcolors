var app = new Vue({
    el: ".app",

    data() {
        return {
            input: "",
            history: []
        }
    },

    methods: {
        updateColor(color) {
            $("body").css("background-color", color)
            
            // NOT FOUND
            if(this.history.indexOf(color) < 0){
                this.history.push(color)
            }
            
        },
    },



})