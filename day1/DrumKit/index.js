
window.addEventListener('keydown',(e)=>{
    
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    
    const div= document.querySelector(`div[data-key="${e.keyCode}"]`);
    div.classList.add('playing');
    audio.currentTime=0;
    audio.play();
    console.log(audio);
    
    
})
window.addEventListener('keyup',(e)=>{
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const div= document.querySelector(`div[data-key="${e.keyCode}"]`);
    div.classList.remove('playing');

})