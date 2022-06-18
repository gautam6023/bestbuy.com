import styled from "styled-components";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { ADD } from "../../Redux/Card Reducer/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const A = styled.div`
  display: block;
  unicode-bidi: isolate;
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
  margin-inline-start: auto;
  margin-inline-end: auto;
  margin-top: 20px;
  overflow: hidden;
  border-style: inset;
  border-width: 1px;
  width: 80%;
  height: 1px;
  border: 0;
  background: #e0e6ef;
`;

const Big = styled.div`
  width: 80%;
  //   border: 1px solid green;
  height: 2000px;
  margin: auto;
  margin-top: 20px;
`;
const IMG = styled.img`
  width: 650px;
  height: 650px;
`;
const H1 = styled.h1`
  text-align: left;
  margin-left: 150px;
  font-size: 25px;
`;
const P1 = styled.p`
  text-align: left;
  margin-left: 150px;
`;
const H2 = styled.h2`
  text-align: left;
  margin-left: 20px;
  font-size: 35px;
  margin-top: 20px;
  margin-bottom: 10px;
`;
const P2 = styled.p`
  text-align: left;
  margin-left: 20px;
  font-size: 15px;
`;
const H3 = styled.p`
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  margin-left: 5px;
`;
const P3 = styled.p`
  text-align: left;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 5px;
`;
const B = styled.button`
  margin-top: 40px;
  margin-right: 10px;
  width: 80%;
  height: 30px;
  border-color: blue;
  color: blue;
`;
// const Li=styled.li`
// color:red;
// `
const P4 = styled.p`
  text-align: left;
  margin-top: 10px;
  margin-left: 5px;
  color: #bb1333;
  font-weight: bold;
`;
const Pr = styled.p`
  text-align: left;
  margin-left: 5px;
  font-size: 30px;
  color: #bb1333;
  font-weight: bold;
`;
const P5 = styled.p`
  text-align: left;
  margin-bottom: 10px;
  color: #959297;
`;

const Li = styled.div`
  text-align: left;
  margin-left: 30px;
  font-size: 15px;
  margin-top: 10px;
  color: blue;
`;
const B1 = styled.button`
  margin-top: 30px;

  background-color: #ffce00;
  width: 80%;
  height: 40px;
  /* font-size: 20px; */
  border: 0;
  font-weight: bold;

  &:hover {
    background-color: #fff200;
  }
`;
const B2 = styled.button`
  margin-top: 20px;
  background-color: #c5cbd5;
  width: 80%;
  height: 40px;
  text-size: 20px;
  font-weight: bold;
  border: 0;
`;
const Sold = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;
  padding-left: 20px;
  font-weight: bold;
`;

const I = styled.img`
  width: 30px;
  height: 30px;
`;
const Ava = styled.div`
  display: flex;
  padding-left: 20px;
  gap: 10px;
  margin-top: 15px;
`;
const Ps1 = styled.img`
  width: 30px;
  height: 30px;
`;
const Ps2 = styled.p`
  font-weight: bold;
`;
const Del = styled.div`
  margin-left: 40px;
  text-align: left;
  margin-top: 20px;
  font-size: 14px;
`;
const Not = styled.div`
  display: flex;
  gap: 10px;
  margin-left: 20px;
  margin-top: 20px;
`;
const P6 = styled.p`
  text-align: left;
  margin-left: 30px;
  margin-top: 20px;
  font-size: 14px;
`;
const Search = styled.div`
  display: flex;
  margin-left: 30px;
  gap: 10px;
  margin-top: 20px;
`;
const Input = styled.input`
  height: 40px;
  width: 60%;
  border-radius: 1px;
  border-color: #dbdee5;
  :hover {
    border-color: #001e73;
  }
`;
const B3 = styled.button`
  background-color: #0046be;
  color: white;
  height: 45px;
  width: 35%;
  border: 0;
  :hover {
    background-color: #001e73;
  }
`;
const B4 = styled.button`
  background-color: #0046be;
  color: white;
  height: 45px;
  width: 45px;
  border: 0;
  :hover {
    background-color: #001e73;
  }
`;
const Tag = styled.div`
  display: flex;
  margin-top: 20px;
  text-align: left;
  margin-left: 30px;
  gap: 5px;
`;
const Prot = styled.div`
  justify-content: left;
  display: flex;
  margin-left: 30px;
  gap: 5px;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 150px;
  width: 300px;
  gap: 10px;
  margin-left: 30px;
  margin-top: 30px;
`;
const Ba = styled.button`
  background-color: #001e73;
  color: white;
  border-radius: 5px;
  border: 0;
  font-weight: bold;
`;
const Bb = styled.button`
  border-radius: 5px;
  border-color: white;
  :hover {
    border-color: blue;
  }
`;
const Pa = styled.p`
  color: blue;
`;
const More = styled.h2`
  text-align: left;
  margin-left: 78px;
  margin-top: 30px;
`;
const Il = styled.img`
  width: 382px;
  height: 176px;
`;
const Pl = styled.p`
  text-align: left;
  margin-top: 30px;
  margin-left: 50px;
  font-size: 14px;
  .li {
    margin-top: 10px;
  }
`;
const Bl = styled.button`
  width: 50%;
  height: 30px;
  margin-top: 25px;
  margin-left: -20px;
  margin-right: 100px;
  //   padding-right: 20px;
  background-color: #0046be;
  justify-content: bottom;
  color: white;
  :hover {
    background-color: #001e73;
  }
`;
const Detailsitem = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cartreducer.carts);

  const send = (e) => {
    console.log(e);
    dispatch(ADD(e));
  };
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(carts));
  }, [carts]);
  console.log(data);

  useEffect(() => {
    async function getData() {
      let { data } = await axios.get(`http://localhost:8080/${id}`);
      console.log(data);
      setData(data.data);
    }
    getData();
  }, []);

  return (
    <>
      <Link to="/cart">cart</Link>
      <Big>
        <div>
          <H1>{data.title}</H1>
          <P1>{data.rate}</P1>
          <A>
            <hr />
          </A>
          <div
            style={{
              display: "flex",
              width: "95%",
              height: "1500px",
              gap: "10px",
              margin: "auto",
              marginTop: "-180px",
              marginBottom: "-140px",
            }}
          >
            <div
              style={{
                // border: "1px solid black",
                width: "70%",
                height: "1150px",
                margin: "auto",
              }}
            >
              <IMG src={data.imgUrl} alt="" />
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  width: "95%",
                  height: "250px",
                  //   border: "1px solid black",
                  margin: "auto",
                }}
              >
                <div
                  style={{
                    // border: "1px solid black",
                    margin: "auto",
                    width: "70%",
                  }}
                >
                  <H2>Overview</H2>
                  <P2>
                    Assembled with high-performance hardware, the Acer Aspire TC
                    Desktop PC has everything you need for fast and smooth
                    operation. Powered by an Intel Core i5 CPU with 8GB RAM, it
                    handles all kinds of tasks from browsing to moderate gaming
                    with ease. The integrated 802.11ax Wi-Fi and Bluetooth 5.2
                    provide reliable connectivity to wireless networks and
                    wireless devices.
                  </P2>
                </div>
                <div
                  style={{
                    // border: "1px solid black",
                    marginTop: "50px",
                    margin: "auto",
                    width: "30%",
                    height: "200px",
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    borderRadius: "5px",
                  }}
                >
                  <H3>Have a production question?</H3>
                  <P3>Live chat with a Blue Shirt for expert advice</P3>
                  <B>Start Live Chat</B>
                </div>
              </div>
            </div>
            <div
              style={{
                // border: "1px solid black",
                width: "30%",
                height: "1150px",
                margin: "auto",
                backgroundColor: "whitesmoke",
              }}
            >
              <div>
                <P4>Save {data.save}</P4>
                <Pr>${data.price}</Pr>
                <P5>SALE ends: June 16, 2022</P5>
              </div>
              <div style={{ display: "flex", gap: "10px", marginLeft: "20px" }}>
                <I
                  src="https://i.pinimg.com/originals/ab/ed/26/abed265cd5f621820ce2457d1abc7391.png"
                  alt=""
                />
                <h4>4 Special Offer Available</h4>
              </div>
              <div>
                <Li>
                  <li>
                    Save 20% on select ASUS gaming accessories when you buy
                    select laptops and desktops.*
                  </li>
                  <li>
                    Get 15 months of Microsoft 365 for the price of 12 with your
                    device purchase*.
                  </li>
                  <li>
                    Get a 1TB Seagate Expansion portable external hard drive for
                    $50 when you buy any desktop (save $24.99).
                  </li>
                  <li>
                    Take 25% off on select Microsoft or Surface accessories when
                    you buy a qualifying device.*
                  </li>
                </Li>
              </div>
              <div>
                <B1 onClick={() => send(data)}>Add To CArt</B1>
              </div>
              <div>
                <B2>Pick Up at Store</B2>
              </div>
              <Sold>
                <I
                  src="data:image/png;base64,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"
                  alt=""
                />
                <p>Sold and shipped by Best Buy</p>
              </Sold>

              <div>
                <Ava>
                  <Ps1
                    src="https://image.shutterstock.com/image-vector/fast-moving-shipping-delivery-truck-260nw-1202562907.jpg"
                    alt=""
                  />

                  <Ps2>Available to ship</Ps2>
                </Ava>
                <Del>
                  <p>This will be delivered on June 18, 2022</p>
                  <p>Enjoy free shipping on most orders over $35.</p>
                </Del>
              </div>
              <A>
                <hr />
              </A>
              <Not>
                <I
                  src="data:image/png;base64,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"
                  alt=""
                />
                <h4>Not Available For Pickup</h4>
              </Not>
              <P6>
                This product is currently not available for pickup at nearby
                stores.
              </P6>
              <Search>
                <div>
                  <Input type="text" placeholder="M5G23C" />
                  <B3>Search</B3>
                </div>
                <div>
                  <B4>
                    <FaMapMarkerAlt />
                  </B4>
                </div>
              </Search>
              <Tag>
                <a href="#">Check Other Store </a>
                <p>{">"}</p>
              </Tag>

              <A>
                <hr />
              </A>

              <Prot>
                <a href="">See Benefits</a>
                <p>{">"}</p>
              </Prot>
              <Grid>
                <Ba>No Plan</Ba>
                <Bb>
                  <Pa>2 Years</Pa>
                  <p>$119.99</p>
                </Bb>
                <Bb>
                  <Pa>3 Years</Pa>
                  <p>$139.99</p>
                </Bb>
                <Bb>
                  <Pa>4 Years</Pa>
                  <p>$159.99</p>
                </Bb>
              </Grid>
            </div>
          </div>
          <A>
            <hr />
          </A>
          <div
            style={{
              display: "flex",
              gap: "10px",
              //   border: "1px solid red",
              height: "600px",
              marginTop: "20px",
              margin: "auto",
            }}
          >
            <div
              style={{
                width: "60%",
              }}
            >
              <More>More Information</More>
              <div
                style={{
                  marginLeft: "100px",
                  textAlign: "left",
                  marginTop: "20px",
                }}
              >
                <li>
                  2.5GHz Intel Core i5-12400 hexa-core CPU and 8GB DDR4 3200MHz
                  UDIMM RAM are a powerful combo for completing your tasks at
                  maximum velocity
                </li>
                <li>
                  256GB solid state drive for high-speed storage that offers
                  boosted performance and rapid file operation
                </li>
                <li>
                  Integrated 10/100/1000 Ethernet and 802.11ax/ac/a/b/g/n Wi-Fi
                  6 for blazing fast connectivity to wired and wireless networks
                </li>
                <li>
                  Integrated Bluetooth 5.2 lets you connect to wireless
                  speakers, wireless headsets, smartphones, and other compatible
                  devices
                </li>
                <li>
                  Two USB 3.2 Gen 1 Type-A ports, 1 USB 3.2 Gen 1 Type-C port, 4
                  USB 2.0 Type-A ports, 2 HDMI ports, 1 LAN port, and 5 audio
                  jacks for plugging in various peripherals from input devices
                  to external storage
                </li>
                <li>
                  5.1 channel surround high-definition audio output for
                  listening to music, watching movies, and more with immersive
                  soundscapes
                </li>
                <li>
                  Preinstalled with a Windows 11 operating system that comes
                  with an intuitive user interface and tough security features
                </li>
                <li>USB keyboard and mouse included</li>
              </div>
            </div>
            <div style={{ width: "40%" }}>
              <div
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  height: "350px",
                  width: "80%",
                  //   border:"1px solid yellow",
                  marginLeft: "50px",
                  marginTop: "20px",
                }}
              >
                <div>
                  <Il
                    src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltb4753152c0137196/5e974b5f49d4fa35951019d4/computing-20200417-pdp-flex-office-promo.jpg?width=456&quality=80&auto=webp"
                    alt=""
                  />
                </div>
                <div>
                  <Pl>
                    Get 15 months of Microsoft 365 for the price of 12 with the
                    purchase a participating laptop, desktop, or tablet.
                    Includes premium Office apps and 1TB of cloud storage.
                  </Pl>
                </div>
                <Bl>Shop microsoft 365</Bl>
                <div style={{ justifyContent: "left" }}></div>
              </div>
            </div>
          </div>
        </div>
      </Big>
    </>
  );
};

export default Detailsitem;
