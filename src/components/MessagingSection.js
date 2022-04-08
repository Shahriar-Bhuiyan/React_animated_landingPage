import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../style/Layouts";
import avartar1 from "../img/avatar1.svg";
import avartar2 from "../img/avatar2.svg";
import avartar3 from "../img/avatar3.svg";
import avartar4 from "../img/avatar4.svg";
import avartar5 from "../img/avatar5.svg";
import messaging from "../img/conversation.svg";
import bgCircles from "../img/circleBg.svg";

function MessagingSection() {
  return (
    <MessagingSectionStyled>
      <InnerLayout>
        <div className="message-con">
          <div className="left-items">
            <h2 className="secondary-heading">
              We support you in 3 different language
            </h2>
            <p className="m-par">
              Our support team is here to help you with language : English
              Bangla Urdu Hangul
            </p>
            <div className="images-con">
              <img src={avartar1} alt="" className="image-1" />
              <img src={avartar2} alt="" className="image-2" />
              <img src={avartar3} alt="" className="image-3" />
              <img src={avartar4} alt="" className="image-4" />
              <img src={avartar5} alt="" className="image-5" />
              <p> &nbsp; +25</p>
            </div>
            <img src={bgCircles} alt="" className="bgCircle2" />
          </div>
          <div className="right-items">
            <img src={messaging} alt="" />
            <img src={bgCircles} alt="" className="bgCircle" />
          </div>
        </div>
      </InnerLayout>
    </MessagingSectionStyled>
  );
}
const MessagingSectionStyled = styled.section`
  .message-con {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media screen and (max-width: 1347px){
            grid-template-columns: repeat(1, 1fr);
        }
    .left-items {
      position: relative;
      padding-left: 2rem;
      .m-par {
        padding: 2rem 0;
      }
      .images-con {
        display: flex;
        align-items: center;
        .image-2,
        .image-3,
        .image-4,
        .image-5 {
          margin-left:-20px;
        }
      }
      .bgCircle2 {
          position: absolute;
          top: -10%;
          left:-5%;
          z-index:-1;
        }
    }
    .right-items {
      position: relative;
      img {
        padding-left: 2rem;
      }
      .bgCircle {
        position: absolute;
        bottom: -7%;
        right: 0;
        z-index: -1;
      }
    }
  }   
`;
export default MessagingSection;
