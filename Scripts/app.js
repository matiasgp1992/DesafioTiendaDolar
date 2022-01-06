const app= Vue.createApp({
    data(){
        return {
            time: 60,
            timeSelec: "",
            timeSelec2: "",
            blockBtn: false,

            purpleCount: 0,
            blueCount: 0,
            greenCount: 0,
            yellowCount: 0,
            orangeCount: 0,
            redCount: 0,
            greyCount: 0,
            whiteCount: 0,

            colorSelec: "",
            
            numberRandom: ""
        }
    },
    created(){
        this.randomNum();
        this.timer();
        this.checkInit()
    },
    methods:{
        timer(){
            let timeValue= setInterval(() => {
                this.time = this.time - 1;
                if(this.time === this.numberRandom){
                    this.randomPicker()
                }
                if (this.time <= 0) {
                  clearInterval(timeValue);
                    this.colorSelec="Grey"
                    this.greyCount++
                    localStorage.setItem("grey", this.greyCount)
                    this.blockBtn= !this.blockBtn
                }
            }, 1000);
        },
        click(){
            this.timeSelec= this.time
            this.assignColor(this.timeSelec)
            this.blockBtn= true
            localStorage.setItem("clicked", "true")
        },
        click2(){
            this.timeSelec2= this.time
            this.assignColor(this.timeSelec2)
        },
        assignColor(time){
            if(time <= 60 && time >= 52){
                this.colorSelec= "Purple"
                this.purpleCount++
                localStorage.setItem("purple", this.purpleCount)
            } else if(time <= 51 && time >= 42){
                this.colorSelec= "Blue"
                this.blueCount++
                localStorage.setItem("blue", this.blueCount)
            } else if(time <= 41 && time >= 32){
                this.colorSelec= "Green"
                this.greenCount++
                localStorage.setItem("green", this.greenCount)
            } else if(time <= 31 && time >= 22){
                this.colorSelec= "Yellow"
                this.yellowCount++
                localStorage.setItem("yellow", this.yellowCount)
            } else if (time <= 21 && time >= 12){
                this.colorSelec= "Orange"
                this.orangeCount++
                localStorage.setItem("orange", this.orangeCount)
            } else if(time <=11 && time >= 1){
                this.colorSelec= "Red"
                this.redCount++
                localStorage.setItem("red", this.purpleCount)
            } else if (time == 0){
                /* modal show with no call */
                let modal= this.$refs.modalGrey
                modal.style.display= "block"
                modal.className= "modal fade show"
                modal.style.backgroundColor = 'rgba(0,0,0,0.5)';
                setTimeout(() => { modal.style.opacity = 1; })
                
                this.colorSelec= "Grey"
                this.greyCount++
                localStorage.setItem("grey", this.greyCount)   
            }

            if(this.blockBtn = true){
                this.whiteCount++
                localStorage.setItem("white", this.whiteCount)
            }
        },
        randomNum(){
            this.numberRandom= Math.floor(Math.random() * (60 - 0)) + 0
        },
        randomPicker(){
            this.click2()
            this.time=60
            this.randomNum()
        },
        checkInit(){
            if(localStorage.getItem("purple")){
                this.purpleCount= localStorage.getItem("purple")
            } 
            
            if(localStorage.getItem("blue")){
                this.blueCount= localStorage.getItem("blue")
            } 
            
            if(localStorage.getItem("green")){
                this.greenCount= localStorage.getItem("green")
            }
            
            if(localStorage.getItem("yellow")){
                this.yellowCount= localStorage.getItem("yellow")
            }
            
            if(localStorage.getItem("orange")){
                this.orangeCount= localStorage.getItem("orange")
            }
            
            if(localStorage.getItem("red")){
                this.redCount= localStorage.getItem("red")
            } 
            
            if(localStorage.getItem("white")){
                this.whiteCount= localStorage.getItem("white")
            }
            
            if(localStorage.getItem("grey")){
                this.greyCount= localStorage.getItem("grey")
            }

            if(localStorage.getItem("clicked")){
                this.blockBtn= !this.blockBtn
            }
        },
        closeModal(){
            let modal= this.$refs.modalGrey
                modal.style.display= "none"
                modal.className= "modal fade"
        }

    },
    computed:{
        
    }
});

let mount= app.mount("#app");