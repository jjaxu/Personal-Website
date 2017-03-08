// Interactions
const para = document.querySelector('p');
console.log(para);
console.log(para.innerHTML);

// changing text
const btn1 = document.querySelector('#b1');
const btn2 = document.querySelector('#b2');

btn1.addEventListener('click', e => {
    console.log(e);
    para.innerHTML = "Yoooo!";
})


btn2.addEventListener('click', e => {
    var str = "pizza";
    para.innerHTML = para.innerHTML + str;
})