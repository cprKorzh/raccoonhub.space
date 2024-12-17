// src/
// ├── app/                        // Глобальные настройки приложения
// │   ├── store.js               // Настройка Redux store, подключение middleware и т.д.
// │   └── rootReducer.js         // Главный редьюсер, который объединяет все слайсы
// │
// ├── pages/                      // Основные страницы приложения
// │   ├── HomePage/              // Главная страница
// │   │   ├── index.js           // Точка входа страницы для упрощённого импорта
// │   │   ├── HomePage.jsx       // Компонент главной страницы
// │   │   └── HomePage.module.css // Стили для главной страницы
// │   ├── ProductPage/           // Страница деталей товара
// │   │   ├── index.js
// │   │   ├── ProductPage.jsx
// │   │   └── ProductPage.module.css
// │   ├── CartPage/              // Страница корзины
// │   │   ├── index.js
// │   │   ├── CartPage.jsx
// │   │   └── CartPage.module.css
// │   └── CheckoutPage/          // Страница оформления заказа
// │       ├── index.js
// │       ├── CheckoutPage.jsx
// │       └── CheckoutPage.module.css
// │
// ├── widgets/                    // Повторяющиеся UI-блоки, используемые на нескольких страницах
// │   ├── Header/                // Шапка сайта
// │   │   ├── index.js
// │   │   ├── Header.jsx
// │   │   └── Header.module.css
// │   ├── Footer/                // Подвал сайта
// │   │   ├── index.js
// │   │   ├── Footer.jsx
// │   │   └── Footer.module.css
// │   └── ProductList/           // Виджет со списком товаров
// │       ├── index.js
// │       ├── ProductList.jsx
// │       └── ProductList.module.css
// |
// ├── features/                   // Конкретные функции приложения, каждая из которых автономна
// │   ├── Product/               // Функционал работы с товарами
// │   │   ├── index.js           // Экспортирует компоненты и логику фичи
// │   │   ├── ProductSlice.js    // Redux slice для управления состоянием товаров
// │   │   └── Product.module.css
// │   ├── Cart/                  // Функционал работы с корзиной
// │   │   ├── index.js
// │   │   ├── CartSlice.js       // Redux slice для управления состоянием корзины
// │   │   └── Cart.module.css
// │   └── Auth/                  // Функционал авторизации пользователя
// │       ├── index.js
// │       ├── AuthSlice.js       // Redux slice для состояния пользователя (авторизация, токены и т.д.)
// │       └── Auth.module.css
// │
// ├── processes/                  // Сложные бизнес-процессы, объединяющие фичи и виджеты
// │   ├── UserRegistration/      // Процесс регистрации пользователя
// │   │   ├── index.js
// │   │   ├── UserRegistration.jsx // Компонент регистрации с формами и валидацией
// │   │   └── UserRegistration.module.css
// │   ├── AddToCart/             // Процесс добавления товара в корзину
// │   │   ├── index.js
// │   │   ├── AddToCart.jsx      // Компонент добавления в корзину, включает логику для Cart
// │   │   └── AddToCart.module.css
// │   └── CheckoutProcess/       // Процесс оформления заказа
// │       ├── index.js
// │       ├── CheckoutProcess.jsx // Компонент оформления заказа с интеграцией оплаты
// │       └── CheckoutProcess.module.css
// │
// ├── shared/                     // Общие компоненты, которые используются по всему проекту
// │   └── components/
// │       ├── Button/            // Кнопка, переиспользуемая по всему приложению
// │       │   ├── index.js
// │       │   ├── Button.jsx
// │       │   └── Button.module.css
// │       ├── Input/             // Поле ввода, переиспользуемое в формах
// │       │   ├── index.js
// │       │   ├── Input.jsx
// │       │   └── Input.module.css
// │       └── Modal/             // Модальное окно для отображения уведомлений и подтверждений
// │           ├── index.js
// │           ├── Modal.jsx
// │           └── Modal.module.css
// │
// └── utils/                      // Утилитарные функции и хелперы
// ├── api.js                 // API-методы для взаимодействия с сервером
// └── formatPrice.js         // Функция для форматирования цен, чтобы они выглядели красиво