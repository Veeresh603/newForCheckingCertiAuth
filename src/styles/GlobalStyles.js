import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'Foo';
  src: url('/path/to/foo.woff') format('woff');
  font-style: normal;
  font-weight: 400;
  font-display: fallback; /* <- this can be added to each @font-face definition */
}
:root {
    --family: "Montserrat" !important;
    --heavyWeight: 900;
    --transMed: 0.3s;
    --transSlow: 0.5s;
    --black: #111111;
    --charcoal: #3e3e3e;
    --primaryColor: #dddd3f;
    --secondaryColor: #002f54;
    --thirdColor : #2CDE80;
    --purpleColor: #6f62df;
    --linkColor: #151515;
    --headerColor: #0511F2;
    --h1: 2rem;
    --h2: 1.8rem;
    --h3: 1.5rem;
    --h4: 1.25rem;
    --h5: 1.15rem;
    --h6: 1rem;
    --footerMenuItem: 0.85rem;
    --para: 1rem;
    --spacing: 1rem;

    @media (min-width: 768px) {
      --h1: 2.6rem;
      --h2: 2.4rem;
      --h3: 1.75rem;
      --h4: 1.5rem;
      --h5: 1.25rem;
      --h6: 1.1rem;
      --footerMenuItem: 1rem;
      --para: 1.1rem;
    }

    @media (min-width: 1200px) {
      --h1: 3rem;
      --h2: 2.8rem;
      --h3: 2rem;
      --h4: 1.75rem;
      --h5: 1.35rem;
      --para: 1.15rem;
    }
  }

* {
    box-sizing: border-box;
}
html{
  scroll-behavior: smooth;
}
body {
  font-family: "Montserrat";
   margin: 0;
}
::-webkit-scrollbar{
  width: 8px;
}
::-webkit-scrollbar-track{
  background: #f1f1f1;
  border-radius: 50px;
}
::-webkit-scrollbar-thumb{
  background: #002f54;
  border-radius: 50px;
}
  
`
export default GlobalStyles
