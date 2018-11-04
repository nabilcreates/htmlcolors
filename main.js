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

            if (color.indexOf(',') >= 0) {
                var colorsplit = color.split(',')
                var inputcolor = 'rgb(' + colorsplit[0] + ',' + colorsplit[1] + ',' + colorsplit[2] + ')'
                console.log(inputcolor)
                $("body").css("background-color", inputcolor)
                this.input = ""
                if (this.history.indexOf(color) < 0) {
                    this.history.push(color)
                }
            }else{
                this.input = "Wrong!"
            }



            



        }
    }
})