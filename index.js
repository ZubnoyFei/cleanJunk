// function func() {
//     smth = "string";
//
// }

/*Если у нас не установлен use strict, то мы не получим ошибку и создадим переменную без её объявления*/


// const someRes =getData();// какие-либо данные, которые мы получили от сервера
//
// const node = document.querySelector('.class');
//
// setInterval(function (){
//     if(node){ //Если элемент node существует, то мы будем записывать данные в него
//         node.innerHTML = someRes;
//     }
// },1000);

// function outer() {
//     const potentiallyHugeArray = [];
//     return function inner(){
// potentiallyHugeArray.push('Hello');
// console.log('Hello');
//     }
// }
//
//
// const sayHello = outer();// outer возвращает функцию и она записывается в переменную sayHello;


/*Ссылки на DOM элементы*/

function createElement() {
    const div = document.createElement('div');
    div.id = "test";
    document.body.append(testDiv);//Помещаем div на страницу
}

createElement();

/* У нас может появиться желание удалить этот блок. Создадим для этого функцию*/

function deleteElement() {
    document.body.removeChild(document.getElementById('test'));
}