import styled from "styled-components"

const Wrapper= styled.div`
   width: 100%;
   height: auto;
   /* .MuiAccordionSummary-root{
       border-bottom: 1px solid var(--secondaryColor);
   } */
   .MuiTypography-body1{
       width:100%;
   }
   /* .MuiPaper-elevation1{
       box-shadow : none;
   } */
   li {
    width: 100%;
    list-style: none;
    font-size: 16px;
    font-family: var(--family);
    padding: 10px 0;
  }
  .lessons_panel {
    background-color: #d9f8ff;
    margin-bottom: 5px;
    padding-left: 5px;
    color: var(--secondaryColor);
    padding-left: 16px;
    font-weight:400;
  }
  .lessons_panel:nth-child(odd){
    background-color: #deeffe;
    color: var(--secondaryColor);
  }
`

export default Wrapper