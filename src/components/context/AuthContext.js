import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Route, useNavigate } from "react-router-dom";
import { API } from "../helpers/Consts";
export const authContex = createContext();

export const authContext = React.createContext();

// let API = "http://54.245.142.239/";

// const INIT_STATE = {
//   is_auth: false,
// };

// const reducer = (state = INIT_STATE, action) => {
//   switch (action.type) {
//     case "CHECK_AUTH":
//       return { ...state, is_auth: action.payload };
//     default:
//       return state;
//   }
// };

// const AuthContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, INIT_STATE);

//   let flag = true;

//   const checkToken = async () => {
//     let access = localStorage.getItem("access");
//     if (!access) {
//       dispatch({
//         type: "CHECK_AUTH",
//         payload: false,
//       });
//     }
//     const config = {
//       headers: {
//         Authorization: Bearer $ {access},
//       },
//     };
//     try {
//       await axios.get(${API}/check-token/, config);
//       dispatch({
//         type: "CHECK_AUTH",
//         payload: true,
//       });
//     } catch (error) {
//       if (flag) {
//         refreshToken();
//         flag = false;
//         checkToken();
//       } else {
//         dispatch({
//           type: "CHECK_AUTH",
//           payload: false,
//         });
//       }
//     }

//   };

//   const refreshToken = async () => {
//     const config = {
//       headers: { "Content-Type": "multipart/form-data" },
//     };
//     let refresh = localStorage.getItem("refresh");
//     const res = await axios.post(${API}/token/refresh/, { refresh }, config);
//     const { access } = res.data;
//     localStorage.setItem("access", access);
//   };

//   return (
//     <authContext.Provider
//       value={{
//         is_auth: state.is_auth,
//         checkToken,
//       }}
//     >
//       {children}
//     </authContext.Provider>
//   );
// };

// export default AuthContextProvider;

// const API = 'http://35.239.251.89/';
// const API = "http://54.245.142.239/";

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
      const res = await axios.post(`${API}account/register/`, formData, config);
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
      await axios.post(`${API}account/activation/`, formData, config);
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
      await axios.post(`${API}account/password_reset/`, formData, config);
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
        `${API}account/password_reset/confirm/`,
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
      let res = await axios.post(`${API}account/login/`, formData, config);
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
        `${API}account/refresh/`,
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
    await axios.post(`${API}account/logout/`, form, config);
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
