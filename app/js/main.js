$(function () {
    let slides = document.querySelectorAll('.swiper-main__slide')
    let header = document.querySelector('.header--main')
    let logo = document.querySelector('#logo img')
    let socialLink = document.querySelectorAll('.header-social__link svg path')
    let screenWidth = window.innerWidth
    let headerMobileClose = document.querySelectorAll('.mobile-close__img');
    let headerMobileBack = document.querySelectorAll('.mobile-back__img');
    let swiper = new Swiper(".mySwiper", {
        slidesPerView: 6,
        spaceBetween: 30,
        infinity: true,
        loop: true,
        keyboard: true,
        navigation: {
            nextEl: ".partners__button--next",
            prevEl: ".partners__button--prev",
        },
        breakpoints:{
            0:{
                slidesPerView: 2
            },
            600:{
                slidesPerView: 4
            },
            1000:{
                slidesPerView: 6
            }
        }
    });

    let slider = new Swiper('.swiper-main', {
        // Enable lazy loading
        lazy: true,
        infinity: true,
        keyboard: true,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });


    if(screenWidth >= 1000){

        window.onload = function (){
            let currentSlide = slides[slider.realIndex]
            if (currentSlide.dataset.color === 'light'){
                header.classList.add('light')
                logo.src = './images/logo-white.png'
                socialLink.forEach((link) =>{
                    link.style.fill = '#fff'
                })
            } else {
                header.classList.add('dark')
            }
        }

        slider.on('slideChange', function () {
            let currentSlide = slides[slider.realIndex]

            if (currentSlide.dataset.color === "light"){
                header.classList.add('light')
                header.classList.remove('dark')
            }
            if(currentSlide.dataset.color === "dark"){
                header.classList.add('dark')
                header.classList.remove('light')
            }

            if(header.classList.contains('light')){
                logo.src = './images/logo-white.png'
                socialLink.forEach((link) =>{
                    link.style.fill = '#fff'
                })
            } else if(header.classList.contains('dark')){
                logo.src = './images/logo.png'
                socialLink.forEach((link) =>{
                    link.style.fill = '#0077FF'
                })
            }

        })

    }

    if(screenWidth < 1000) {

        let currentSlide = slides[slider.realIndex]
        header.classList.add('mobile')
        logo.src = './images/logo.png'
        socialLink.forEach((link) => {
            link.style.fill = '#0077FF'
        })
        if (currentSlide.dataset.color === 'light') {
            header.classList.add('light')
        } else {
            header.classList.add('dark')
        }

        slider.on('slideChange', function () {
            let currentSlide = slides[slider.realIndex]

            if (currentSlide.dataset.color === "light"){
                header.classList.add('light')
                header.classList.remove('dark')
            }
            if(currentSlide.dataset.color === "dark"){
                header.classList.add('dark')
                header.classList.remove('light')
            }

        })
    }



    //Аккордион для мобильного меню второго уровня

    (function () {
        let acc = document.getElementsByClassName("mobile-menu-second-link--advanced");
        let f;
        for (f = 0; f < acc.length; f++) {
            acc[f].addEventListener("click", function() {
                this.classList.toggle("active");
                let panel = this.nextElementSibling;
                if (panel.style.maxHeight){
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + 'px';
                }

                headerMobileBack.forEach((elem) =>{
                    elem.addEventListener('click', () =>{
                        panel.style.maxHeight = null;
                        this.classList.remove('active')
                    })
                })

                headerMobileClose.forEach((elem) =>{
                    elem.addEventListener('click', () =>{
                        panel.style.maxHeight = null;
                        this.classList.remove('active')
                    })
                })
            });
        }
    }());

    //Аккордион
    (function () {
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
    }());

    //Мобильное меню
    (function () {
        const hamb = document.querySelector("#hamb");
        const headerClose = document.querySelector("#header-close");
        const popup = document.querySelector("#popup");
        const body = document.body;
        // При клике на иконку hamb вызываем ф-ию hambHandler
        hamb.addEventListener("click", hambHandler);
        headerClose.addEventListener('click', closeOnClick)

        //Открытие панели для мобильного меню

        let acc = document.getElementsByClassName("mobile-menu-link--advanced");
        let p;
        for (p = 0; p < acc.length; p++) {
            acc[p].addEventListener("click", function() {
                this.classList.toggle("active");
                let panel = this.nextElementSibling;
                panel.classList.toggle("active")
                headerMobileClose.forEach((close) =>{
                  close.addEventListener('click', ()=>{
                      this.classList.remove("active")
                      panel.classList.remove("active")
                  })
                })
                headerMobileBack.forEach((close) =>{
                    close.addEventListener('click', ()=>{
                        this.classList.remove("active")
                        panel.classList.remove("active")
                    })
                })
            });
        }


        // Выполняем действия при клике ..
        function hambHandler(e) {
            e.preventDefault();
            // Переключаем стили элементов при клике
            popup.classList.toggle("open");
            hamb.classList.toggle("active");
            body.classList.toggle("noscroll");
            renderPopup();
        }

        headerMobileClose.forEach((close) => {
            close.addEventListener('click', closeOnClick)
        })

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
        }());

    window.addEventListener('resize', (e) => {

        let screenWidth = window.innerWidth

        if(screenWidth >= 1000){
            header.classList.remove('mobile')
            console.log('comp')

        let currentSlide = slides[slider.realIndex]
        if (currentSlide.dataset.color === 'light'){
            header.classList.add('light')
            logo.src = './images/logo-white.png'
            socialLink.forEach((link) =>{
                link.style.fill = '#fff'
            })
        } else {
            header.classList.add('dark')
        }


            slider.on('slideChange', function () {
                let currentSlide = slides[slider.realIndex]

                if (currentSlide.dataset.color === "light"){
                    header.classList.add('light')
                    header.classList.remove('dark')
                }
                if(currentSlide.dataset.color === "dark"){
                    header.classList.add('dark')
                    header.classList.remove('light')
                }

                if(header.classList.contains('light')){
                    logo.src = './images/logo-white.png'
                    socialLink.forEach((link) =>{
                        link.style.fill = '#fff'
                    })
                } else if(header.classList.contains('dark')){
                    logo.src = './images/logo.png'
                    socialLink.forEach((link) =>{
                        link.style.fill = '#0077FF'
                    })
                }

            })

        }

        if(screenWidth < 1000) {
            console.log('mobilka')

        let currentSlide = slides[slider.realIndex]
        header.classList.add('mobile')
        logo.src = './images/logo.png'
        socialLink.forEach((link) => {
            link.style.fill = '#0077FF'
        })
        if (currentSlide.dataset.color === 'light'){
            header.classList.add('light')
        } else {
            header.classList.add('dark')
        }


            slider.on('slideChange', function () {
                let currentSlide = slides[slider.realIndex]

                if (currentSlide.dataset.color === "light"){
                    header.classList.add('light')
                    header.classList.remove('dark')
                    logo.src = './images/logo.png'
                    socialLink.forEach((link) => {
                        link.style.fill = '#0077FF'
                    })
                }
                if(currentSlide.dataset.color === "dark"){
                    header.classList.add('dark')
                    header.classList.remove('light')
                    logo.src = './images/logo.png'
                    socialLink.forEach((link) => {
                        link.style.fill = '#0077FF'
                    })
                }

            })

        }
    });

})