// 1) Скачать архив, прикрепленный к уроку (АРХИВ ДЛЯ ДЗ). Внутри папки с 5м уроком создать еще одну, где и выполнить это задание (чтобы не перемешивались)

// 2) Используя только файл скрипта (html руками не трогать) выполнить такие действия:

// ·        Восстановить порядок в меню, добавить пятый пункт

// ·        Заменить картинку заднего фона на другую из папки img

// ·        Поменять заголовок, добавить слово "подлинную" ( Получится - "Мы продаем только подлинную технику Apple")

// ·        Удалить рекламу со страницы

// ·        Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"

// 3) Проверить, чтобы все работало и не было ошибок в консоли


let menu = document.getElementsByClassName('menu')[0],
    menuItem = document.querySelectorAll('.menu-item'),
    menuItemLi = document.createElement('li'),
    title = document.getElementById('title'),
    adv = document.getElementsByClassName('adv')[0],
    promptForApple = document.querySelector('#prompt');


menu.insertBefore(menuItem[2], menuItem[1]);
menuItemLi.classList.add('menu-item');
menuItemLi.textContent = "Пятый пункт";
menu.appendChild(menuItemLi);

document.body.style.backgroundImage = "url('../img/apple_true.jpg')";

title.textContent = 'Мы продаем только подлинную технику Apple';

adv.remove();

let yourOpinion = prompt("Ваше отношение к технике Apple?", "");
promptForApple.textContent = yourOpinion;




