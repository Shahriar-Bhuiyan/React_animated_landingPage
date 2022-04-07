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
padding:0 18rem;
background-color:#DCE2F0;
.footer-con{
  display:grid;
  grid-template-columns:repeat(2,1fr);
}
.logo-con{
  display:flex;
  align-items:center;
  .logo-items{
    display:flex;
    flex-direction:column;
    img{
    width:90px;
    align-self:center;
  }
  }

  
}
.botton-nav{
  display:flex;
  justify-content:space-between;
  li{
    padding:2rem 0;
    a{color:#16194F;} 
  }
}
`;
export default Footer;
