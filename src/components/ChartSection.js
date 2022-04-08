import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../style/Layouts";
import ChartStats from "./ChartStats";
import chart from '../img/chart.svg'
import AnimatedButton from "./AnimatedButton";
function ChartSection({ name, amount }) {
  return (
    <ChartStyled>
      <InnerLayout>
        <div className="chart-con">
          <div className="chart-left">
            <div className="stats">
              <div className="stats-money">
              <ChartStats name={"Balance"} amount={"$250"} />
              <ChartStats name={"Last Transaction"} amount={"$1100"} />
              </div>
              <img src={chart} alt="chart"/>
            </div>
          </div>
          <div className="chart-right">
              <h2 className="secondary-heading">
                  Manage Your Finance like a Pro in no time
              </h2>
              <p>
              ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney 
              </p>
              <AnimatedButton name={"Learn More"}/>
          </div>
        </div>
      </InnerLayout>
    </ChartStyled>
  );
}

const ChartStyled = styled.section`
    .chart-con{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        @media screen and (max-width: 1347px){
            grid-template-columns: repeat(1, 1fr);
        }
        .chart-left{
            width: 80%;
            @media screen and (max-width: 1347px){
                width: 100%;
            }
            .stats{
                img{
                    box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
                    border-radius: 62px;
                    width: 100%;
                }
                .stats-money{
                    display: flex;
                    padding-bottom: 1.3rem;
                    justify-content: space-around;
                }
            }
        }
        .chart-right{
            padding-left: 2rem;
            p{
                padding: 1.3rem 0;
            }
        }
    }
`;
export default ChartSection;
