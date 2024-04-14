function redirectLinkedin(){

    console.warn("i m clicked")
    window.open('https://www.linkedin.com/in/saurav-ranjan-31481a207/','_blank')
}
function redirectGithub(){

    console.warn("i m clicked")
    window.open('https://github.com/geekysaurav007','_blank')
}

let linkedin=document.getElementById("linkedin")
let github=document.getElementById("github")
linkedin.addEventListener('click',redirectLinkedin)
github.addEventListener('click',redirectGithub)
