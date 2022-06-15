import styled from "styled-components";

export const ProductPageContainer = styled.div`
  width: 60%;
  margin: auto;
  border: 1px solid black;

  .container {
    border: 1px solid red;
    height: 700px;
  }

  .sideBarOptions {
    background-color: red;
    width: 25%;
    height: 100%;
  }

  .priceContainer {
    /* border: 1px solid black; */
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    div {
      display: flex;
      flex-direction: column;
      gap: 5px;

      input {
        width: 98%;
        height: 35px;
        text-indent: 10px;
        font-size: 16px;

        /* Chrome, Safari, Edge, Opera */
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        /* Firefox */
        &[type="number"] {
          -moz-appearance: textfield;
        }

        &:focus {
          outline: 1.5px solid blue;
        }
      }
    }
  }
  .submitPriceFilter {
    width: 100%;
    height: 45px;
    font-size: 14px;
    font-weight: bold;
    background-color: #c5cbd5;
    border: 0;
    color: #1d252c;
    margin-top: 15px;
    cursor: pointer;
  }

  .MuiAccordionSummary-content {
    font-weight: 600;
    font-size: 16px;
  }
`;
