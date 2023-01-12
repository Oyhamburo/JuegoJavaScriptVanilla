const div = document.querySelector('#blackOut')

const transitionBlackOut = () => {
    div.classList.add('blackOut')
    setTimeout(function(){
        div.classList.remove('blackOut')
    }, 1000);
}



export { transitionBlackOut }