import React from 'react'
import styled from 'styled-components'
import arrow from '../img/arrow.svg';
import blob1 from '../img/blob_top.svg'
import blob2 from '../img/blob_bottom.svg'

function AnimatedButton({name}) {
  return (
    <AnimatedButtonStyled>
     {name}
     <img src={arrow} alt="" className='arrow'/>
     <img src={blob1} alt="" className='blob1' />
     <img src={blob2} alt="" className='blob2'/>
    </AnimatedButtonStyled>
  )
}
const AnimatedButtonStyled = styled.button`
background-color:var(--dark-primary);
padding:1rem 2rem;
font-size:inherit;
color:inherit;
border-radius:20px;
outline:none;
border:none;
cursor:pointer;
display:flex;
align-items:center;
justify-content:space-between;
position:relative;
overflow:hidden;
transition:all .4s ease-in;
.arrow{
    padding-left:1rem;
    transition:all .4s ease-in-out;
}
&:hover{
 color:var(--accent-pink);
 .blob1{

     transform:translateX(-100px)
 }
 .blob2{
    
     transform:translateX(100px)
 }
 .arrow{
     padding-left:1.4rem;

 }
}
.blob1,.blob2{
    position:absolute;
    pointer-events:none;
    transition:all .4s ease-in-out;
    
}
.blob1{
    top:0;
    right:0;
}
.blob2{
    bottom:0;
    left:0;
}`

export default AnimatedButton