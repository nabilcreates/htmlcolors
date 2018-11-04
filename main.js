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

                console.log(colorsplit.length)

                if(colorsplit.length == 3){

                    var rgb = 'rgb(' + colorsplit[0] + ',' + colorsplit[1] + ',' + colorsplit[2] + ')'

                    $("body").css("background-color", rgb)

                    console.log(rgb)
                    
                }
                
                if(colorsplit.length == 4){

                    var rgba = 'rgba(' + colorsplit[0] + ',' + colorsplit[1] + ',' + colorsplit[2] + ',' + colorsplit[3] + ')'
                    
                    $("body").css("background-color", rgba)

                    console.log(rgba)
                }

                
            }else{
                this.input = "Wrong!"
            }



            



        }
    }
})