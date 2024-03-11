//  "Звонок" и "Заказать"
var callButton = document.querySelector('.callback');
var orderButtons = document.querySelectorAll('.service-card button');

// Получаем модальное окно и его содержимое
var modal = document.getElementById("myModal");
var closeBtn = document.querySelector(".close");

// Обработчик события клика на кнопку "Звонок"
callButton.addEventListener('click', function() {
    showModal();
});

// Обработчик события клика на кнопки "Заказать"
orderButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        showModal();
    });
});

// Функция для отображения окна
function showModal() {
    modal.style.display = "block";
}

// Обработчик закрытия окна
closeBtn.addEventListener('click', function() {
    modal.style.display = "none";
});

// Обработчик  клика окна для его закрытия
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

// Обработчик события отправки формы обратной связи
document.getElementById("feedbackForm").addEventListener("submit", function(event) {

    event.preventDefault();
 
});

// арарара

  // Функция для проверки, если элемент находится в видимой области окна
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Функция для добавления или удаления класса при прокрутке страницы
function toggleAnimation() {
    const sections = document.querySelectorAll('.animate');
    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
}

document.addEventListener('scroll', toggleAnimation);

toggleAnimation();