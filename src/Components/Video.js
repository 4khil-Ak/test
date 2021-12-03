const Video = (props) => {
  return (
    <section class="videocover">
      <div class="row m-0">
        <div class="video col-sm-9 col-md-7">
          {props.school !== null &&
            props.school.map((data) => {
              return <iframe src={data.video}></iframe>;
            })}
        </div>
      </div>
    </section>
  );
};

export default Video;
