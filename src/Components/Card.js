const Card = () => {
  return (
    <>
      <div class="cards row">
        <div class="card col-md-3">
          <div class="cardin">
            <div class="round ron1 ">
              <i class="fa fa-pencil-square-o icon" aria-hidden="true"></i>
            </div>
            <h2>Enrollement </h2>
            <p>
              It is a long established fact that a reader will be distracted{" "}
            </p>
          </div>
        </div>
        <div class="card card2 col-md-3">
          <div class="cardin">
            <div class="round ron2 ">
              <i class="fa fa-file icon" aria-hidden="true"></i>
            </div>
            <h2>Curriculam </h2>
            <p>
              It is a long established fact that a reader will be distracted{" "}
            </p>
          </div>
        </div>
        <div class="card  col-md-3">
          <div class="cardin">
            <div class="round ron3 icon">
              <i class="fa fa-calendar-o"></i>
            </div>
            <h2>Programs</h2>
            <p>
              It is a long established fact that a reader will be distracted{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
