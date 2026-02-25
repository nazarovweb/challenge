import './Navbar.css'
const Navbar = () => {
  return (
       <header className="nav">
      <div className="nav__container">
        <a className="nav__logo" href="/">Logo</a>

        <nav className="nav__links">
          <a className="nav__link" href="#home">Bosh sahifa</a>
          <a className="nav__link" href="#products">Mahsulotlar</a>
          <a className="nav__link" href="#about">Biz haqimizda</a>
          <a className="nav__link" href="#contact">Aloqa</a>
        </nav>

        <button className="nav__btn">Log in</button>
      </div>
    </header>
  )
}

export default Navbar