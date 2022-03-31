//menu scrolling

const array_section = document.getElementsByTagName('section');
const nav_btn = document.getElementsByTagName('li');

for (let i=0; i < array_section.length; i++) {
    
    function menuScroll()
        {
            array_section[i].scrollIntoView( {behavior: "smooth"} );
            mobileMenu();
        }
    nav_btn[i].addEventListener('click', menuScroll) 

}


//mobile menu 

const menu_btn = document.querySelector('.mobile_menu');
const open_nav = document.getElementsByTagName('nav')[0];
open_nav.classList.add('closed_menu');
menu_btn.addEventListener('click', mobileMenu)

function mobileMenu() 
{
	open_nav.classList.toggle('closed_menu');
    if(open_nav.classList.contains('closed_menu')) 
    {
        menu_btn.value = "☰"
    } else {
        menu_btn.value = "✖"
    }
}



//language color

const arr = document.querySelectorAll('.lang > a');
arr.forEach(function (item) {

    item.addEventListener('click', linkProcess);
    function linkProcess (e) {
        e.preventDefault();
        langColor(item);
    }
    
})

function langColor(item) {
    if ( item.id == "ru" ) {
        item.style.color = 'black'; 
        item.nextElementSibling.style.color = '#828282';
    } else {
        item.style.color = 'black';
        item.previousElementSibling.style.color = '#828282';
    }
}
