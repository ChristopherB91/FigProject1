import bg from "../assets/Shop&Theme.svg";
import "../App.css";

function Header() {
  return (
    <header>
      <div className="top-header">
        100TL ve Üzeri Siparişlerde Ücretsiz Kargo Fırsatı
      </div>
      <nav>
        <b className="NavNames">
          <li>ERKEK</li>
          <li>KADIN</li>
          <li>ÇOCUK</li>
        </b>
        <p className="Logo">
          <b>SHOP & THEME</b>
        </p>
        <b className="Icons">
          <p>Search Icon</p>
          <p>Account Icon</p>
          <p>Cart Icon</p>
        </b>
      </nav>
      <b className="container">
        <p>
          EN GÜZEL SPOR AYAKKABILAR
        </p>
        <p>
          SHOP'DA!
        </p>
        <button>
          ALIŞVERİŞE BAŞLA
        </button>
      </b>
    </header>
  );
}

export default Header;