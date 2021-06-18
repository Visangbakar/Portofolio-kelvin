let burger=document.getElementById('burger')
let header=document.getElementById('header');
let close=document.getElementsByClassName('close');

let open=false;

function disp() {
    if(!open){
    header.style.left="0px";
    header.classList.toggle('v-resp');
    burger.classList.toggle('fa-bars');
    burger.classList.toggle("fa-times");
    }
    

}

burger.addEventListener('click',disp);

burger.addEventListener('dblclick',function(){
    burger.classList.remove('fa-times');
});