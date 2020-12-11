function playAudio(id){
    let audio=new Audio()
    audio.src=`sounds/${id}.mp3`;
    audio.play();
}

function startSound(id,previusId){
    const element=document.getElementById(id);
    element.classList.add("key-focus");
    playAudio(id);

    if(previusId && id!==previusId){
        const  prevElement=document.getElementById(previusId);
        prevElement.classList.remove("key-focus")
    }
}

const previusElement = {
    previusElementId: 5,

    setPrevElem : (elemId)=>this.previusElementId=elemId,
    getPrevElem : ()=>this.previusElementId
}

function hello(e){
    switch(e.keyCode){
        case 81:
            startSound("81",previusElement.getPrevElem());
            previusElement.setPrevElem("81");
            break;
        case 87:
            startSound("87",previusElement.getPrevElem());
            previusElementId="87";
            break;
        case 69:
            startSound("69",previusElement.getPrevElem());
            previusElementId="69";
            break;
        case 82:
            startSound("82",previusElement.getPrevElem());
            previusElementId="82";
            break;
        case 84:
            startSound("84",previusElement.getPrevElem());
            previusElementId="84";
            break;
        case 89:
            startSound("89",previusElement.getPrevElem());
            previusElementId="89";
            break;
    }
}
previusElement.setPrevElem(null);
addEventListener("keydown",hello)


