const animatedElements = document.querySelectorAll('.animation')

const scrollSpy = (e) => {
    animatedElements.forEach((element) => {
        if(window.pageYOffset > element.offsetTop - window.innerHeight + 200) {
            element.classList.add('show')
        } else {
            element.classList.remove('show')
        }
    })    
}

window.addEventListener('load', scrollSpy)
window.addEventListener('resize', scrollSpy)
window.addEventListener('scroll', scrollSpy)