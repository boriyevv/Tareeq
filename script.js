const scrollWrapper = document.querySelector('.scroll-wrapper');
const scrolll = document.querySelector('.scroll');

scrollWrapper.addEventListener('scroll', ()=>{
    console.log(scrollWrapper.scrollTop)
    const nav = document.querySelector('nav');
    const header = document.querySelector('header');
    if(scrollWrapper.scrollTop > 0){
        nav.classList.add('scrolled')
        nav.style.background = 'white'
        header.style.background = 'white'
    }else{
        nav.classList.remove('scrolled')
        nav.style.background = '#24CCA8'
        header.style.background = '#24CCA8'
        
    }
})

// scroll-wrapper