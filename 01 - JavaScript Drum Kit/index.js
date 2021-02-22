
document.addEventListener('DOMContentLoaded', () => {


    const drumSet = document.querySelectorAll(".keys")


    drumSet.forEach(key => {
        addEventListener("keyup", (e) =>
    
    keyHandler(e))
    })

})



function keyHandler(e){
    let code = e.keyCode;
    let key = document.querySelector(`div[data-key="${code}"]`)
    let audio = document.querySelector(`audio[data-key="${code}"]`);
    key.classList.add('playing');
    audio.play();
    setTimeout(() =>{
        key.classList.remove('playing');
    }, 200);
}