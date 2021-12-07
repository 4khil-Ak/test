const Sidebar = () => {
  return (
    <div class="sidebar">
      <ul class="sidebar-list">
        <li class="list-item active">
          <a href="dashboard.html" class="list-link">
            <i class="fas fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </a>
        </li>
        <li class="list-item">
          <a href="profile.html" class="list-link">
            <i class="far fa-user"></i>
            <span>Profile</span>
          </a>
        </li>
        <li class="list-item">
          <a href="courses.html" class="list-link">
            <i class="fas fa-book"></i>
            <span>Courses</span>
          </a>
        </li>
        <li class="list-item">
          <a href="faculty.html" class="list-link">
            <i class="fas fa-chalkboard-teacher"></i>
            <span>Faculty</span>
          </a>
        </li>
        <li class="list-item">
          <a href="#" class="list-link">
            <i class="far fa-bell"></i>
            <span>Notifications</span>
          </a>
        </li>
        <li class="list-item">
          <a href="archive.html" class="list-link">
            <i class="fas fa-archive"></i>
            <span>Archived</span>
          </a>
        </li>
        <li class="list-item">
          <a href="review.html" class="list-link">
            <i class="fas fa-star"></i>
            <span>Reviews</span>
          </a>
        </li>
        <li class="list-item">
          <a href="payment.html" class="list-link">
            <i class="fas fa-credit-card"></i>
            <span>Payment</span>
          </a>
        </li>
        <li class="list-item">
          <a href="referal.html" class="list-link">
            <i class="fas fa-hands-helping"></i>
            <span>My Referals</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
