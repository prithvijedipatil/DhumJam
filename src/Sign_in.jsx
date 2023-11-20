import React, { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { setData, setUser } from "./Redux/dataslice";
import { Button } from "@mui/material";

const Sign_in = () => {
  const navigate = useNavigate();
  const id = useSelector((state) => state.User.user.id);

  const dispatch = useDispatch();
  const [Visible, setVisible] = useState(false);
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  if (id) {
    navigate(`/${id}`);
  }

  const signin = (e) => {
    e.preventDefault();
    console.log("signed-in");
    console.log(Username);
    console.log(Password);
    axios
      .post("https://stg.dhunjam.in/account/admin/login", {
        username: Username,
        password: Password,
      })
      .then((response) => {
        console.log(response);
        console.log(response.data.data.id);
        dispatch(setUser(response.data.data.id));

        navigate(`/${response.data.data.id}`);
      })
      .catch((error) => {
        console.log(error);
        alert("please Check your email and password");
      });
  };
  return (
    <div className="signinContainer">
      <h1>Venue Admin Login</h1>
      <form className="form">
        <input
          type="text"
          value={Username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="username"
        />
        <div className="pwd">
          <input
            type={Visible ? "text" : "password"}
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="password"
          />

          <div className="eyeToggle">
            {Visible ? (
              <IoMdEye
                style={{ cursor: "pointer" }}
                onClick={() => setVisible(!Visible)}
              />
            ) : (
              <IoMdEyeOff
                style={{ cursor: "pointer", fontSize: "larger" }}
                onClick={() => setVisible(!Visible)}
              />
            )}
          </div>
        </div>

        <Button
          className="saveButtonlogin"
          variant="contained"
          style={{ cursor: "pointer" }}
          onClick={(e) => signin(e)}
        >
          Sign in
        </Button>
      </form>

      <p style={{ textDecoration: "underline", cursor: "pointer" }}>
        New Registration?
      </p>
    </div>
  );
};

export default Sign_in;
