import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../style/Layouts";
import Card from "./Card";
import card from "../img/creditcard.svg";
import active from "../img/active.svg";
import inactive from "../img/inactive.svg";
import check from "../img/check.svg";
import checkDisabled from "../img/check-disabled.svg";

function PaymentSection() {
  return (
    <PaymentStyled>
      <InnerLayout>
        <h3 className="small-heading">
          An exeptional service , <span>at the right price</span>
        </h3>
        <p className="c-para">
          Start with our free plan and switch to premium as your grow
        </p>
        <div className="card-con">
          <Card
            account={"Free"}
            amount={"$0"}
            text={"Manage Your business with a simple and efficient account"}
            button={"Get Started"}
            card={card}
            active={active}
            inactive={inactive}
            check={check}
            checkDis={checkDisabled}
            text1={"10 free loacl transfers"}
            text2={"Free ATM withdrawals in dollar up to $250 per month"}
            text3={"Free payments to other Draft accounts"}
            text4={"Prepaid Debit Cards"}
            text5={"Virtual cards"}
            text6={"Priority 24/7 support"}
            text7={"Exchange 24 currencies"}
            text8={"Multi-user access"}
          />

          <Card
            account={"Free"}
            amount={"$250"}
            text={"Manage Your business with a simple and efficient account"}
            button={"Get Started"}
            card={card}
            active={active}
            inactive={inactive}
            check={check}
            checkDis={checkDisabled}
            text1={"10 free loacl transfers"}
            text2={"Free ATM withdrawals in dollar up to $250 per month"}
            text3={"Free payments to other Draft accounts"}
            text4={"Prepaid Debit Cards"}
            text5={"Virtual cards"}
            text6={"Priority 24/7 support"}
            text7={"Exchange 24 currencies"}
            text8={"Multi-user access"}
          />
        </div>
      </InnerLayout>
    </PaymentStyled>
  );
}

const PaymentStyled = styled.section`
  .card-con {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media screen and (max-width: 1206px){
            grid-template-columns: repeat(1, 1fr);
        }
    grid-gap: 3rem;
    padding-top: 7.4rem;
  }
  .c-para {
    text-align: center;
    padding: 0rem 3rem;
  }
`;
export default PaymentSection;
