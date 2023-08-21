let keyPiano = {
    "1" : '1.mp3',
    "2" : '2.mp3',
    "3" : '3.mp3',
    "4" : '4.mp3',
    "5" : '5.mp3',
    "6" : '6.mp3',
    "7" : '7.mp3',
    "8" : '8.mp3',
    "9" : '9.mp3',
    "0" : '10.mp3',
    "a" : 'a.mp3',
    "b" : 'b.mp3',
    "c" : 'c.mp3',
    "d" : 'd.mp3',
    "e" : 'e.mp3',
    "f" : 'f.mp3',
    "g" : 'g.mp3'

}
document.addEventListener('keydown', 
(event) => playPiano(event.key));
function playPiano(key){
    audio = new Audio(keyPiano[key]); 
    audio.play();
    let keyClick = document.querySelector(`[data-key="${key}"]`);
    if(keyClick){
        keyClick.classList.add('active');
        const remmoveActive = setInterval(() => {
            keyClick.classList.remove('active')
        }, 500);
    }
}
let keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('click', (e)=>{
        playPiano(key.dataset.key);
    })
})