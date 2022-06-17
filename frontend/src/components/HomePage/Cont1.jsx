  import React from "react";
  import './allcss.css'
  import { Button } from "@mui/material";

  class Cont1 extends React.Component {
      render() {
        return <>
          <div className="inCont1">
            <div className="gridCont1">
              <div id="divA">
                <div>
                  <img src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt61985f76d0fbe78d/62a28c0743918857196ec434/wi-20220610-feature-fg-friends-and-family-eng-xs.png?width=50p&quality=80&auto=webp" alt="fam" />
                </div>
                <div>
                  <div>
                    <h3>
                      The mobile sale you've been waiting for is here.
                    </h3>
                    <p>
                      Check out the hottest deals on cell phones and plans. Sale ends Thursday, June 16.
                    </p>
                    <Button style={{backgroundColor:'rgb(0,83,224)'}} variant='contained'><span>Explore Deals</span></Button>
                  </div>
                </div>
              </div>
              <div id="divB">
                <div>
                  <h3> Make Dad's Day.</h3>
                  <p>"Get great deals on gifts Dad is sure to love."</p>
                  <Button style={{backgroundColor:'#f8f8f8', color:'rgb(0,83,224)'}} variant='contained'><span>Shop Now</span></Button>
                </div>
                  <div><img src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blte865ae50fadb89c0/62841107d31030576a349c70/global-20220520-feature-fg-fathersday-xs-tall.png?width=50p&quality=80&auto=webp" alt="/"></img></div>
              </div>
              <div id="divC">
                <div>
                  <img src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt3cb363066fe2a6de/6221257c2f7a0b2e3f26cf39/global-evergreen-hp-topdeals-grid3-text-m.png?width=20p&amp;quality=80&amp;auto=webp" alt="/"></img>
                </div>
                <div>
                  <h3>Find the best offers from our latest sales, all in one place.</h3>
                  <Button style={{backgroundColor:'#f8f8f8',height:'28px', color:'rgb(0,83,224)'}} variant='contained'><span>Shop Now</span></Button>
                </div>
              </div>
              <div id="divD">
                <div>
                  <img src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt44552786da671881/6261bf59fd9afd4b1fe30aad/computing-20220408-feature-fg-apple-mothers-day-xs.png?quality=80&auto=webp" alt="/"></img>
                </div>
                <div>
                  <h3>Dad will love an Apple gift.</h3>
                  <Button style={{backgroundColor:'rgb(0,83,224)'}} variant='contained'><span>Shop Now</span></Button>
                </div>
              </div>
            </div>
          </div>
        </>;
      }
    }

    export default Cont1