// header function
const menuSlide = () => {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');
    const menuList = document.querySelectorAll('.menu li');

    burger.addEventListener('click',() => {
        // toogle menu
        menu.classList.toggle('menu-aktif');
        
        // animasi link
        menuList.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `menuAnimasi 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        }); 
        // toogel animasi burger
        burger.classList.toggle('toggle');
    });

    
}
menuSlide();
// end header function