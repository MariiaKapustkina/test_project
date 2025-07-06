import './Header.scss';
import burgerIcon from "../../assets/icons/burger-icon.svg";

export default function Header({ isSidebarOpen, toggleSidebar }) {
  return (
    <header className='header'>
      <div className='header__container'>
        <div className='header__logo'>
          ALTANSCHOOL WEB COURSES
        </div>
        <nav className='header__nav'>
          <a href="/" className="header__link">HOME</a>
          <a href="/about" className="header__link">ABOUT</a>
          <a href="/shop" className="header__link">SHOP</a>
          <a href="/blog" className="header__link">BLOG</a>
          <a href="/contact" className="header__link">CONTACT</a>
        </nav>
        <button className="header__burger" aria-label="Menu" onClick={toggleSidebar}>
          {isSidebarOpen ? '✖' : <img src={burgerIcon} alt={isSidebarOpen ? "Close menu" : "Menu"} />}
        </button>
      </div>
    </header>
  )
}