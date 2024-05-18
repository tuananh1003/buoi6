const nameInput=document.querySelector('#name');
const button=document.querySelector('button')
const h1=document.querySelector('.content')
button.addEventListener('click',
    ()=>{
        //b1: nhap thong tin tu the input
        const nameValue=nameInput.value
        //b2: an click
        //b3: hien thi nameValue len tren giao dien => the h1
        h1.innerHTML='xin chao '+nameValue
        //b4: xoa thong tin
        nameInput.value=''
        //them class red cho h1
        h1.classList.add('red')
    }
)