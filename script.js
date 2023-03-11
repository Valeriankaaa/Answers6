'use strict';
// Даны картинки. Привяжите к каждой картинке событие, чтобы по клику на 
//картинку console.log выводился ее src.
// let elems = document.getElementsByTagName('img');
// for(let i = 0; i <elems.length; i++){
//     elems[i].onclick = func;
// }
// function func(){
//     console.log(this.getAttribute('src'));
// }

//Даны ссылки. Привяжите всем ссылкам событие - по наведению на ссылку в 
//атрибут title запишется ее текст
// let elems = document.querySelectorAll('a');
// for( let i = 0; i<elems.length;i++){
//     elems[i].addEventListener('mouseover', func);
// }
// function func(){
//     this.innerHTML = this.innerHTML + '(' + this.href + ')';
// }
//Привяжите всем ссылкам событие - по наведению на ссылку в конец ее 
//текста дописывается ее href в круглых скобках
// let elems = document.querySelectorAll('a');
// for( let i = 0; i<elems.length;i++){
//     elems[i].addEventListener('mouseover', func);
// }
// function func(){
//     this.innerHTML = this.innerHTML + '(' + this.href + ')';
//     this.removeEventListener('mouseover', func);
// }


//Домашнее задание

//Привяжите всем инпутам следующее событие - по потери фокуса каждый 
//инпут выводит свое value в абзац с id="test"
// let elems = document.getElementsByTagName('input');
// let text = document.getElementById('test');
// for (let i = 0; i < elems.length; i++) {
//     elems[i].addEventListener('blur', loseFocus);
// }
// function loseFocus () {
//     text.innerHTML = this.value;
// }

// Для всех инпутов сделайте так, чтобы они выводили свой value алертом 
//при нажатии на любой из них, но только по первому нажатию. Повторное 
//нажатие на инпут не должно вызывать реакции.

// let elems = document.getElementsByTagName('input');
// for (let i=0; i < elems.length; i++) {
//     elems[i].addEventListener('click', showAlert);
// }
// function showAlert () {
//     alert(this.value);
//     this.removeEventListener('click', showAlert)
// }


// Даны абзацы с числами. По нажатию на абзац в нем должен появится 
//квадрат числа, которое он содержит.

// let elems = document.getElementsByTagName('p'); 
// for (let i = 0; i < elems.length; i++) {
//     elems[i].addEventListener('click', square);
// }
// function square () {
//  this.innerHTML = this.innerHTML * this.innerHTML;
// }

// Даны инпуты. Сделайте так, чтобы все инпуты по потери фокуса проверяли 
//свое содержимое на правильное количество символов. Сколько символов 
//должно быть в инпуте, указывается в атрибуте data-length. Если вбито 
//правильное количество, то граница инпута становится зеленой, если 
//неправильное - красной.

// let elems = document.getElementsByTagName('input');
// for (let i = 0; i < elems.length; i++) {
//     elems[i].addEventListener('blur', check);
// }
// function check () {
//     var correct = this.dataset.length;
//     var input = this.value.length;
//     if (correct == input) {
//         this.style.borderColor = 'green';
//     } else {
//         this.style.borderColor = 'red';
//     }
// }


