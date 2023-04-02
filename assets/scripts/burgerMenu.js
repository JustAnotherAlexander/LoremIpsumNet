window.onload = function () {
    let logo = document.getElementById('menu__wrapper');
    let burger_logo = document.getElementById('burger_logo');
    let burger = document.getElementById('burger');
    let burger_menu_list = document.getElementById('burger_menu_list');
    burger.addEventListener('click',()=>{burger_click()});
    
        function burger_click () {
            console.log(burger.classList);
            console.log('logo: ', logo)
            burger.classList.toggle("burger_active");
            logo.classList.toggle('logo_hidden');
            burger_menu_list.classList.toggle('burger_menu_list_active');
            burger_logo.classList.toggle('burger_logo_visible');
        }
    }