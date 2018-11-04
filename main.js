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

            // THE CHAR FOR SPLITTING
            var splitchar = '-'
            
            // CHECK IF SYNTAX IS CORRECT
            if (color.indexOf(splitchar) >= 0) {

                // SPLIT ACCORDING TO SPLITCHAR AND RETURNS ARRAY
                var colorsplit = color.split(splitchar)

                // CONSOLE LOG THE SPLITTED LENGTH
                console.log(colorsplit.length)

                // IF LENGTH IS == 3 (IN OTHER WORDS, ITS RGB)
                if(colorsplit.length == 3){

                    // VAR RGB TO GIVE TO THE JQUERY CSS
                    var rgb = 'rgb(' + colorsplit[0] + ',' + colorsplit[1] + ',' + colorsplit[2] + ')'

                    // APPLY THE BG COLOR WITH RGB
                    $("body").css("background-color", rgb)

                    // LOG THE STRING OUT
                    console.log(rgb)

                    // PUSH IT TO AN ARRAY
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

        },

        updateColorHistory(color){

            $("body").css("background-color", color)
            
        }
    }
})