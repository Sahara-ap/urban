/* eslint-disable jsx-a11y/anchor-is-valid */
// import "./App.css";
import "./App.scss";

function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="header__top">
          <div className="header__container container">
            <div className="header__top-links">
              <a href="#" className="header__top-link">
                Доставка и оплата
              </a>
              <a href="#" className="header__top-link">
                Гарантия и возврат
              </a>
              <a href="#" className="header__top-link">
                EN
              </a>
            </div>
          </div>
        </div>

        <div className="header__main">
          <div className="header__container container header__main-inner">
            <div className="header__logo logo-wrapper">
              <img
                src="/logo/logo-black.png"
                alt="Urban Dwelling"
                className="header__logo-img logo-img"
              />
            </div>

            <nav className="header__nav">
              <a href="#" className="header__nav-link">
                Каталог
              </a>
              <a href="#" className="header__nav-link">
                О компании
              </a>
              <a href="#" className="header__nav-link">
                Контакты
              </a>
            </nav>

            <div className="header__actions">
              <div className="header__search">
                <input
                  type="text"
                  className="header__search-input"
                  placeholder="Лампы"
                />
                <button className="header__search-btn">
                  <svg
                    width="22"
                    height="23"
                    viewBox="0 0 22 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.1931 20.1421C5.18518 20.1421 1.10791 16.0648 1.10791 11.0568C1.10791 6.04889 5.18518 1.97162 10.1931 1.97162C15.2011 1.97162 19.2784 6.04889 19.2784 11.0568C19.2784 16.0648 15.2011 20.1421 10.1931 20.1421ZM10.1931 3.30116C5.912 3.30116 2.43746 6.78457 2.43746 11.0568C2.43746 15.3291 5.912 18.8125 10.1931 18.8125C14.4743 18.8125 17.9488 15.3291 17.9488 11.0568C17.9488 6.78457 14.4743 3.30116 10.1931 3.30116Z"
                      fill="currentColor"
                    />
                    <path
                      d="M19.5 21.0284C19.3316 21.0284 19.1632 20.9664 19.0302 20.8334L17.2575 19.0607C17.0004 18.8036 17.0004 18.3782 17.2575 18.1211C17.5145 17.8641 17.94 17.8641 18.197 18.1211L19.9698 19.8939C20.2268 20.1509 20.2268 20.5764 19.9698 20.8334C19.8368 20.9664 19.6684 21.0284 19.5 21.0284Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
              <button className="header__cart-btn">
                <svg
                  width="21"
                  height="27"
                  viewBox="0 0 21 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.16673 9.9C1.14893 8.59317 2.19325 7.51901 3.50006 7.5H17.5001C18.8069 7.51901 19.8512 8.59317 19.8334 9.9V20.7C19.8697 23.314 17.7807 25.4627 15.1667 25.5H5.83339C3.21945 25.4627 1.13039 23.314 1.16673 20.7V9.9Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.1667 11.1V6.3C15.203 3.68604 13.114 1.53729 10.5 1.5C7.88608 1.53729 5.79701 3.68604 5.83335 6.3V11.1"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="header__cart-text">Корзина</span>
                <span className="header__cart-counter">3</span>
              </button>
            </div>

            <div className="header__burger-menu">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="8.33301"
                  y="24.2002"
                  width="23.3333"
                  height="1.6"
                  fill="#0D0B26"
                />
                <rect
                  x="8.33301"
                  y="19.2002"
                  width="23.3333"
                  height="1.6"
                  fill="#0D0B26"
                />
                <rect
                  x="8.33301"
                  y="14.2002"
                  width="23.3333"
                  height="1.6"
                  fill="#0D0B26"
                />
              </svg>
            </div>
          </div>
        </div>
      </header>
      <main className="main">
        <div className="container">
          <h1 className="page-title">Результаты поиска</h1>
          <ul className="main__product-list">
            <li className="main__product-card">
              <a href="#" className="product-card__image-block">
                <div className="product-card__image-wrapper">
                  <img
                    src="/products/product2.jpg"
                    alt="изображение продукта"
                  />
                </div>
                <div className="product-card__promo">Акция</div>
                <div className="product-card__more-btn-wrapper">
                  <button className="product-card__more-btn">Подробнее</button>
                </div>
              </a>
              <div className="product-card__info">
                <span className="product-card__name">
                  Встраиваемый светильник Markt
                </span>
                <p className="product-card__price-wrapper">
                  <span className="product-card__actual-price">3490 ₽</span>
                  <span className="product-card__base-price">5060 ₽</span>
                </p>
              </div>
            </li>
            <li className="main__product-card">
              <a href="#" className="product-card__image-block">
                <div className="product-card__image-wrapper">
                  <img
                    src="/products/product1.jpg"
                    alt="изображение продукта"
                  />
                </div>
                <div className="product-card__promo">Акция</div>
                <div className="product-card__more-btn-wrapper">
                  <button className="product-card__more-btn">Подробнее</button>
                </div>
              </a>
              <div className="product-card__info">
                <span className="product-card__name">
                  Встраиваемый светильник Markt
                </span>
                <p className="product-card__price-wrapper">
                  <span className="product-card__actual-price">3490 ₽</span>
                  <span className="product-card__base-price">5060 ₽</span>
                </p>
              </div>
            </li>
            <li className="main__product-card">
              <a href="#" className="product-card__image-block">
                <div className="product-card__image-wrapper">
                  <img
                    src="/products/product3.jpg"
                    alt="изображение продукта"
                  />
                </div>
                <div className="product-card__promo">Акция</div>
                <div className="product-card__more-btn-wrapper">
                  <button className="product-card__more-btn">Подробнее</button>
                </div>
              </a>
              <div className="product-card__info">
                <span className="product-card__name">
                  Встраиваемый светильник Markt
                </span>
                <p className="product-card__price-wrapper">
                  <span className="product-card__actual-price">3490 ₽</span>
                  <span className="product-card__base-price">5060 ₽</span>
                </p>
              </div>
            </li>
            <li className="main__product-card">
              <a href="#" className="product-card__image-block">
                <div className="product-card__image-wrapper">
                  <img
                    src="/products/product2.jpg"
                    alt="изображение продукта"
                  />
                </div>
                <div className="product-card__promo">Акция</div>
                <div className="product-card__more-btn-wrapper">
                  <button className="product-card__more-btn">Подробнее</button>
                </div>
              </a>
              <div className="product-card__info">
                <span className="product-card__name">
                  Встраиваемый светильник Markt
                </span>
                <p className="product-card__price-wrapper">
                  <span className="product-card__actual-price">3490 ₽</span>
                  <span className="product-card__base-price">5060 ₽</span>
                </p>
              </div>
            </li>
            <li className="main__product-card">
              <a href="#" className="product-card__image-block">
                <div className="product-card__image-wrapper">
                  <img
                    src="/products/product1.jpg"
                    alt="изображение продукта"
                  />
                </div>
                <div className="product-card__promo">Акция</div>
                <div className="product-card__more-btn-wrapper">
                  <button className="product-card__more-btn">Подробнее</button>
                </div>
              </a>
              <div className="product-card__info">
                <span className="product-card__name">
                  Встраиваемый светильник Markt
                </span>
                <p className="product-card__price-wrapper">
                  <span className="product-card__actual-price">3490 ₽</span>
                  <span className="product-card__base-price">5060 ₽</span>
                </p>
              </div>
            </li>
            <li className="main__product-card">
              <a href="#" className="product-card__image-block">
                <div className="product-card__image-wrapper">
                  <img
                    src="/products/product3.jpg"
                    alt="изображение продукта"
                  />
                </div>
                <div className="product-card__promo">Акция</div>
                <div className="product-card__more-btn-wrapper">
                  <button className="product-card__more-btn">Подробнее</button>
                </div>
              </a>
              <div className="product-card__info">
                <span className="product-card__name">
                  Встраиваемый светильник Markt
                </span>
                <p className="product-card__price-wrapper">
                  <span className="product-card__actual-price">3490 ₽</span>
                  <span className="product-card__base-price">5060 ₽</span>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </main>
      <footer className="footer">
        <div className="container footer__grid">
          <div className="footer__logo-wrapper logo-wrapper">
            <img
              src="/logo/logo-white.png"
              alt="Urban Dwelling"
              className="logo-img"
            />
          </div>
          <div className="footer__address">
            <span className="footer__title">Адрес</span>
            <span className="footer__text">Текст, Текст, Текст</span>
          </div>
          <div className="footer__contacts">
            <span className="footer__title">Контакты</span>
            <span className="footer__text email">
              Email: urban.dwelling@yandex.com
            </span>
            <span className="footer__text tel">Телефон: 8 (999) 999-99-99</span>
          </div>
          <div className="footer__services">
            <span className="footer__title">Услуги</span>
            <ul className="footer__services-list">
              <li className="footer__text">
                <a href="#">Каталог</a>
              </li>
              <li className="footer__text">
                <a href="#">О компании</a>
              </li>
              <li className="footer__text">
                <a href="#">Контакты</a>
              </li>
              <li className="footer__text">
                <a href="#">Доставка и оплата</a>
              </li>
              <li className="footer__text">
                <a href="#">Гарантия и возврат</a>
              </li>
            </ul>
          </div>
          <div className="footer__docs">
            <a href="#" download>
              Публичная оферта
            </a>
            <a href="#" download>
              Политика персональных данных
            </a>
          </div>
          <div className="footer__captcha">
            <span className="captcha">
              Этот сайт защищен от спама службой reCAPTCHA Google.{" "}
              <a href="#">
                Политика конфиденциальности/Условия предоставления услуг
              </a>
            </span>
          </div>
          <div className="footer__payments">
            <li>
              <img src="/mir-card.png" alt="изображение карты Мир" />
            </li>
            <li>
              <img src="/visa-card.png" alt="изображение карты Мир" />
            </li>
            <li>
              <img src="/master-card.png" alt="изображение карты Мир" />
            </li>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
