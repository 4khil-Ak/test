import React, { useState } from "react";
// import { useHistory } from "react-router";
import "../Css/Login.css";
import firebase from "../services/firebase";
import Input from "../ui/Input";
import { Alert } from "react-bootstrap";
let db = firebase.firestore();

const Signin = (props) => {
  // const history = useHistory();
  const [error, setError] = useState();
  const [userDetails, setUserDetails] = useState({
    id: "",
    email: "",
    password: ""
  });

  const changeHandler = (event) => {
    let val = event.target.value;
    // console.log(val);
    setUserDetails((prevState) => {
      return {
        ...prevState,
        [event.target.name]: val
      };
    });
    console.log(userDetails);
  };

  const signUpAuth = (event) => {
    event.preventDefault();
    console.log("Authentication");
    // console.log(userDetails.password.length);
    if (userDetails.password === "") {
      setError("Enter valid passwords");
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(
          userDetails.email.trim(),
          userDetails.password.trim()
        )
        .then((userCred) => {
          // const user = firebase.auth().currentUser;
          // user.updateProfile({
          //   displayName: userDetails.name,
          //   photoURL: "https://www.w3schools.com/howto/img_avatar.png"
          // });

          // signed-in
          const docId = userCred.user.uid;
          // store other data's in firestore
          db.collection("user")
            .doc(docId)
            .set({
              id: docId,
              email: userDetails.email,
              password: userDetails.password
            })
            .then((docRef) => {
              console.log("successfully updated to firestore.");
              // history.push("/login");
            })
            .catch((e) => console.log(e, "firestore"));
        })
        .catch((e) => console.log(e, "create_authentication"));
      setUserDetails({
        email: "",
        password: ""
      });
    }
  };

  return (
    <div className="login">
      {error && <Alert variant="danger">{error}</Alert>}
      <form onSubmit={signUpAuth}>
        <h2>Admin Signup</h2>
        <Input
          type="text"
          name="email"
          placeholder="Email"
          onChange={changeHandler}
          value={userDetails.email}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          onChange={changeHandler}
          value={userDetails.password}
        />

        <button type="submit" className="button">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signin;
