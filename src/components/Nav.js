import './Nav.scss';

const Nav = () => {
  return (
    <div>
      <nav class="navbar fixed-top navbar-expand-lg custom">
        <div class="container-fluid">
          <a class="navbar-brand aa" href="/">
            Heath Care
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="<%=url%>">
                  Health-Check
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="/doctors">
                  Doctors
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/about">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
