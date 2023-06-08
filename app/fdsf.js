let newsRow = document.querySelectorAll('.news-dates-row')

newsRow.forEach((news) => {
    news.addEventListener('click', ()=>{
        news.classList.toggle('active')

    })

    news.addEventListener('transitioned', () =>{
            news.classList.toggle('show')
    })
})
