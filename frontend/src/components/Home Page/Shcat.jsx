import { useState, useEffect } from 'react';
import axios from 'axios';
import './allcss.css'
import React from 'react';


export default function Shcat(){
    const [seas,setSeas]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8080/shopcat").then(({data})=>{
        setSeas(data);
        console.log(data)
        })
    }, [])
    

    return (
      <div className='scoffers'>
        <h2>Shop by category</h2>
        <div className='scoffersin'>
        {seas.map((e,i)=>(
            <div className='scmapHoff' key={i}>
                <a href='/' style={{textDecoration:'none'}}>
                    <div className='scimgDiv'>
                        <img src={e.shpimg} alt="pic" />
                    </div>
                    <div className='sctitletxt'><p>{e.title}</p></div>
                </a>
            </div>
        ))}
        </div>
        <div className='Ban1'><img src='https://tpc.googlesyndication.com/simgad/8169099931705018922?' alt='ban'></img></div>
        
      </div>
    )
}