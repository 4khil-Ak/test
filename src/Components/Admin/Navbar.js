const Navbar = () => {
  return (
    <section class="nav-bar">
      {/* <!-- Header Navbar --> */}
      <div class="navbar admin-nav">
        <div class="logo">
          <img class="logoimg" src="/images/header-logo2.png" alt="Logo" />
          <button class="sidebar collapsible" type="button">
            <i class="fas fa-bars"></i>
          </button>
          <div class="content"></div>
        </div>
        <ul class="nav-item">
          <li class="list-item">
            <button type="button" class="btn collapsible">
              <i class="far fa-bell"></i>
            </button>
            <div class="content">
              <div class="flex">
                <p>Notifications</p>
                <small>Clear All</small>
              </div>
              <div class="notification">
                <p class="message">
                  Hi, How are you? What about our next meeting, Hi, How are you?
                  What about our next meeting
                </p>
                <p class="message">
                  Hi, How are you? What about our next meeting
                </p>
                <p class="message">
                  Hi, How are you? What about our next meeting
                </p>
                <p class="message">
                  Hi, How are you? What about our next meeting, Hi, How are you?
                  What about our next meeting
                </p>
                <p class="message">
                  Hi, How are you? What about our next meeting
                </p>
                <p class="message">
                  Hi, How are you? What about our next meeting
                </p>
              </div>
              <div class="extra"></div>
            </div>
          </li>
          <li class="list-item">
            <button type="button" class="btn collapsible">
              <div class="flex">
                <img class="img-fluid" src="/images/15.jpg" />
                <p class="aname">
                  Eren Jeager<i class="fas fa-angle-down"></i>
                </p>
              </div>
            </button>
            <div class="content style2">
              <ul>
                <li class="inner-list">
                  <p>Welcome !</p>
                </li>
                <li class="inner-list">
                  <a href="#" class="list-link">
                    <i class="far fa-user"></i>My Account
                  </a>
                </li>
                <li class="inner-list">
                  <a href="#" class="list-link">
                    <i class="fas fa-cog"></i>Settings
                  </a>
                </li>
                <li class="inner-list">
                  <a href="#" class="list-link">
                    <i class="fas fa-sign-out-alt"></i>Logout
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="list-item">
            <a class="list-link" href="#">
              <i class="fas fa-cog"></i>
            </a>
          </li>
        </ul>
        {/* <script>
            var coll = document.getElementsByClassName("collapsible");
            var i;
                
            for (i = 0; i < coll.length; i++) {
                coll[i].addEventListener("click", function() {
                    this.classList.toggle("active");
                    var content = this.nextElementSibling;
                    if (content.style.display === "block") {
                      content.style.display = "none";
                    } else {
                      content.style.display = "block";
                    }
                    if (content.style.maxHeight){
                      content.style.maxHeight = null;
                    } else {
                      content.style.maxHeight = content.scrollHeight + "px";
                    }
                });
            }
        </script> */}
      </div>
      {/* <!-- Header Ends --> */}
    </section>
  );
};

export default Navbar;
