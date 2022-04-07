import React, { useRef, useState } from "react";
import styled from "styled-components";
import plus from "../img/plus.svg";
import minus from "../img/minus.svg";


function Question({ title, description }) {
  const [toggle, setToggle] = useState(false);
   const HeightElement = useRef(null);
   console.log(HeightElement.current)
  
  const btnToggle = () => {
    setToggle(!toggle);
  };
  return (
    <QuestionStyled>
      <div className="q-con">
        <div className="toogle-title">
          <h4>{title}</h4>
          <button onClick={btnToggle}>
            {toggle ? <img src={minus} alt="" /> : <img src={plus} alt="" />}
          </button>
        </div>
        <div className="parent-content">
          <p className={toggle ? "content show" : "content"}  ref={HeightElement}>{description}</p>
        </div>
      </div>
    </QuestionStyled>
  );
}

const QuestionStyled = styled.div`
  background-color: #fff;
  padding: 1.4rem 2rem;
  margin: 1rem 1rem;
  border-radius: 24px;
  transition: all 0.5s ease-in-out;
  .q-con {
    transition: all 0.4s ease-in-out;
  }
  h4 {
    color: #16194f;
  }
  .content.show {
    height: auto;
    transition: all 0.5s ease-in-out;
    overflow:none;
    padding: 1rem 0rem;
  }
  .content {
    padding: 0rem 0rem;
    height:0px;
    transition: all 0.6s ease-in;
    overflow:hidden;
  }
  
  .toogle-title {
    display: flex;
    align-items: center;
    transition: all 0.4s ease-in-out;
    justify-content: space-between;
    button {
      transition: all 0.4s ease-in-out;
      background: transparent;
      outline: none;
      border: none;
      cursor: pointer;
    }
  }
`;

export default Question;
