function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a className="navbar__brand" href="#home">
          Bilotto Studio
        </a>
        <nav className="navbar__menu">
          <a className="navbar__link" href="#home">
            Home
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
