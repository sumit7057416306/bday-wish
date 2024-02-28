const enddate="1 March 2024 12:00 AM"

// document.getElementById("end-date").innerText=enddate

const  inputs=document.querySelectorAll("input")
function clock(){
    const end=new Date(enddate)
    const now=new Date()
    const diff=(end-now)/1000
    console.log(diff)
    // convert into days
    inputs[0].value=Math.floor(diff / 3600 / 24)
     // convert into hours
    inputs[1].value=Math.floor(diff/3600)%24
     // convert into minutes
    inputs[2].value=Math.floor(diff/60)%60
     // convert into seconds
    inputs[3].value=Math.floor(diff)%60
    


}

// initial call
clock()

setInterval (
    ()=>{
        clock()
    },1000
)

// 1 day=24hrs
// 1hr=60min
// 60min=3600sec