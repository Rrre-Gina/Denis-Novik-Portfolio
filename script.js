//menu 

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



//language(desctop) 

const lang_ru = document.querySelectorAll('.lang_style > a')[2];
const lang_en = document.querySelectorAll('.lang_style > a')[3];
lang_ru.onclick = function (e) {
    e.preventDefault();
    lang_ru.style.color = "black";
    lang_en.style.color = "#828282";
}
lang_en.onclick = function (e)
{
    e.preventDefault();
    lang_ru.style.color = "#828282";
    lang_en.style.color = "black";
}



//language (mobile)

const mob_lang_ru = document.querySelectorAll('.lang_style > a')[0];
const mob_lang_en = document.querySelectorAll('.lang_style > a')[1];
mob_lang_ru.onclick = function (e) {
    e.preventDefault();
    mob_lang_ru.style.color = "black";
    mob_lang_en.style.color = "#828282";
}
mob_lang_en.onclick = function (e)
{
    e.preventDefault();
    mob_lang_ru.style.color = "#828282";
    mob_lang_en.style.color = "black";
}

