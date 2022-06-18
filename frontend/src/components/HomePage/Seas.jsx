// import React, { Component } from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import './allcss.css'


export default function Seas(){
    // var dataAr=[];
    const [seas,setSeas]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8080/seas").then(({data})=>{
        setSeas(data);
        console.log(data)
        })
    }, [])
    

    return (
      <div className='soffers'>
        <h2>Shop this season's essentials</h2>
        <div className='soffersin'>
        {seas.map((e,i)=>(
            <div className='smapHoff' key={i}>
                <a href='/' style={{textDecoration:'none'}}>
                    <div className='simgDiv'>
                        <img src={e.seaimg} alt="pic" srcset="" />
                    </div>
                    <div className='stitletxt'><p>{e.title}</p></div>
                </a>
            </div>
        ))}
        </div>
        
      </div>
    )
  
}
