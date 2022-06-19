import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Signin from "./Signin";
// import "./main.css"
import { FaChevronLeft } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { VscHistory } from "react-icons/vsc";
import { VscAccount } from "react-icons/vsc";
import { IoLockClosedOutline } from "react-icons/io5";
const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
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
    try {
      const url = "http://localhost:8080/api/users";
      const res = await axios.post(url, data);
      navigate("/Signin");
      console.log(res);
    } catch (err) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
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
        <Link to="/Signin">
          <p className="backp">Back to previous page</p>
        </Link>
      </div>
      <div className="Flexdiv">
        <div>
          <h1>Create an Account</h1>
          <form action="" onSubmit={handleSubmit}>
            <label>First Name</label>
            <br />
            <input
              type="text"
              name="firstName"
              onChange={handleChange}
              value={data.firstName}
              required
            />
            <br />
            <br />
            <label>Last Name</label>
            <br />
            <input
              type="text"
              name="lastName"
              onChange={handleChange}
              value={data.lastName}
              required
            />
            <br />
            <br />
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
                  Show
                </div>
              ) : (
                <div className="inptd" onClick={() => handleClick(true)}>
                  Hide
                </div>
              )}
            </div>

            <div className="checkdiv">
              <input type="checkbox" name="" id="" className="check" />
              <p className="fp">
                Sign up for our newsletter to stay in the loop about hot deals,
                new products, and more. Don’t worry, you can unsubscribe at any
                time.
              </p>
            </div>
            <div className="btndiv">
              <button className="signupbtn" type="submit">
                Create Account
              </button>
              <p className="fp">
                By continuing you agree to our{" "}
                <a href="#">Terms and Conditions</a> and{" "}
                <a href="#">Privacy Policy</a>.
              </p>
            </div>
            <div className="acflex">
              <div>
                <VscAccount className="acicon" />
              </div>
              <div>
                <p>Already have an account?</p>
                <div className="iconflex">
                  <Link to="/Signin">
                    <p className="iconp">Signin</p>
                  </Link>
                  <IoIosArrowForward className="icon" />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div>
          <p className="mainp">Here are some of the benefits you’ll enjoy:</p>
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
        </div>
      </div>
      <div className="scurty">
        <div className="types ftypes">
          <div className="iconss ">
            {" "}
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

export default Signup;
