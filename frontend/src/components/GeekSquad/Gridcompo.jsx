import "./geekcss.css";



export default function Gridcompo(){
let data =[

    {
        "img":"https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltec4906f6691f1aa7/6037fe931f3c9a3b23d6db61/global-evergreen-gs-support-m.png?width=1800&quality=80&auto=webp",

        "title":"Chat online.",

        "availabily":"Available 24/7.",
        "chat":"Chat with an Agent >",
        
    },

    {
        "img":"https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt71e1a6ece9326d01/6036f4f2f54af27503f2d840/global-evergreen-gs-call-m.png?width=1800&quality=80&auto=webp",

        "title":"Give us a call.",
        "availabily":"Available 24/7",
        "chat":"Call 1-800-GEEKSQUAD (1-800-433-5778) >"
        

    },

    {
        "img":"https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt70eebb47701bc62f/6037fe44259b2810197dc442/global-evergreen-gs-store-m.png?width=1800&quality=80&auto=webp",
        "title":"Visit a store near you.",
        "availabily":"Talk with an Agent at your local Best Buy store.","chat":"Find the nearest store >"
    },
    ///////////2nd row////////////////////

    {
        "img":"https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt73f085cf5f9a1ff1/6037fbd42eee966ee2e3cb60/ipp-evergreen-offer-gsp-chat-m.jpg?width=1800&quality=80&auto=webp",

        "title":"Chat with Remote Technical Services.",


        "availabily":"Our Agents are available and online 24/7 to help with challenging tech problems such as device setup, device diagnosis, software repair, and more.",


        "chat":" Learn more >",
    },

    {
        "img":"https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt5a8951f007f0737d/5f063f7e25b6aa6efeb89145/global-evergreen-gs-self-serve-m.png?width=1800&quality=80&auto=webp",
        
        "title":"Geek Squad Self-Service Portal.",

        "availabily":"Update your account information, change your method of payment, file a protection claim, or check the status of your claim.",

        "chat":"Visit Self-Service Portal > ",
    },


    {
        "img":"https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt71db96a459d943b7/5f063fae5dfaac76f7e51e01/global-evergreen-gs-track-m.png?width=1800&quality=80&auto=webp",

        "title":"Track your repair.",

        "availabily":"Check the status of your repair and keep an eye on it every step of the way.",

        "chat":"Track your repair > ",
    },






]


return (
    <>
    <div className="geek"> <div className="gridcom" >
        {data.map((e,i)=>{
            return(
            <div className="abcd" key={i}>
                <div className="abcdgrid">
                <div className="imgdiv">
                    <img src={e.img} alt="l;koj"></img>
                </div>
                <p style={{fontWeight:"bold"}}>{e.title}</p>
                <p >{e.availabily}</p>
                <a href="/" style={{textDecoration:"none" ,color:"blue"}}><p >{e.chat}</p></a>
                </div>
            </div>
            )
        })}
        </div>
        <div style={{width:"60%", margin:"auto",textAlign:"center" }}><h4 style={{marginTop:"18%"}}>Get more from your tech with our full support</h4>
       </div>

    </div>


    </>
)













}