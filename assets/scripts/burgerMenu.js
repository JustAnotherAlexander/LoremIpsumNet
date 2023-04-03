    let logo = document.getElementById('menu__wrapper');
    let burger_logo = document.getElementById('burger_logo');
    let burger = document.getElementById('burger');
    let burger_menu_list = document.getElementById('burger_menu_list');
    let burger_list_wrapper = document.getElementById('burger_list_wrapper');
    burger.addEventListener('click',()=>{burger_click()});
    
        function burger_click () {
            burger.classList.toggle("burger_active");
            logo.classList.toggle('logo_hidden');
            burger_menu_list.classList.toggle('burger_menu_list_active');
            burger_logo.classList.toggle('burger_logo_visible');
            burger_list_wrapper.classList.toggle('hidden');
        }