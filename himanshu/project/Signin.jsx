import React from 'react'
import Signup from './Signup';
import axios from "axios";
import { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import {FaChevronLeft} from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import {IoLocationOutline} from "react-icons/io5";
import {IoIosArrowForward} from "react-icons/io";
import {VscHistory} from  "react-icons/vsc";
import {IoLockClosedOutline} from "react-icons/io5";
import styles from "./main.module.css"

const Signin = () => {
  const [data,setData] = useState({
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
      const url = "http://localhost:8080/api/auth";
      const {data:res}= await axios.post(url,data);
      localStorage.setItem("token",res.data)
      alert(res.message)
      navigate("/")
      window.location = "/"

      console.log(res.message)
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
          <Link to="/"><p className={styles.backp}>Back to previous page</p></Link>
        </div>
        <div className={styles.Flexdiv}>
          <div>
            <h1 className={styles.H1}>Sign In</h1>
            <form action="" onSubmit={handleSubmit}>
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
              <div className={styles.btns}>
                <button className={styles.buttons} type='submit'>Sign In</button>
                <a className={styles.aTag} href="">Forget Password?</a>
              </div>
            </form>
          </div>
          <div>
              <h2 className={styles.H2}>Don't have an account?</h2>
              <p>Here are some of the benefits you’ll enjoy:</p>
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
                <div className={styles.iconss}><VscHistory className={styles.icon}/></div>
                <div>
                  <p className={styles.head}>Quick recap.</p>
                  <p>Your order history is a click away.</p>
                </div>
              </div>
              {/* <Link to="/Signup">create an account > </Link> */}
            <Link to="/Signup">  <button id={styles.btnid} >create an account <IoIosArrowForward className='icon'/></button></Link>
          </div>
        </div>
        <div className={styles.scurty}>
          <div className={`${styles.types} ${styles.ftypes}`}>
        <div className={styles.iconss}><IoLockClosedOutline className={styles.scrtyicon} /></div>
                <div>
                  <p  className={styles.head}>Security & Privacy</p>
                  <p className={styles.fp}>Every transaction on BestBuy.ca is secure. Any personal information you give us will be handled according to our Privacy Policy.</p>
                </div>
              </div>
        </div>
    </div>
  )
}

export default Signin