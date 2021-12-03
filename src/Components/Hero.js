import { Link } from "react-router-dom";

const Hero = (props) => {
  return (
    <div class="hero" id="#Home">
      <nav class="navbar navbar-expand-md navbar-dark">
        {/* <!-- Brand --> */}
        <div class="headerlogo">
          <img class="img-fluid" src="/images/mob.png" />
        </div>

        {/* <!-- Toggler/collapsibe Button --> */}
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        {/* <!-- Navbar links --> */}
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#Home">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#About">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#Gallery">
                Gallery
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#curriculam">
                Curriculam
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">
                Contact us
              </a>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to={`/adminlogin`}>
                Admin
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div class="container">
        <img src="/images/text.png" class="pretext" />
      </div>

      {props.school !== null &&
        props.school.map((data) => {
          return (
            <div class="texter container">
              <h2>{data.name}</h2>
              <p>{data.intro}</p>
              <button type="button" class="btn">
                GET STARTED
              </button>
            </div>
          );
        })}

      {/* <div class="texter container">
                <h2>Divi Daycare</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking
                    at its layout.It is a long established fact that a reader will be distracted by the readable content of a page
                    when looking at its layout.</p>
                <button type="button" class="btn">GET STARTED</button>
            </div> */}
      <img
        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIydnciIHZpZXdCb3g9IjAgMCAxMjgwIDE0MCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmZmZmZmIj48cGF0aCBkPSJNMTI4MCA4NmMtMTkuOS0xNy4yMS00MC4wOC0zOS42OS03OS44OS0zOS42OS01Ny40OSAwLTU2LjkzIDQ2LjU5LTExNSA0Ni41OS01My42MSAwLTU5Ljc2LTM5LjYyLTExNS42LTM5LjYyQzkyMy43IDUzLjI3IDkyNC4yNiA4NyA4NTMuODkgODdjLTg5LjM1IDAtNzguNzQtODctMTg4LjItODdDNTU0IDAgNTQzLjk1IDEyMS44IDQyMy4zMiAxMjEuOGMtMTAwLjUyIDAtMTE3Ljg0LTU0Ljg4LTE5MS41Ni01NC44OC03Ny4wNiAwLTEwMCA0OC41Ny0xNTEuNzUgNDguNTctNDAgMC02MC0xMi4yMS04MC0yOS41MXY1NEgxMjgweiIvPjwvZz48L3N2Zz4"
        class="wave"
      />
      <img src="/images/1.png" class="house" />
    </div>
  );
};

export default Hero;
