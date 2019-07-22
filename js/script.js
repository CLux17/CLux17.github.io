var navItems = document.querySelectorAll('nav');
console.log(navItems);

navItems.forEach(element => {
    
    element.addEventListener('mouseover', function(){
        element.style.fontSize = '20px';
    })
    element.addEventListener('mouseleave', function(){
        element.style.fontSize = '16px';
    })
//turn off by using mouseleave instead of mouseover
})