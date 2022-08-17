/*------бургер----------*/

(function () {
  const burgerItem = document.querySelector(".burger");
  const menu = document.querySelector(".header_nav_m");
  const menuCloseItem = document.querySelector(".cross");

  burgerItem.addEventListener("click", () => {
    menu.classList.add("header_nav_m_active");
  });
  menuCloseItem.addEventListener("click", () => {
    menu.classList.remove("header_nav_m_active");
  });
})();

/*-----------------------попап----*/
document.addEventListener("DOMContentLoaded", () => {
  /* Кнопка клик*/
  let callBackButton = document.getElementById("callback-button");

  /*окно которое открываем*/
  let modal1 = document.getElementById("modal-1");


  let closeButton = modal1.getElementsByClassName("modal__close-button")[0];

  callBackButton.onclick = function (e) {
    e.preventDefault();
    modal1.classList.add("modal_active");
  };

  closeButton.onclick = function (e) {
    e.preventDefault();
    modal1.classList.remove("modal_active");
  };
  


  /* вызов двумя кнопками попапа*/
  let buttonOpenModal1 = document.getElementsByClassName("get-modal_1");

  for (let button of buttonOpenModal1) {
    button.onclick = function (e) {
      e.preventDefault();
      modal1.classList.add("modal_active");
    };
  }
});
/*перестройка блока при нажатии регестрации*/ 
document.querySelector(".sign_link").addEventListener("click", function (e) {
  const second = document.querySelectorAll (".second");
  const first = document.querySelectorAll (".first");
  const mc = document.querySelector(".modal__content")
 
  
  first.forEach(elem => elem.style.display = "none");/*перебор всех элементов одного класса*/
  second.forEach(elem => elem.style.display = "block");
  mc.className = 'modal__content_active';/*смена класса */

});
/*аллерт */
const output = () => {
  let mail = document.querySelector('.mail');
  let pass = document.querySelector('.pass');

  if (!mail.value || !pass.value) alert('Заполните поля "Логин" и "Пароль"');
  else alert(`${mail.value}\n${pass.value}`);
}
document.querySelector('.button_alert').addEventListener('click',output);
const output1 = () => {
  let mail1 = document.querySelector('.mail1');
  let pass1 = document.querySelector('.pass1');

  if (!mail1.value || !pass1.value) alert('Заполните поля "Логин" и "Пароль"');
  else alert(`${mail1.value}\n${pass1.value}`);
}
document.querySelector('.button_alert1').addEventListener('click',output1);