const About = (props) => {
  return (
    <section id="#About">
      <div class="about container">
        <h2>About Us</h2>
        {props.school !== null &&
          props.school.map((data) => {
            return <p>{data.about}</p>;
          })}
      </div>
    </section>
  );
};

export default About;
