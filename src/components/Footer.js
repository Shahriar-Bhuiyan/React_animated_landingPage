import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../style/Layouts";
import logo from "../img/logo.svg";

function Footer() {
  return (
    <FooterStyled>
      <InnerLayout>
        <div className="footer-con">
          <div className="logo-con">
            <div className="logo-items">
              <img src={logo} alt="" />
              <p>
                Copyright @2022 loremispum <br />
                All rights reserved
              </p>
            </div>
          </div>
          <ul className="botton-nav">
            <div className="links1">
              <li>
                <a href="#">Team</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Fees</a>
              </li>
            </div>

            <div className="links2">
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Project</a>
              </li>
              <li>
                <a href="#">Affilated</a>
              </li>
            </div>

            <div className="links3">
              <li>
                <a href="#">Trems of use</a>
              </li>
              <li>
                <a href="#">Privacy policy </a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
            </div>
          </ul>
        </div>
      </InnerLayout>
    </FooterStyled>
  );
}
const FooterStyled = styled.footer`
  padding:0  18rem;
  background-color:#dce2f0;
  @media only screen and (max-width: 900px)  {
    padding:0rem 3rem;
  }
  .footer-con {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
    justify-content:center;
    align-items:center;
  }
  }
  .logo-con {
    display: flex;
    align-items:center;
    justify-content:center;
    flex-flow:wrap;
    @media screen and (max-width: 700px) {
    order:2;
    justify-content:space-between;
  }
    .logo-items {
      display: flex;
      flex-direction:column;
      @media screen and (max-width: 700px) {
      flex-direction:columns;
      gap:5%;
      justify-content:space-around;
      align-items:center;
      flex:wrap;
      width:100%;
      }
      img {
        width: 90px;
        align-self: center;
      }
    }
  }
  .botton-nav {
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 700px) {
    order:1;
  }
    li {
      padding: 2rem 0;
      a {
        color: #16194f;
      }
    }
  }
`;
export default Footer;
