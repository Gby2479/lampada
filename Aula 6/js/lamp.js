let body=document.querySelector("body")

let divInte=document.createElement("div")
divInte.setAttribute("id","inte")

let divLamp=document.createElement("div")
divLamp.setAttribute("id","lampada")

let imgInte=document.createElement("img")
imgInte.setAttribute("src","./img/off.png")

let imgLamp=document.createElement("img")
imgLamp.setAttribute("src","./img/desligada.png")

divInte.append(imgInte)
body.append(divInte)

divLamp.append(imgLamp)
body.append(divLamp)

imgInte.onclick=()=>{
    if(imgLamp.src.match("desligada")){
        imgLamp.setAttribute("src","./img/ligada.png")
        imgInte.setAttribute("src","./img/on.png")
        body.setAttribute("style","background-Color:#FFF")
    }
    else{
        imgLamp.setAttribute("src","./img/desligada.png")
        imgInte.setAttribute("src","./img/off.png")
        body.setAttribute("style","background-Color:#000")

    }
}


