console.log("Drage and drop in js")

const img = document.querySelector('.img')
const boxs = document.getElementsByClassName("box")
img.addEventListener("dragstart",(e)=>{
    // console.log("drag start has been trigered")
    e.target.className += " hold"
    setTimeout(()=>{
        e.target.className = "hide"

    },0)

})
img.addEventListener("dragend",(e)=>{
    // console.log("drag end has been trigered")
    e.target.className= "img"

})
for(box of boxs){
    box.addEventListener("dragover",(e)=>{
        e.preventDefault()
        // console.log("dragover has been trigered")

    })
    box.addEventListener("dragenter",(e)=>{
        // console.log("dragenter has been trigered")
        e.target.className +=" dashed"
    })
    box.addEventListener("dragleave",(e)=>{
        // console.log("dragleave has been trigered")
        e.target.className = "box"
    })
    box.addEventListener("drop",(e)=>{
        // console.log(" drop has been trigered")
        e.target.append(img)
    })
}