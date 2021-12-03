const Testimonal = (props) => {
  return (
    <section>
      <div class="container test">
        <div class="test-text">
          <h2>What Our Families are Saying</h2>
          <div
            id="carouselExampleIndicators"
            class="carousel slide container tester"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div class="carousel-inner">
              {props.school !== null &&
                props.school.map((data) => {
                  return (
                    <>
                      <div class="carousel-item active">
                        <p>{data.test1}</p>
                      </div>
                      <div class="carousel-item">
                        <p>{data.test2}</p>
                      </div>
                      <div class="carousel-item">
                        <p>{data.test1}</p>
                      </div>
                    </>
                  );
                })}
              <a
                class="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonal;
