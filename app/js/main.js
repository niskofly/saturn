$(function () {

    let acc = document.getElementsByClassName("aside__link--advanced");
    let i;


    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            let panel = this.nextElementSibling;
            if (panel.style.maxHeight){
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }

    const hamb = document.querySelector("#hamb");
    const popup = document.querySelector("#popup");
    const body = document.body;

// Клонируем меню, чтобы задать свои стили для мобильной версии
    const menu = document.querySelector("#menu").cloneNode(1);
    const social = document.querySelector('.header-social__links').cloneNode(1);

// При клике на иконку hamb вызываем ф-ию hambHandler
    hamb.addEventListener("click", hambHandler);

// Выполняем действия при клике ..
    function hambHandler(e) {
        e.preventDefault();
        // Переключаем стили элементов при клике
        popup.classList.toggle("open");
        hamb.classList.toggle("active");
        body.classList.toggle("noscroll");
        renderPopup();
    }

// Здесь мы рендерим элементы в наш попап
    function renderPopup() {
        popup.appendChild(menu);
        popup.appendChild(social)
    }

// Код для закрытия меню при нажатии на ссылку
    const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
    links.forEach((link) => {
        link.addEventListener("click", closeOnClick);
    });

// Закрытие попапа при клике на меню
    function closeOnClick() {
        popup.classList.remove("open");
        hamb.classList.remove("active");
        body.classList.remove("noscroll");
    }
})