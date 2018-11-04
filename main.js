var app = new Vue({
    el: ".app",

    data(){
        return{
            test: "hey",
            input: "",
        }
    },

    methods: {
        updateColor(){
            console.log(this.input)
            document.getElementById("body").style.backgroundColor = this.input
        }
    }
})