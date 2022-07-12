const body = document.querySelector('body');
const html = document.querySelector('html');
const cabecalho = document.querySelector('header')
const icone = document.querySelector('.icon-mobile');
const textMenuMobile = document.querySelector('.menu-mobile strong');
const navMob = document.querySelector('nav.mobile');
const linksNav = document.querySelectorAll('nav a');
const linksNavMob = document.querySelectorAll('nav.mobile a')
const botoes = document.querySelectorAll('.card-info button');
const arrows = document.querySelectorAll('.card-bio i')
const projetos = document.querySelectorAll('.box-proj');

const mudarMenuMobile = () => {
    const navShow = document.querySelector('nav.show');
    
    icone.classList.toggle('active');

    setTimeout(() => {

        
        navMob.classList.toggle('show');
        if(!navShow){
    
            textMenuMobile.textContent = 'Fechar';
            // cabecalho.style.position = 'static';
            body.style.overflow = 'hidden';
    
        } else{
            body.style.overflow = 'auto';
            textMenuMobile.textContent = 'Menu'; 
        }
    },600);
    

}
function descriptionCard() {

        this.parentElement.style.transform = 'translateX(-100%)';
        
        this.parentElement.nextElementSibling
        .style.transform = 'translate(0,5%)';
}

function titleCard() {

    this.parentElement.style.transform = 'translateX(100%)';
    
    this.parentElement.parentElement.firstElementChild.style.transform = 'translateX(0)';
}


function orderProject(){
    
        if(this.nextElementSibling && this.nextElementSibling.nextElementSibling){
        
            this.nextElementSibling.style.order = 1
            this.nextElementSibling.nextElementSibling.style.order = 3
            this.nextElementSibling.classList.remove('order')
            this.nextElementSibling.nextElementSibling.classList.remove('order')
        }
        
        if(this.previousElementSibling && this.nextElementSibling){
            
            this.previousElementSibling.style.order = 1
            this.nextElementSibling.style.order = 3
            this.previousElementSibling.classList.remove('order')
            this.nextElementSibling.classList.remove('order')
        }

        if(this.previousElementSibling && this.previousElementSibling.previousElementSibling){
            
            this.previousElementSibling.style.order = 3
            this.previousElementSibling.previousElementSibling.style.order = 1
            this.previousElementSibling.classList.remove('order')
            this.previousElementSibling.previousElementSibling.classList.remove('order')
        }
        this.style.order = 2
        this.classList.add('order')
}       
// console.log(body.scrollTop, html.scrollTop)
// linksNav.forEach(e => {
//     e.addEventListener('click', (ev)=> {
//         ev.preventDefault();
//         const href = e.getAttribute('href');
//         console.log(href)
//         html.animate({scrollTop : href.offsetTop})
       
//     })
// })

const observer = new IntersectionObserver(entries =>{

    Array.from(entries).forEach(el=> {
        
        if(el.intersectionRatio >= 0.0001) {
            el.target.classList.add('hidden-off')
        }else
            {
            el.target.classList.remove('hidden-off')
            }
    })
}, {
    threshold : [0, .5, 1]
});

Array.from(document.querySelectorAll('.hidden-on')).forEach(el=> {
    observer.observe(el)
})


botoes.forEach(e => e.addEventListener('click', descriptionCard))

arrows.forEach(e => e.addEventListener('click', titleCard))

projetos.forEach(e => e.addEventListener('click', orderProject))

linksNavMob.forEach(e => e.addEventListener('click',mudarMenuMobile))

icone.addEventListener('click',mudarMenuMobile)
textMenuMobile.addEventListener('click',mudarMenuMobile)


$('.cursos-slider').slick({
    speed: 1350,
    autoplay: true,
    autoplaySpeed: 4000,
    lazyLoad: 'ondemand',
    slideToShow: 1,
    arrows: false,
    cssEase: 'linear',
})

$('nav a').click(function() {
      var href = $(this).attr('href');
      var offSetTop = $(href).offset().top;

      $('html,body').animate({'scrollTop':offSetTop - 100},700);
      $('nav a').removeClass('activated');
      $(this).addClass('activated')
      return false;
  })

