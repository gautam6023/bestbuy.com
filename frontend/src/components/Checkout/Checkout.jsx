import { Box } from "@mui/system";
import React, { useState } from "react";
import styles from "../../styles/Navbar.module.css";
import { CartCard } from "../Cart/CartCard";

export default function Checkout() {
  const [data, setData] = useState({});

  const handlerChange = (e) => {
    const d = e.target;
    setData({
      ...data,
      [d.name]: d.value,
    });
  };
  const toLacalStorage = () =>{
    localStorage.setItem("formData" , JSON.stringify(data))
  }
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#f4f6f9",
        height: "auto",
        flexFlow: "row",
      }}
    >
      <div
        style={{
          border: "1px solid red",
          width: "75%",
          textAlign: "left",
          marginLeft: "5%",
          borderRightColor: "red",
          height: "auto",
        }}
      >
        <div style={{ backgroundColor: "", margin: "2%" }}>
          <h2 style={{ fontSize: "14px" }}> Shipping</h2>

          <div style={{ fontSize: "14px", lineHeight: "3" }}>
            {" "}
            * indicates required information{" "}
          </div>
        </div>
        <div style={{ backgroundColor: "white", margin: "2%", padding: "1%" }}>
          <Box>
            <div>
              {" "}
              <strong style={{ fontSize: "14px" }}>Contact Information </strong>
            </div>
            <div style={{ marginLeft: "10px", marginTop: "1px" }}>
              <label
                style={{ fontSize: "14px", lineHeight: "20px" }}
                htmlFor=""
              >
                *Email Address
              </label>{" "}
              <br />
              <input
                style={{ width: "50%", height: "40px", marginTop: "10px" }}
                type="email"
                name="email"
                onChange={(e) => {
                  handlerChange(e);
                }}
              />
              <div
                style={{
                  fontSize: "12px",
                  lineHeight: "16px",
                  marginTop: "10px",
                }}
              >
                We'll send order updates to this email.
              </div>
            </div>
          </Box>
        </div>
        <div style={{ backgroundColor: "white", margin: "2%", padding: "1%" }}>
          <Box>
            <form action="">
              <div>
                {" "}
                <strong style={{ fontSize: "14px" }}>Shipping Address </strong>
              </div>
              <div style={{ display: "flex", margin: "5px" }}>
                <div style={{ width: "100%" }}>
                  {" "}
                  <label
                    style={{ fontSize: "14px", lineHeight: "20px" }}
                    htmlFor=""
                  >
                    *First Name
                  </label>{" "}
                  <br />
                  <input
                    style={{ width: "90%", height: "40px", marginTop: "10px" }}
                    type="text"
                    name="firstName"
                    onChange={(e) => {
                      handlerChange(e);
                    }}
                  />
                </div>
                <div style={{ width: "100%" }}>
                  {" "}
                  <label
                    style={{ fontSize: "14px", lineHeight: "20px" }}
                    htmlFor=""
                  >
                    *Last Name
                  </label>{" "}
                  <br />
                  <input
                    style={{ width: "90%", height: "40px", marginTop: "10px" }}
                    type="text"
                    name="lastName"
                    onChange={(e) => {
                      handlerChange(e);
                    }}
                  />
                </div>
              </div>
              <div style={{ display: "flex", margin: "5px" }}>
                <div style={{ width: "100%" }}>
                  {" "}
                  <label
                    style={{ fontSize: "14px", lineHeight: "20px" }}
                    htmlFor=""
                  >
                    *Phone Number
                  </label>{" "}
                  <br />
                  <input
                    style={{ width: "90%", height: "40px", marginTop: "10px" }}
                    type="number"
                    name="MobileNumber"
                    onChange={(e) => {
                      handlerChange(e);
                    }}
                  />
                </div>
                <div style={{ width: "100%" }}>
                  {" "}
                  <label
                    style={{ fontSize: "14px", lineHeight: "20px" }}
                    htmlFor=""
                  >
                    *Ext. (Optional)
                  </label>{" "}
                  <br />
                  <input
                    style={{ width: "90%", height: "40px", marginTop: "10px" }}
                    type="number"
                    name="exMobileNumber"
                    onChange={(e) => {
                      handlerChange(e);
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  fontSize: "12px",
                  lineHeight: "16px",
                  marginTop: "10px",
                  marginLeft: "6px",
                }}
              >
                We’ll only call you if there’s an issue with the order.
              </div>
              <div style={{ marginTop: "10px" }}>
                <label
                  style={{ fontSize: "14px", lineHeight: "20px" }}
                  htmlFor=""
                >
                  *Address
                </label>{" "}
                <br />
                <input
                  style={{
                    width: "94%",
                    marginLeft: "5px",
                    height: "40px",
                    marginTop: "10px",
                  }}
                  type="text"
                  name="address"
                  onChange={(e) => {
                    handlerChange(e);
                  }}
                />
              </div>
              <div style={{ display: "flex", margin: "5px" }}>
                <div style={{ width: "50%" }}>
                  {" "}
                  <label
                    style={{ fontSize: "14px", lineHeight: "20px" }}
                    htmlFor=""
                  >
                    *City
                  </label>{" "}
                  <br />
                  <input
                    style={{ width: "90%", height: "40px", marginTop: "10px" }}
                    type="text"
                    name="city"
                    onChange={(e) => {
                      handlerChange(e);
                    }}
                  />
                </div>
                <div style={{ width: "25%" }}>
                  {" "}
                  <label
                    style={{ fontSize: "14px", lineHeight: "20px" }}
                    htmlFor=""
                  >
                    *Province
                  </label>{" "}
                  <br />
                  <select
                   
                    id=""
                    style={{ width: "90%", height: "40px", marginTop: "10px" }}
                   
                    name="province"
                    onClick={(e) => {
                      handlerChange(e);
                    }}
                  >
                    <option>
                      Select
                    </option>
                    <option value="Alberta">Alberta</option>
                    <option value="British_Columbia">British Columbia</option>
                    <option value="Manitoba">Manitoba</option>
                    <option value="New_Brunswick">New Brunswick</option>
                    <option value="new-foundland_and_labrodor">
                      New Foundland & Labrador
                    </option>
                    <option value="nova_scotia">Nova Scotiva</option>
                  </select>
                </div>
                <div style={{ width: "25%" }}>
                  {" "}
                  <label
                    style={{ fontSize: "14px", lineHeight: "20px" }}
                    htmlFor=""
                  >
                    *Postal Code
                  </label>{" "}
                  <br />
                  <input
                    style={{ width: "82%", height: "40px", marginTop: "10px" }}
                    type="number"
                    name="postalCode"
                    onChange={(e) => {
                      handlerChange(e);
                    }}
                  />
                </div>
              </div>
            </form>
            <div style={{ backgroundColor: "#f4f6f9", marginTop: "10px" }}>
              <div style={{ fontSize: "14px", padding: "10px" }}>
                We only ship to Canada.
              </div>
            </div>
          </Box>
        </div>
      </div>

      <div
        style={{
          border: "1px solid black",
          width: "40%",
          borderRightColor: "red",
          height: "700px",
          backgroundColor: "white",
          display:"flex"
        }}
      >
              
              <CartCard
          price={10}
          discount={10}
          tax={10}
          orderTotal={10}
          route={"/payment"}
          onClick={()=>{toLacalStorage()}}

        />

        
      </div>
    </div>
  );
}
