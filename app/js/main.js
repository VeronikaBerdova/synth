
var btnDots = document.querySelector('.user-card__btn-dots');

btnDots.addEventListener('click', function () {
  var btnList = document.querySelector('.user-card__btn-list');

  if (!btnList.classList.contains('user-card__btn-list--visible')) {
    // Если класс отсутствует, добавляем его
    btnList.classList.add('user-card__btn-list--visible');
  } else {
    // Если класс присутствует, убираем его
    btnList.classList.remove('user-card__btn-list--visible');
  }

});


document.getElementById('toggle').addEventListener('click', function () {
  this.classList.toggle('toggled');
});







