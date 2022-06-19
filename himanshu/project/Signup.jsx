import React from 'react'
import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from "axios";
import Signin from './Signin';
import styles from "./main.module.css"
import {FaChevronLeft} from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import {IoLocationOutline} from "react-icons/io5";
import {IoIosArrowForward} from "react-icons/io";
import {VscHistory} from  "react-icons/vsc";
import {VscAccount} from  "react-icons/vsc";
import {IoLockClosedOutline} from "react-icons/io5";
const Signup = () => {
  const [data,setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:""
  });
  const [error,setError] = useState("");
  const [toggle, settoggle] = useState(true);
  const [inputType, setInputType] = useState("password");
  const navigate = useNavigate();
  const handleChange = ({currentTarget:input})=>{
    setData({...data,[input.name]:input.value});
  }
  const handleClick = (input) => {
    settoggle(input);
    if (input) {
      setInputType("password");
    } else {
      setInputType("text");
    }
  };
  const handleSubmit = async(e)=>{
     e.preventDefault();
     try{
      const url = "http://localhost:8080/api/users";
      const res = await axios.post(url,data);
      navigate("/Signin")
      console.log(res)
     }catch(err){
      if(error.response && error.response.status>=400 && error.response.status<=500){
        setError(error.response.data.message);
      }
     }
  }
  return (
    <div className={styles.Box}>
        <div className={styles.Navdiv}>
          <img className={styles.imgs} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHFsACrLJwsbFpPdb7-hzK71ROgmb7PMFUgSbNTgBaBCli_Pop" alt="" srcset="" />
        </div>
        <div className={styles.snav}>
        <FaChevronLeft/>
          <Link to="/Signin"><p className={styles.backp}>Back to previous page</p></Link>
        </div>
        <div className={styles.Flexdiv}>
          <div>
            <h1 className={styles.H1}>Create an Account</h1>
            <form action="" onSubmit={handleSubmit}>
            <label className={styles.labels} >First Name</label><br />
              <input className={styles.inputs} type="text" name="firstName" onChange={handleChange} value={data.firstName} required/><br /><br />
              <label className={styles.labels}>Last Name</label><br />
              <input className={styles.inputs} type="text" name="lastName" onChange={handleChange} value={data.lastName} required/><br /><br />
              <label className={styles.labels}>Email Address</label><br />
              <input className={styles.inputs} type="email" name="email" onChange={handleChange} value={data.email} required /><br /><br />
              <label className={styles.labels}>Password</label><br />
              <div className={styles.inputFlex}>
              <input className={styles.inputs} type={inputType} id={styles.pwipt} name="password" onChange={handleChange} value={data.password} required/><br /><br />
              {toggle ? (
                  <div className={styles.inptd} onClick={() => handleClick(false)}>Show</div>
                ) : (
                  <div className={styles.inptd} onClick={() => handleClick(true)}>Hide</div>
                )}
              </div>
             
              <div className={styles.checkdiv}>
                <input type="checkbox" name="" id="" className={styles.check} />
                <p className={styles.fp}>Sign up for our newsletter to stay in
                   the loop about hot deals, new products, and more.
                    Don’t worry, you can unsubscribe at any time.</p>
              </div>
              <div className={styles.btndiv}>
              <button className={styles.signupbtn} type='submit'>Create Account</button>
              <p className={styles.fp}>By continuing you agree to our <a href='#'>Terms and Conditions</a> and <a href='#'>Privacy Policy</a>.</p>
              </div>
              <div className={styles.acflex}>
                <div><VscAccount className={styles.acicon}/></div>
                <div>
                  <p>Already have an account?</p>
                  <div className={styles.iconflex}>
                  <Link to="/Signin"><p className={styles.iconp}>Signin</p></Link><IoIosArrowForward className={styles.icon}/>
                   </div>
                </div>
              </div>
            </form>
          </div>
          <div>
             
              <p className={styles.mainp}>Here are some of the benefits you’ll enjoy:</p>
              <div className={styles.types}>
                <div className={styles.iconss}><IoCartOutline className={styles.icon}/></div>
                <div>
                  <p className={styles.head}>Fast checkout.</p>
                  <p>Your payment info is saved and ready.</p>
                </div>
              </div>
              <div className={styles.types}>
                <div className={styles.iconss}><IoLocationOutline className={styles.icon}/></div>
                <div>
                  <p className={styles.head}>Easy tracking.</p>
                  <p>Keep an eye on your order.</p>
                </div>
              </div>
              <div className={styles.types}>
                <div className={styles.iconss}>< VscHistory className={styles.icon}/></div>
                <div>
                  <p className={styles.head}>Quick recap.</p>
                  <p>Your order history is a click away.</p>
                </div>
              </div>
              
          </div>
        </div>
        <div className={styles.scurty}>
          <div className={`${styles.types} ${styles.ftypes}`}>
        <div className={styles.iconss}> <IoLockClosedOutline className={styles.scrtyicon} /></div>
                <div>
                  <p  className={styles.head}>Security & Privacy</p>
                  <p className={styles.fp}>Every transaction on BestBuy.ca is secure. Any personal information you give us will be handled according to our Privacy Policy.</p>
                </div>
              </div>
        </div>
    </div>
  )
}

export default Signup