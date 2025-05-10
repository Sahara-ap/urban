import "./App.css";

function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="header__top">
          <div className="header__container">
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
          <div className="header__container header__main-inner">
            <div className="header__logo">
              <img
                src="/logo.svg"
                alt="Urban Dwelling"
                className="header__logo-img"
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
                <button className="header__search-btn">🔍</button>
              </div>
              <button className="header__cart-btn">
                👜<span className="header__cart-text">Корзина</span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
