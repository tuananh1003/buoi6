const todocontainer=document.querySelector('.todocontainer')
fetch('https://6586d405468ef171392ed2c5.mockapi.io/sanpham/Tasks', {
  method: 'GET',
  headers: {'content-type':'application/json'},
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then((todos) => {
  // Do something with the list of tasks
    todos.forEach((todo) => {
        const product=document.createElement('div')
        product.innerHTML=`
        <p>Ngay tao: ${todo.createdAt}</p>
        <p>Name: ${todo.name}</p>
        `
        todocontainer.appendChild(product)
    });
}).catch(error => {
  // handle error
})