let txt = ''
let paper = ''
const speedWrite = 30
let i = 0
const writeChat = (id, text) => {
    id.innerHTML = ''
    txt = text
    paper = id
    i=0
    write()
}

function write() {
    if (i < txt.length) {
        paper.innerHTML += txt.charAt(i);
        i++;
        setTimeout(write, speedWrite);
    }
    if(i == txt.length){
        i=0
        txt = ''
        paper = ''
    }
}
const resetWrite = ()=> i=0


export { writeChat,resetWrite }
