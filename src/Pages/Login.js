import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import "../Css/Login.css";
import firebase from "../services/firebase";
import Input from "../ui/Input";
import { Alert } from "react-bootstrap";
// let db = firebase.firestore();

const Login = (props) => {
  let history = useHistory();
  const [error, setError] = useState();
  const [userCred, setUserCred] = useState({
    email: "",
    password: ""
  });

  const changeHandler = (event) => {
    let val = event.target.value;
    // console.log(val);
    setUserCred((prevState) => {
      return {
        ...prevState,
        [event.target.name]: val
      };
    });
  };
  console.log(userCred);

  const submitHandler = (event) => {
    event.preventDefault();
    // firebase signin auth
    console.log("Authentication");
    if (userCred.email === "") {
      setError("Enter valid email");
    } else if (userCred.password === "") {
      setError("Enter valid passwords");
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(userCred.email, userCred.password)
        .then((userCredential) => {
          // setOpen(true);
          // Signed in
          let userId = userCredential.user.uid;
          console.log(userId);

          // localStorage.setItem("userId", userId);
          // localStorage.setItem("userId", userId);
          history.replace("/admin");
          // history.replace(`/admin`);
          console.log("success");
        })
        .catch((e) => {
          console.log(e.code);
          if (e.code === "auth/wrong-password") {
            setError("Incorrect password. Try again.");
          } else if (e.code === "auth/network-request-failed") {
            setError("Internet connection is down!!!");
          } else {
            setError("User doesn't exist. Please do register.");
          }
        });
    }
  };

  return (
    <div className="login">
      {error && <Alert variant="danger">{error}</Alert>}
      <form onSubmit={submitHandler}>
        <h2 style={{ paddingTop: "20px" }}>Admin Login</h2>
        <Input
          type="text"
          name="email"
          placeholder="Email"
          onChange={changeHandler}
          value={userCred.email}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          onChange={changeHandler}
          value={userCred.password}
        />
        <button type="submit" className="button">
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
