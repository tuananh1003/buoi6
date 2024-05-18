const productidInput=document.querySelector('#productid')
const nameInput=document.querySelector('#name')
const priceInput=document.querySelector('#price')
const h3=document.querySelector('.content')
const p=document.querySelector('.name')
const span=document.querySelector('.price')
const button=document.querySelector('button')
button.addEventListener('click',
    (e)=>{
        e.preventDefault()
        const productidValue=productidInput.value
        h3.innerHTML=productidValue
        const nameValue=nameInput.value
        p.innerHTML=nameValue
        const priceValue=priceInput.value
        span.innerHTML=priceValue
        productidInput.value=""
        nameInput.value=""
        priceInput.value=""
    }
)