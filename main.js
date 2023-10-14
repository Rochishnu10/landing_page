// change navbar style on scrolling

window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY >0)
})

// show and hide faqs

const faqs= document.querySelectorAll('.faq');
faqs.forEach(faqs=>{
    faqs.addEventListener('click',()=>{
        faqs.classList.toggle('open')
    })
})