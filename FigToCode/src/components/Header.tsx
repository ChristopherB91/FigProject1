import Account from "../assets/Account-Icon.svg";
import Cart from "../assets/Cart-Icon.svg";
import Search from "../assets/Search-Icon.svg";
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
          <img src={Search} alt="Search Icon" />
          <img src={Account} alt="Account Icon" />
          <img src={Cart} alt="Cart" />
        </b>
      </nav>
      <b className="container">
        <p>EN GÜZEL SPOR AYAKKABILAR</p>
        <p>SHOP'DA!</p>
        <button>ALIŞVERİŞE BAŞLA</button>
      </b>
    </header>
  );
}

export default Header;
