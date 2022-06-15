
import React from "react"
import Aceritem from "./Aceritem"
import data from "../../acer.json"
import styled from 'styled-components'


const Head=styled.div`
text-align:left;
margin-left:210px;
`
const H1=styled.div`
font-size:30px;
margin:auto;
// margin-left:-45px;
margin-top:30px;
margin-bottom:20px;
`


const Container=styled.div`
display: grid;
grid-template-columns: repeat(4,1fr);
gap:  10px;
margin:auto;
width:75%;

 img{
     width:250px;
     height:250px;

 }

>div{
    border:1px solid black;
   


}
`


const Acerdata = ()=>{
    console.log(data)
    console.log(data.imgUrl)
        return(
            <>
            <Head id="h1">
    
            <H1>Acer Products</H1>
            </Head>
            <Container className="container">
               
               {data.map((item)=>(
              <div>
                  
                  <Aceritem  key ={item.id} item={item}/>
                 
    
              </div>
               ))}
                   
            </Container>
            </>
        )
    }
    export default Acerdata;