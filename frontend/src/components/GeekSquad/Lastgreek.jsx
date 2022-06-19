import "./geekcss.css"

export default function Lastgreek(){
    let data=[{
        "img":"https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt081d29fef1dfc2c3/627d8ddcf628f26854f9063f/ipp-bby-membership-offer-xsm.jpg?width=1800&quality=80&auto=webp",
    
    "title":"Best Buy Membership.",
    
    "descrip":" Sign up for a Best Buy Membership and get access to free round-the-clock remote tech support, exclusive savings, services, and more.",
    
    "link":"Discover Best Buy Membership >"
    
    },
    
    
    
    {
        "img":"https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt59466aa14d98a9df/627d8ddc8c90c334d0d42b40/ipp-bby-protection-offer-xsm.jpg?width=1800&quality=80&auto=webp",
    
    "title":"Best Buy Protection.",
    
    "descrip":"Enjoy your tech, worry-free, with protection plans that give you more peace of mind. ",
    
    "link":"Discover Best Buy Protection >"
    
    }]

    return (
        <>
        <div className="geek"> <div  style={{display:"flex"}} >
            {data.map((e,i)=>{
                return(
                <div className="abcd" key={i}>
                    <div className="abcdimg"><img src={e.img} alt="l;koj"></img>
                    <p style={{fontWeight:"bold"}}>{e.title}</p>
                    <p >{e.descrip}</p>
                    <a href="/" style={{textDecoration:"none" ,color:"blue"}}><p >{e.link}</p></a>
                    </div>
                </div>
                )
            })}
            </div>
            
    
        </div>
    
    
        </>
    )
}



































