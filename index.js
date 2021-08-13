let navIcon = document.querySelector('.nav-icon')
const navUl = document.querySelector('.nav-ul')
let check = false;

navIcon.addEventListener('click', function(){
    if(check == false){
        navUl.style.display = 'block'
        navIcon.style.transition = '.5s'
        navIcon.innerText = 'x'
        navIcon.style.transform = 'rotate(180deg)'
        check = true
    }
    else{
        navUl.style.display = 'none'
        navIcon.innerText = '='
        navIcon.style.transform = 'rotate(0deg)'
        navIcon.style.transition = '.5s'
        check = false
    }
})


window.addEventListener('scroll', function(){

    document.querySelector('.navbar').classList.toggle('sticky', window.scrollY > 0)
})

