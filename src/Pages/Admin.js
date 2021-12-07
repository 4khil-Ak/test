import React, { useState, useEffect } from "react";
import Navbar from "../Components/Admin/Navbar";
import Sidebar from "../Components/Admin/Sidebar";
import Dashboard from "../Components/Admin/Dashboard";
import "../Css/Admin.css";
import firebase from "../services/firebase";
let db = firebase.firestore();

const Admin = () => {
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
  return (
    <>
      <Navbar />
      <section>
        {/* <!-- main content --> */}
        <div class="container-fluid pt">
          <div class="flex-wrapper">
            <Sidebar />
            <div class="rt">
              <Dashboard school={school} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Admin;
