import React from "react";
import Signup from "./Signup";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { VscHistory } from "react-icons/vsc";
import { IoLockClosedOutline } from "react-icons/io5";
// import "./main.css";
import { userAuth } from "../../Redux/Product Reducer/action";
import { useDispatch } from "react-redux";

let token = localStorage.getItem("token") || "";
let user = JSON.parse(localStorage.getItem("user")) || {};

const Signin = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [toggle, settoggle] = useState(true);
  const [inputType, setInputType] = useState("password");
  const navigate = useNavigate();
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const handleClick = (input) => {
    settoggle(input);
    if (input) {
      setInputType("password");
    } else {
      setInputType("text");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(userAuth(data, navigate));
    // try {
    //   const url = "http://localhost:8080/api/auth";
    //   const res = await axios.post(url, data);

    //   token = res.data.message;
    //   user = res.data.userdata;
    //   localStorage.setItem("token", token);
    //   localStorage.setItem("user", JSON.stringify(user));
    //   console.log(res);
    //   alert(res.data.message);
    //   // navigate("/")
    //   // window.location = "/";

    //   console.log(res.message);
    // } catch (err) {
    //   console.log(err);
    // }
  };
  return (
    <div className="Box">
      <div className="Navdiv">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHFsACrLJwsbFpPdb7-hzK71ROgmb7PMFUgSbNTgBaBCli_Pop"
          alt=""
          srcset=""
        />
      </div>
      <div className="snav">
        <FaChevronLeft />
        <Link to="/">
          <p className="backp">Back to previous page</p>
        </Link>
      </div>
      <div className="Flexdiv">
        <div>
          <h1>Sign In</h1>
          <form action="" onSubmit={handleSubmit}>
            <label>Email Address</label>
            <br />
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
            />
            <br />
            <br />
            <label>Password</label>
            <br />
            <div className="inputFlex">
              <input
                type={inputType}
                id="pwipt"
                name="password"
                onChange={handleChange}
                value={data.password}
                required
              />
              <br />
              <br />
              {toggle ? (
                <div className="inptd" onClick={() => handleClick(false)}>
                  SHOW
                </div>
              ) : (
                <div className="inptd" onClick={() => handleClick(true)}>
                  HIDE
                </div>
              )}
            </div>
            <div className="btns">
              <button type="submit">Sign In</button>
              <a href="">Forget Password?</a>
            </div>
          </form>
        </div>
        <div>
          <h2>Don't have an account?</h2>
          <p>Here are some of the benefits you’ll enjoy:</p>
          <div className="types">
            <div className="iconss">
              <IoCartOutline className="icon" />
            </div>
            <div>
              <p className="head">Fast checkout.</p>
              <p>Your payment info is saved and ready.</p>
            </div>
          </div>
          <div className="types">
            <div className="iconss">
              <IoLocationOutline className="icon" />
            </div>
            <div>
              <p className="head">Easy tracking.</p>
              <p>Keep an eye on your order.</p>
            </div>
          </div>
          <div className="types">
            <div className="iconss">
              <VscHistory className="icon" />
            </div>
            <div>
              <p className="head">Quick recap.</p>
              <p>Your order history is a click away.</p>
            </div>
          </div>
          {/* <Link to="/Signup">create an account > </Link> */}
          <Link to="/Signup">
            {" "}
            <button id="btnid">
              create an account <IoIosArrowForward className="icon" />
            </button>
          </Link>
        </div>
      </div>
      <div className="scurty">
        <div className="types ftypes">
          <div className="iconss ">
            <IoLockClosedOutline className="scrtyicon" />
          </div>
          <div>
            <p className="head">Security & Privacy</p>
            <p className="fp">
              Every transaction on BestBuy.ca is secure. Any personal
              information you give us will be handled according to our Privacy
              Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
