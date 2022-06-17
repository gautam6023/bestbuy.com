import React, { Component } from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import './allcss.css'


export default function Htoff(){
    // var dataAr=[];
    const [offs,setOffs]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8080/htoffs").then(({data})=>{
        setOffs(data);
        console.log(data)
        })
    }, [])
    

    return (
      <div className='hoffers'>
        <h2>Our hottest offers</h2>
        <div className='hoffersin'>
        {offs.map((e,i)=>(
            <div className='mapHoff' key={i}>
                <a href='' style={{textDecoration:'none'}}>
                    <div className='imgDiv'>
                        <img src={e.hoffimg} alt="pic" srcset="" />
                    </div>
                    <div className='titletxt'><p>{e.title}</p></div>
                    <div className='tdescript'><p>{e.offt}</p></div>
                    <a href=''><p id='link'>{e.link}</p></a>
                </a>
            </div>
        ))}
        </div>
        
      </div>
    )
  
}
