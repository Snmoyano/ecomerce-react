import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./styles/login.css";

const LoginScreen = () => {
  const { handleSubmit, register, reset } = useForm();
  const [isLogged, setIsLogged] = useState(false);

  const submit = (data) => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/users/login`;
    axios
      .post(URL, data)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.data.token);
        setIsLogged(true);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLogged(false);
  };

  if (isLogged) {
    return (
      <div className="container__form-logout">
        <h2 className="logout__title">User Logged ✅</h2>
        <button className="logout__btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="login__main">
      <div className="container__form">
        <h2 className="title__login">
          Welcome!Enter your email and password to continue
        </h2>
        <div className="testing__acount">
          <h3 className="testing__acount-title">Test data</h3>
          <p className="testing__acount-icons">
            <i className="fa-regular fa-envelope"></i>
            <span>jhon@gmail.com</span>
          </p>
          <p className="testing__acount-icons">
            <i className="fa-solid fa-lock"></i>
            <span>john1234</span>
          </p>
        </div>
        <form onSubmit={handleSubmit(submit)}>
          <div className="container__input">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" {...register("email")} />
          </div>

          <div className="container__input">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" {...register("password")} />
          </div>

          <button className="btn__login">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
