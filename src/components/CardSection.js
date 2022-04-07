import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../style/Layouts'
import card from '../img/creditcard.svg'

function CardSection() {
  return (
    <CardSectionStyled>
      <InnerLayout>
          <div className='card-container'>
          <div className='card-left'>
              <h2 className='secondary-heading'>
                  One Card For All your payments
              </h2>
              <p>Hello Freelacner. You can earn do your all payments through online with this card. You can use this card virtually and can get this card by ordering </p>
          </div>
          <div className='card-right'>
              <img src={card} alt='card' />
          </div>
          </div>
      </InnerLayout>  
    </CardSectionStyled>
  )
}

const CardSectionStyled = styled.section`
.card-container{
    display:grid;
    grid-template-columns:repeat(2,1fr);
    .card-right{
        display:flex;
        justify-content:flex-end;
    }
    .card-left{
        p{
            padding:1rem 0;
            
        }
    }
}
`

export default CardSection