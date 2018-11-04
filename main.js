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

                    this.history.push(rgb)
                    
                }
                
                if(colorsplit.length == 4){

                    //  MAX VALUE FOR A IS 100 SO WE MUST INPUT IN THE JQUERY CSS AS < 1, SO WE DIVIDE BY 100. SO IF A IS 50, THE JQUERY CSS WILL READ AS 0.5
                    var a = colorsplit[3]/100
                    
                    var rgba = 'rgba(' + colorsplit[0] + ',' + colorsplit[1] + ',' + colorsplit[2] + ',' + a + ')'
                    
                    $("body").css("background-color", rgba)

                    console.log(rgba)

                    this.history.push(rgba)

                }

                
            }else{
                this.input = "Wrong!"
            }



            



        }
    }
})