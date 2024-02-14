const scrollWrapper = document.querySelector('.scroll-wrapper');
const scrolll = document.querySelector('.scroll');
const section1 = document.querySelector('.section1');
const logo = document.querySelector('.logo');
const navLink = document.querySelectorAll('.nav-link');
const root = document.querySelector(':root');
let styleRoot = window.getComputedStyle(root);
let propValue = styleRoot.getPropertyValue('--nav-link-color')


scrollWrapper.addEventListener('scroll', ()=>{
    console.log(scrollWrapper.scrollTop)
    const nav = document.querySelector('.nav');
    if(scrollWrapper.scrollTop > 0){
        nav.classList.add('scrolled')
        scrollWrapper.style.background = 'white'
        logo.style.color = '#24CCA8'
        navLink.forEach(element => {
            element.style.color = '#24CCA8'
            root.style.setProperty('--nav-link-color', '#24CCA8')

        });
    }else{
        nav.classList.remove('scrolled')
        nav.style.background = '#24CCA8'
        logo.style.color = '#fff'
        navLink.forEach(element => {
            element.style.color = '#fff'   
            root.style.setProperty('--nav-link-color', 'white')
        });
        scrollWrapper.style.background = '#24CCA8'
        
    }
})

// scroll-wrapper