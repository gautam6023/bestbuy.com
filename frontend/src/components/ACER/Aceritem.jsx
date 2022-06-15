import styled from 'styled-components';
import { FaCheck} from 'react-icons/fa';

const Title=styled.div`
text-align:left;
padding-left:10px;
-webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;

`
const Rate=styled.div`
text-align:left;
`
const Top=styled.div`
display:grid;
gap:5px;
margin-bottom=2px;
`
const Price=styled.div`
display:flex;
space-around: middle;
gap:10px;
padding-left:20px;
color:red;
`
const End=styled.div`
display:flex;
gap:10px;
padding-left:20px;

.P1{
    color:green;
}
`
// const Bt=styled.div`

// text-align:bottom;
// `

const Aceritem = ({ item }) => {
  const { imgUrl, title, rate, top, price, save, end } = item;

  return (
    <div className="acerpage">
      <div className="upper">
        <img src={imgUrl} alt="" />
      </div>

      <Title>
        <p>{title}</p>
      </Title>
      <Rate>
        <p>{rate}</p>
      </Rate>
      <Top>
        <div>
            <p>{top}</p>
        </div>
        <Price>
            <p>${price}</p>
            <p> {save}</p>
        </Price>
      </Top>
      <End>
        <p className="P1"><FaCheck/></p>
      
        <p>{end}</p>
      </End>
      {/* <Bt>
       
        <button>Add TO Cart</button>
      </Bt> */}
    </div>
  );
};

export default Aceritem;
