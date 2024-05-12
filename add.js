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
        const nameValue=nameInput.value
        const priceValue=priceInput.value
        const product={
            productid:productidValue,
            name:nameValue,
            price:priceValue
        }
        const newTask = {
            content: 'Check out mockapi.io',
            completed: false,
          };
          
          fetch('https://6586d405468ef171392ed2c5.mockapi.io/sanpham/Tasks', {
            method: 'POST',
            headers: {'content-type':'application/json'},
            // Send your data in the request body as JSON
            body: JSON.stringify(product)
          }).then(res => {
            if (res.ok) {
                return res.json();
            }
            // handle error
          }).then(task => {
            // do something with the new task
          }).catch(error => {
            // handle error
          })
    }
)