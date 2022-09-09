function Header() {
  return (
    <div>
      <nav className="navbar  navbar-expand-sm navbar-dark bg-dark">
        <a href="/books" className="navbar-brand mb-0 h1">
          <img
            className="d-inline-block align-top"
            src="https://www.pngitem.com/pimgs/m/300-3008868_thumb-image-black-and-white-book-logo-design.png"
            width={30}
            height={30}
          />
          Book
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a href="/dashboard" className="nav-link active">
                Dashboard
              </a>
            </li>
            <li className="nav-item active">
              <a href="/dashboard" className="nav-link">
                Popular
              </a>
            </li>
            <li className="nav-item active">
              <a href="/dashboard" className="nav-link disabled">
                Wishlist
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                href="/dashboard"
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aira-expanded="false"
              >
                Something
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Feature 1
                  </a>
                  <a className="dropdown-item" href="#">
                    Feature 2
                  </a>
                  <a className="dropdown-item" href="#">
                    Feature 3
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
