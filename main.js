const firstBox = document.getElementById('first');
const secondBox = document.getElementById('second');
const thirdBox = document.getElementById('third');
const darkMode = document.getElementById('moon-rise');
const sunMode = document.getElementById('sun-rise');
const header = document.getElementsByClassName('switcher');
const header2 = document.getElementsByClassName('switcher-second');
const modal = document.getElementById('modal');
const close = document.getElementById('close');


const arr = [firstBox, secondBox, thirdBox];
let i = 0;
let count = 0;
let checkDark = false;
let checkModal = false;
let check = false;

//< Dark mode >
darkMode.addEventListener('click', function(event){
    console.log(header);
    for (const box of header) {
        box.classList.add('mode');
      }
    for (const box of header2) {
        box.classList.add('mode-second');
      }
    if(!check){
        sunMode.style.display = ('flex')
        darkMode.style.display = ('none')
        check = false;
    }
    
})      

sunMode.addEventListener('click', function(event){
    if(!check){
        sunMode.style.display = ('none')
        darkMode.style.display = ('flex')
    }   
    for (const box of header) {
        box.classList.remove('mode');
      }
      for (const box of header2) {
        box.classList.remove('mode-second');
      }
})   



//< Model window >
modal.addEventListener('click', function(event){
    const modalWindow = document.getElementById('modalWindow');
    modalWindow.style.display = 'block'

})

close.addEventListener('click', function(event){
    const modalWindow = document.getElementById('modalWindow');
    modalWindow.style.display = 'none'

})