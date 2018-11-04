var app = new Vue({
    el: ".app",

    data() {
        return {
            test: "hey",
            input: "",

            history: []
        }
    },

    methods: {
        updateColor(color) {
            // CHECK IF SYNTAX IS CORRECT
            $("body").css("background-color", color)

        },

        updateColorHistory(color) {
            for (var i = 0; i < this.history.length; i++) {
                $(".colors").css('background', this.history[i])
            }
            $("body").css("background-color", color)

        }


    },



})