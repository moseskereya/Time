var date = new Date();
const hide = document.querySelector('.time')
const btn = document.querySelector('.show');
let timeStatus = 1;
btn.onclick = () =>{
    if(timeStatus === 1){
        var mytime = document.querySelector('.time').innerHTML = date;
        hide.style.display = 'block'
        timeStatus = 0;
    }else{
        hide.style.display = 'none'
         timeStatus = 1;
    }
  
}