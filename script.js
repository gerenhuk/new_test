document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.slider img');
    let currentIndex = 0;

    function showNextImage() {
        // Поточне зображення стає невидимим
        images[currentIndex].classList.remove('active');

        // Перехід до наступного зображення
        currentIndex = (currentIndex + 1) % images.length;

        // Нове зображення стає видимим
        images[currentIndex].classList.add('active');
    }

    // Змінюємо зображення кожні 3 секунди
    setInterval(showNextImage, 3000);
});

// Оголошення змінних
const busketButtons = document.querySelectorAll('.busket');
const shoppingBtn = document.querySelector('.shopping__btn');
const notification = document.querySelector('.notification');
const cartMessage = document.querySelector('.cart-message');
let cartCount = 0;
const originalColor = '#5c2020';

// Додаємо обробники подій для всіх кнопок кошика
busketButtons.forEach(busket => {
    const icon = busket.querySelector('i');

    // Ефект при наведенні
    busket.addEventListener('mouseenter', () => {
        busket.style.backgroundColor = 'black';
    });

    // Ефект при відведенні курсору
    busket.addEventListener('mouseleave', () => {
        if (!icon.classList.contains('fa-check')) {
            busket.style.backgroundColor = originalColor;
        }
    });

    // Ефект при кліку
    busket.addEventListener('click', () => {
        if (icon.classList.contains('fa-check')) {
            // Якщо товар вже в корзині - видаляємо
            icon.classList.remove('fa-check');
            icon.classList.add('fa-cart-shopping');
            busket.style.backgroundColor = originalColor;
            cartCount--;
        } else {
            // Додаємо товар в корзину
            icon.classList.remove('fa-cart-shopping');
            icon.classList.add('fa-check');
            busket.style.backgroundColor = 'green';
            cartCount++;

            // Показуємо повідомлення
            cartMessage.style.display = 'block';
            setTimeout(() => {
                cartMessage.style.display = 'none';
            }, 2500);
        }

        // Оновлюємо лічильник в хедері
        notification.textContent = cartCount;
        notification.style.display = cartCount > 0 ? 'block' : 'none';
    });
});

// Обробник кліку для кнопки корзини в хедері
shoppingBtn.addEventListener('click', () => {
    alert(`У вашій корзині ${cartCount} товар(ів)`);
});


// Оголошення змінних
const coffeeCups = document.querySelectorAll('.coffee-cup');
const coffeeText = document.querySelector('.coffee-text');
const timerDisplay = document.querySelector('.timer');

let currentCupIndex = 0;
let secondsLeft = 5; // Змініть на 60 для 1 хвилини
let timer;

// Тексти для кожної чашки
const cupMessages = [
    "Класична еспресо",
    "Капучино з молочною піною",
    "Ароматна лате",
    "Мока з шоколадом",
    "Американо з корицею"
];

// Функція оновлення таймера
function updateTimer() {
    const minutes = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60;

    timerDisplay.textContent =
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    if (secondsLeft <= 0) {
        changeCoffeeCup();
        secondsLeft = 5; // Змініть на 60 для 1 хвилини
    } else {
        secondsLeft--;
    }
}

// Функція зміни чашки
function changeCoffeeCup() {
    // Приховуємо поточну чашку
    coffeeCups[currentCupIndex].classList.remove('active');

    // Оновлюємо індекс (циклічно)
    currentCupIndex = (currentCupIndex + 1) % coffeeCups.length;

    // Показуємо нову чашку
    coffeeCups[currentCupIndex].classList.add('active');

    // Оновлюємо текст
    coffeeText.textContent = cupMessages[currentCupIndex];
}

// Запускаємо таймер
timer = setInterval(updateTimer, 1000);

// Ініціалізація при завантаженні
updateTimer();

document.addEventListener('DOMContentLoaded', function () {
    // Отримуємо всі посилання меню
    const menuLinks = document.querySelectorAll('.menu__link');

    // Додаємо обробник кліку до кожного посилання
    menuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Забороняємо стандартну поведінку

            // Отримуємо ID секції з атрибута href (видаляємо # якщо він є)
            const targetId = this.getAttribute('href').replace('#', '');

            // Знаходимо цільовий елемент на сторінці
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Плавний скрол до цільового елемента
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });

                // Додатковий ефект - підсвічування секції
                highlightSection(targetElement);
            }
        });
    });

    // Функція для тимчасового підсвічування секції
    function highlightSection(element) {
        element.style.transition = 'background-color 0.5s ease';
        element.style.backgroundColor = 'rgba(92, 32, 32, 0.1)';

        setTimeout(() => {
            element.style.backgroundColor = '';
        }, 2000);
    }
});