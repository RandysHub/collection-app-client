const Search = (props) => {
  return (
    <div>
      <nav className="navbar  navbar-expand-sm navbar-dark bg-dark bg-gradient">
        <a href="/books" className="navbar-brand mb-0 h1">
          <img
            className="d-inline-block align-top"
            src="https://toppng.com/uploads/preview/experience-the-discussion-online-library-book-logo-11562996058ru4peza6zq.png"
            width={30}
            height={30}
          />
          Bookmark
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
                Category
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Comic/Manga
                  </a>
                  <a className="dropdown-item" href="#">
                    Fiction
                  </a>
                  <a className="dropdown-item" href="#">
                    Nonfiction
                  </a>
                  <a className="dropdown-item" href="#">
                    Kids
                  </a>
                  <a className="dropdown-item" href="#">
                    Teens/YA
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="search">
          <form className="d-flex" onSubmit={props.doSearch}>
            <input
              list="datalistOptions"
              className="form-control-sm ms-2 w-200 me-2"
              onChange={props.handleSearch}
              type="text"
            />
            <datalist id="datalistOptions">
              <option value="Haikyu" />
              <option value="Berserk" />
              <option value="Harry Potter" />
              <option value="Atomic Habits" />
              <option value="The Alchemists" />
            </datalist>
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
            <select
              className="form-select  w-25"
              defaultValue="Sort"
              onChange={props.handleSort}
            >
              <option disabled value="Sort">
                Sort
              </option>
              <option value="Newest">Newest</option>
              <option value="Oldest">Oldest</option>
            </select>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Search;
