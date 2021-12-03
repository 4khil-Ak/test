import React, { useState, useEffect } from "react";
import "../Css/User.css";
import Hero from "../Components/Hero";
import Card from "../Components/Card";
import About from "../Components/About";
import Video from "../Components/Video";
import Visit from "../Components/Visit";
import Preschool from "../Components/Preschool";
import Curriculum from "../Components/Curriculum";
import Gallery from "../Components/Gallery";
import Testimonal from "../Components/Testimonal";
import Contact from "../Components/Contact";

import firebase from "../services/firebase";
let db = firebase.firestore();

const Home = () => {
  const [school, setSchool] = useState(null);
  useEffect(() => {
    console.log("useeffect");
    let list = [];
    db.collection("school")
      .get()
      .then((data) => {
        data.forEach((doc) => {
          list.push(doc.data());
        });
        setSchool(list);
      });
  }, []);
  // useEffect(()=> {
  //     db.collection("school").get().then((doc)=>{
  //         doc.push(List)
  //     })
  // })
  // const school = () => {
  //     	db.collection("school")
  // }

  const Ui = () => {
    return (
      <div class="foot-img">
        <img src="/images/foot.jpg" />
      </div>
    );
  };

  const Footer = () => {
    return (
      <footer>
        <div class="ft-col">
          <h2>Copyrights©Divicare </h2>
        </div>
      </footer>
    );
  };

  return (
    <>
      <section class="head">
        <Hero school={school} />
        <Card />
      </section>
      <About school={school} />
      <Video school={school} />
      <Visit />
      <Preschool />
      <Curriculum />
      <Gallery />
      <Testimonal school={school} />
      <Contact school={school} />
      <Ui />
      <Footer />
    </>
  );
};

export default Home;
