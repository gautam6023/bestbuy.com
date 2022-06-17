import "./geekcss.css";

// import React, { Component } from 'react'

export default function Mapcompo(){
   let data=[
    { "img":"https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt19dfc9da2e9305c5/6171d67e5422ab67be73db78/ipp-evergreen-offer-appliances-m.jpg?width=1800&quality=80&auto=webp",

        "title":"Major appliances services.",

        "link":"Learn more >"
    },

    { "img":"https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltf5117ddab8c7f070/6171d67ef13b7e5c89d3f465/ipp-evergreen-offer-smarthome-m.jpg?width=1800&quality=80&auto=webp",

        "title":"Smart home and networking services.",

        "link":"Learn more >"
    },

    { "img":"https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt53b6edf466d9fc12/6171d67e90079752a47e8c35/ipp-evergreen-offer-hometheater-m.jpg?width=1800&quality=80&auto=webp",

        "title":"TV and home theatre services.",

        "link":"Learn more >"
    },

    { "img":"https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltbfc2d4f24067a1c4/6171d67e52c42c67c026d5d5/ipp-evergreen-offer-computer-m.jpg?width=1800&quality=80&auto=webp",

        "title":"Laptop, desktop, and tablet services.",

        "link":"Learn more >"
    },
        
    ]


    return (
        <>
        <div className="geek"> <div style={{display:"flex"}} >
            {data.map((e,i)=>{
                return(
                <div className="abcd" key={i}>
                    <img src={e.img} alt="l;koj"></img>
                    <p style={{fontWeight:"bold"}}>{e.title}</p>
                    <a href="/" style={{textDecoration:"none" ,color:"blue"}}><p >{e.link}</p></a>
                </div>
                )
            })}
            </div>

            <div style={{width:"50%", margin:"auto",textAlign:"center" }}><h3>Getting help is easy</h3>
            <p>We’re here to help you with anything Geek Squad, including technical support, starting a Protection claim, billing inquiries, or scheduling an in-home appointment.</p></div>
           
        </div>


        </>
    )

}