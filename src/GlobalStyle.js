import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  --purple-primary: hsl(243, 69%, 59%);
  --accent-pink: hsl(345, 88%, 63%);
  --netural-light: hsl(222, 100%, 97%);
  --lavender-secondary: hsl(237, 21%, 52%); /* primary color*/
  --dark-primary: hsl(237, 56%, 20%);
  --border-color: hsl(260, 68%, 83%);
  --border-color-2:#CAD6F1;
}

*{
    margin:0;
    padding:0;
    list-style:none;
    box-sizing:border-box;
    font-family: 'Nunito', sans-serif;
    text-decoration:none;
}
body{
    background:var(--netural-light);
    color:white;
    font-size:1.2rem;
    a{
      color:white;
    }
    p{
      color:var(--lavender-secondary);
      line-height:1.9rem
    }
    .secondary-heading{
      font-size:3rem;
      color:var(--purple-primary);
      
    }
    .small-heading{
      font-size:2.5rem;
      color:var(--purple-primary);
      text-align:center;

    }
    span{
      color:var(--accent-pink);
    }
    .c-para{
      text-align:center;
    }
}

`;
export default GlobalStyle;
