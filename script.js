answer = 2
question = 1
score = 0

document.querySelectorAll(selectors ='.image img').forEach(callback = (el = Element, index = number) => {
    el.addEventListener(type = 'click', listener = () => {
        if (index === answer){
            el.parentNode.classList.add('image__success')
            score = score + 1
        }
        else{
            el.parentNode.classList.add('image__failure')
            document.querySelectorAll(selectors = '.image')[answer].classList.add('image__success')
        }
        document.querySelectorAll(selectors = '.image').forEach((e = Element) =>{
            e.style.pointerEvents = 'none'
        })
        document.querySelector(selectors = '.button').classList.add('button__active')
        question = question + 1
    })
})

document.querySelector(selectors = '.button').addEventListener(type = 'click', listener = () => {
    if (question == 2){
        document.querySelector(selectors = '.text div').textContent = 'Кто брат Стэнли Пайнса?'
        answer = 3
    }
    else if (question == 3){
        document.querySelector(selectors = '.text div').textContent = 'Самый стойкий самоцвет из вселенной стивена?'
        answer = 0
    }
    else if (question == 4){
        document.querySelector(selectors = '.text div').textContent = 'Вы ответили на ' + score + ' из ' + (question-1)
    }
    document.querySelector('.button').classList.remove('button__active')
    document.querySelectorAll('.image').forEach(callbackfn = (el = Element, index = number) => {
        el.style.pointerEvents = ''
        el.classList.remove('image__success')
        el.classList.remove('image__failure')
        el.querySelector('img').src = 'imgs/awnser-'+question+'-'+(index)+'.jpg'
    })
    document.getElementById('answer'+question).classList.add('link__active')
    document.getElementById('answer'+(question-1)).classList.remove('link__active')
})

