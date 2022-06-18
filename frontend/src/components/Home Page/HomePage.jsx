import Ban1 from './Ban1';
import Cont1 from './Cont1';
import Htoff from './Htoff';
import Seas from './Seas';
import Shcat from './Shcat';



export default function HomePage(){
    // var dataAr=[];
    let courosal = {
        logo: "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltc70b31bb92ddfced/61d60327191c5560467de5a2/global-topdeals-20220107-showcase-logo-m-en.png",
        title: "Don't miss out on these great deals.",
        desc: "Find incredible savings on must-have tech essentials and more.",
      };
      return (
        <div className="mainContainer">
          <Cont1 />
          <Ban1 />
          <Htoff />
          <Seas />
          <Shcat />
          {/* <CourosalContainer className="courosalContainer" {...courosal} /> */}
        </div>
      );
  
}

  