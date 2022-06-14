import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navbar() {
  return (
    <div
      style={{
        position: "sticky",
        top: "0%",
        backgroundColor: "#ffffff",
        zIndex: "1",
      }}
    >
      <div style={{display:"flex"  , gap:"10px" ,  backgroundColor: "rgb(0,70,190)" ,justifyContent:"end"}}>
        <div><a class="anchortag" style={{textDecoration: "none" , color:"white" , fontWeight:"400" , fontSize:"12px" , lineHeight:"16px"}} href="">Order Status</a></div>
        <div><a style={{textDecoration: "none" , color:"white" , fontWeight:"400" , fontSize:"12px" , lineHeight:"16px"}} href="">BLog</a></div>
        <div><a style={{textDecoration: "none" , color:"white" , fontWeight:"400" , fontSize:"12px" , lineHeight:"16px"}} href="">Best Buy Business</a></div>
        <div><a style={{textDecoration: "none" , color:"white" , fontWeight:"400" , fontSize:"12px" , lineHeight:"16px" , paddingRight:"138px"}} href="">Francais</a></div>
      </div>
      <div
        style={{ backgroundColor: "#0046be", width: "100%", height: "100px" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "200px 500px 600px",

            justifyContent: "space-around",
          }}
        >
          <div style={{ textAlign: "end" }}>
            <img
              style={{ height: "90px", width: "90px" }}
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
          <div style={{ textAlign: "start" }}>
            {" "}
            <div
              style={{
                display: "flex",
                marginTop: "22px",
                width: "80%",
                height: "40px",
                backgroundColor: "white",
                justifyContent: "space-between",
              }}
            >
              <div>
                <input
                  style={{
                    padding: "0px",
                    marginTop: "12px",
                    outline: "none",
                    border: "none",
                    width: "100%",
                  }}
                  placeholder="Search Best Buy"
                  type="text"
                />
              </div>{" "}
              <div>
                {" "}
                <SearchIcon color="secondary" style={{ marginTop: "8px" }} />
              </div>
            </div>{" "}
          </div>
          <div>
            <div
              style={{
                display: "flex",
                marginTop: "27px",
                width: "80%",
                height: "40px",
                justifyContent: "end",
                gap: "20px",
              }}
            >
             
             <div style={{display:"flex"}}>
                <StoreMallDirectoryIcon style={{ fill: "#ffffff" }} /> 
              
              <div> <label style={{ color: "white"  , fontSize:"15px"}}>Stores</label></div> 
              </div>
              <div style={{display:"flex"}}>
                <AccountCircleIcon style={{ fill: "#ffffff" }} /> 
              
              <div> <label style={{ color: "white"  , fontSize:"15px"}}>Account</label></div> 
              </div>
              <div style={{display:"flex"}}>
                <ShoppingCartIcon style={{ fill: "#ffffff" }} /> 
              
              <div> <label style={{ color: "white"  , fontSize:"15px"}}>Cart</label></div> 
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{backgroundColor:"#003da6" , display:"flex" , gap:"20px" , height:"40px"}}>
       
        <div style={{marginLeft:"140px" , marginTop:"5px"}}> < select  style={{backgroundColor:"#003da6" , color:"white" , outline:"none"}} name="" id="">Shop
        
        <option value="Shop">Shop</option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        </select></div>


        
        <div style={{ marginTop:"5px"}}>
        < select  style={{backgroundColor:"#003da6" , color:"white" , outline:"none"}} name="" id="">Brands <option value="Shop">Brands</option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option></select>
        </div>
        <div style={{ marginTop:"5px"}}>
  < select  style={{backgroundColor:"#003da6" , color:"white" , outline:"none"}} name="" id="">
        Deals
        <option value="Shop">Deals</option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option></select>
  </div>

  <div style={{ marginTop:"5px"}}>
      < select  style={{backgroundColor:"#003da6" , color:"white" , outline:"none"}} name="" id="">
        Services
        <option value="Shop">Services</option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option></select>
        </div> 
      



      </div>
    </div>
  );
}

export default Navbar;
