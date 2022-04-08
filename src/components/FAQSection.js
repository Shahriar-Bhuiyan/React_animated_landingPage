import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../style/Layouts";
import lines from "../img/lines.svg";
import questions from "../question";
import Question from "./Question";



function FAQSection() {
  return (
    <FaqStyled>
      <div className="lines">
        <img src={lines} alt="" />
      </div>
      <InnerLayout>
        <h3 className="small-heading">
          Frequently <span>Asked Questions</span>
        </h3>
        <p className="c-para">
          There are lots of frequent asked question has been given below for
          make it more easy for you to get your question answer without wasting
          a minute
        </p>
        <div className="question-con">
        {
            questions.map((q)=>{
               return (
                 
                 <Question key={q.id}  {...q}/>
                
               ) 
            })
          }
     
          
        </div>
      </InnerLayout>
    </FaqStyled>
  );
}
const FaqStyled = styled.section`
  height:auto;
  .c-para {
    margin: 0 auto;
  }
  .question-con{
    transition:all .4s ease-in-out;
  }
  .lines {
    position: absolute;
    top: 342%;
    width: 100%;
    left: 0;
    z-index: -1;
    img {
      width: 100%;
    }
  }
`;

export default FAQSection;
