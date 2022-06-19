
import './geekcss.css'

export default function UpperPart(){

    return (
        <>
            <div className='geek'>
                <div style={{display:"flex"}}>
                    <a href='/' style={{ textDecoration: "none",onHover:"underline",color:"blue"}}>
                        <p>Home &gt;</p>
                    </a>
                <p>  Geek Squad Services</p></div>
                <a href='/' style={{textDecoration:"none", color:"black" }}><p id='first_div'>Geek Squad Services</p></a>
            </div>
            <div className="geekbanner" >
            <div className='geek' style={{backgroundColor:'transparent'}}>
            <div className='div1'>
            <div>
                <img src = "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltc645e37ea0b1a348/6183051594e50d5a63800f45/gs-logo.png"/> 
            </div>

            <h3>At your service.</h3>
            <p>No one stands behind you like Geek Squad. Whatever your technology support needs are, we offer services that can solve problems and provide peace of mind.</p>
            </div>
            
            </div>
            </div>
    <div className='geek'>
    <div style={{textAlign:"center"}}>
          <h3 >Discover our services by product category</h3>
         <p>We offer setup, protection, and support services for the following product categories.</p>
    </div>

    </div>
        </>
    )
}