import styled from "styled-components";

export const TopDealsDiv = styled.div`
  /* border: 1px solid black; */
  width: 67%;
  padding: 50px 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 45px;

  .title-heading {
    font-size: 24px;
  }

  /* Banner */
  .topImageBanner {
    /* border: 1px solid black; */
    background-image: url("https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blte6b53642872d8d96/61d4bb3bc455652925b7ab1c/global-topdeals-20220107-title-bg-s.jpg?width=150p&quality=80&auto=webp");
    /* background-image: url("../../assets/image/bannerTopDealsBG.webp"); */
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    justify-content: center;
    box-sizing: border-box;
    padding: 10px;
    /* background-color: #0146b5; */
  }

  //center

  .quickSupportImage {
    /* border: 1px solid black; */
    width: 100%;
  }

  //CSS of fututre top deals
  .futureTopDeals {
    display: flex;
    justify-content: space-between;
  }
  //Title
  .titleOfComp {
    /* border: 1px solid black; */
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    color: #000000;
    /* padding: 30px 0; */
    margin-bottom: 30px;
  }

  .shpByCate {
    /* border: 1px solid black; */
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 30px;
    cursor: pointer;
    & > div {
      /* border: 1px solid black; */
      display: flex;
      gap: 10px;
      flex-direction: column;
      align-items: center;
      /* justify-content: center; */
      text-align: center;
      padding: 10px;
      img {
        width: 110px;
        /* border: 1px solid black; */
      }
      p {
        color: #0046be;
        line-height: 20px;
        font-size: 14px;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .courosalContainer {
    border: 1px solid black;
    height: 400px;
    background-image: url("https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt8e1e4ddccfad34af/61d5f9d095fe2513b569c488/global-topdeals-20220107-showcase-bg-m.jpg?width=5760&quality=80&auto=webp");
    background-size: cover;
    border-radius: 8px;
    display: flex;

    & > div {
      border: 1px solid white;
    }
    .detailsOfCourosol {
      width: 40%;
      box-sizing: border-box;
      padding: 30px;
      display: flex;
      flex-direction: column;
      color: #ffffff;
      gap: 15px;
      img {
        width: 200px;
      }
      .title {
        font-size: 32px;
        line-height: 40px;
        font-weight: bold;
      }
      .desc {
        font-size: 16px;
        line-height: 20px;
      }
    }
    .courosol {
      /* flex-grow: 1; */
      /* width: 60%; */
      border: 1px solid red;
      box-sizing: border-box;
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
