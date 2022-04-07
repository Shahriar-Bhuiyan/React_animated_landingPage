import React from 'react'
import styled from 'styled-components'
import SecondaryButton from './SecondaryButton'
import phone from "../img/phone.svg";
import ring1 from '../img/ring_orange.svg';
import message1 from '../img/message_pink.svg'
import message2 from '../img/message_blue.svg'

function HeaderContent() {
  return (
    <HeaderContentStyled>
   <div className='left-content'>
       <div className='left-text-container'>
       <h1>Smart Banking For Freelancers</h1>
        <p className='white'>
         This is a great platform for freelancers to transfer and save there money around the world.we are highly secured and trusted with world wide clients. 
         Please Let us work for you
        </p>
        <SecondaryButton name={'Register Now'}/>
       </div>
       
   </div>
   <div className='right-content'>
     <img src={phone} alt='phone' className='phone'/>
     <img src={ring1} alt="" className='ring1'/>
     <img src={message1} alt="" className='message1'/>
     <img src={message2} alt="" className='message2'/>
   </div>
    </HeaderContentStyled>
  )
}

const HeaderContentStyled = styled.div`
display:grid;
grid-template-columns:repeat(2,1fr);
.left-content{
  display:flex;
  align-items:center;
  padding-right:3rem;
  h1{
    font-size:4rem;
    font-weight:600;
  }
  .white{
    padding:1.4rem 0;
    line-height:1.8rem;
    color:white;

  }
}
.right-content{
  position:relative;
  display:flex;
  justify-content:center;
  .phone{
    width:80%;
  }
  .ring1{
   position:absolute;
   bottom:0;
   right:0;
   left:auto; 
  }
  .message1{
   position:absolute;
   top:0;
   right:0;
   left:auto; 
  }
  .message2{
   position:absolute;
   bottom:15%;
   left:0; 
  }
}
`
export default HeaderContent