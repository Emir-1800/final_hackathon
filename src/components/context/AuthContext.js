import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Route, useNavigate } from "react-router-dom";
import { API2 } from "../helpers/Consts";
export const authContext = createContext();

// const API = 'http://35.239.251.89/';

export const useAuth = () => {
  return useContext(authContext);
};

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const register = async (user) => {
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    let formData = new FormData();
    formData.append("email", user.email);
    formData.append("password", user.password);

    try {
      const res = await axios.post(
        `${API2}account/register/`,
        formData,
        config
      );
    } catch (e) {
      console.log(e);
      setError("error occured");
    }
  };

  async function activationCode(value) {
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    let formData = new FormData();
    console.log(value);
    formData.append("activation_code", value);

    try {
      await axios.post(`${API2}account/activation/`, formData, config);
      navigate("/login");
    } catch (error) {}
  }
  async function forgotPassCode(value) {
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    let formData = new FormData();
    formData.append("email", value);
    console.log(value);
    navigate("/recovery");
    try {
      await axios.post(`${API2}account/password_reset/`, formData, config);
    } catch (error) {}
  }

  const [messageNewPassword, setmessageNewPassword] = useState("");
  async function newPassword(activationCode, password, mail) {
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    let formData = new FormData();
    console.log(activationCode, password);
    formData.append("password", password);
    formData.append("token", activationCode);
    formData.append("email", mail);

    try {
      await axios.post(
        `${API2}account/password_reset/confirm/`,
        formData,
        config
      );
      navigate("/login");
    } catch (error) {
      let pass = JSON.parse(error.request.responseText);
      console.log(error);
      setmessageNewPassword(pass.password[0]);
    }
  }

  useEffect(() => {
    setUserName(localStorage.getItem("username"));
  }, []);

  const [userName, setUserName] = useState("");

  async function login(username, password) {
    console.log(username, password);
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    let formData = new FormData();
    formData.append("email", username);
    formData.append("password", password);

    try {
      let res = await axios.post(`${API2}account/login/`, formData, config);
      console.log(res);
      localStorage.setItem("token", JSON.stringify(res.data));
      localStorage.setItem("username", username);
      setUser(username);

      navigate("/");

      setUserName(localStorage.getItem("username"));
    } catch (error) {
      setError("error occured");
    }
  }

  async function checkAuth() {
    let token = JSON.parse(localStorage.getItem("token"));
    try {
      const Authorization = `Bearer ${token.access}`;

      let res = await axios.post(
        `${API2}account/refresh/`,
        {
          refresh: token.refresh,
        },
        {
          headers: { Authorization },
        }
      );

      localStorage.setItem(
        "token",
        JSON.stringify({
          refresh: token.refresh,
          access: res.data.access,
        })
      );

      let userName = localStorage.getItem("username");
      setUserName(userName);
    } catch (error) {
      logout();
    }
  }

  async function logout() {
    let token = JSON.parse(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token.access}`,
      },
    };

    let form = new FormData();
    form.append("refresh", token.refresh);
    await axios.post(`${API2}account/logout/`, form, config);
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setUserName("");
  }

  return (
    <authContext.Provider
      value={{
        register,
        login,
        user,
        error,
        checkAuth,
        logout,
        activationCode,
        userName,
        forgotPassCode,
        newPassword,
        userName,
        messageNewPassword,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
