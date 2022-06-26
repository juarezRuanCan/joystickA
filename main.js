const area = document.getElementById('area');
const joys = document.getElementById('joystick');

const wi = joys.clientWidth
const he = joys.clientHeight
// console.log(area)

area.addEventListener('touchstart', e=>{
    console.log("dentro")
    var ejex = e.clientX
    var ejey = e.clientY

    joys.style.left = (ejex-(wi/2)) + "px"
    joys.style.top = (ejey-(he/2)) + "px"

    console.log("eje x= "+ ejex, " eje y= "+ ejey)
})

