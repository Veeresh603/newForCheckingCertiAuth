import styled from "styled-components"


const Wrapper = styled.div`
   display: flex;
   width:100%;
   height: auto;
   flex-direction: column;
   .bootcamp_icon {
    width: 40px;
    height: 40px;
    color: #fff;
    fill: var(--secondaryColor);

    @media (max-width: 479px){
      width:30px;
      height:30px;
      margin-left: 4.5px;
    }
  }
 

  
   .timeline{
       padding-top: 10px;
       @media (max-width : 479px){
         margin-left: -16px;
       }
   }
   p{
     margin-left: 8px;
     font-weight: 400;
     @media (max-width: 479px){
      margin-left: 0px;

    }
   }
`

export default Wrapper