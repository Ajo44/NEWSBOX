import { apikey, baseurl } from "../Urls";

function Navbar() {
  function Hav(val) {
    let val;
    const url = `${baseurl}/top-headlines?country=${au}&apiKey=${apikey}`;
  }
  return (
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        NEWSBOX
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              BUSINESS
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              ENTERTAINMENT
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              GENERAL
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              HEALTH
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              SCIENCE
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              SPORTS
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              TECHNOLOGY
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              COUNTRIES
            </a>
            <div class="dropdown-menu " aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#" onClick={Hav("au")}>
                AU
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">
                US
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">
                RU
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">
                NZ
              </a>
            </div>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
export default Navbar;
