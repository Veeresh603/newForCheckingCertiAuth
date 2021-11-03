import React from 'react'
import {Link} from "gatsby"
import styled from "styled-components"

function button(props) {
  return (
    <>
      {!props.aLink ? <LinkButton to={props.to}>
          {props.linkTitle}
      </LinkButton> :<LinkButton1 href={props.to}>
          {props.linkTitle}
      </LinkButton1> }
    </>
  )
}

export default button

const LinkButton = styled(Link)`
 margin-top: 20px;
    padding: 15px 30px;
    color: var(--secondaryColor);
    width: auto;
    background-color: var(--thirdColor);
    text-align: center;
    border-radius: 6px;
  
    transition: all 0.1s ease-in-out;

    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
    @media (max-width:479px){
      padding: 12px 30px;
      font-size: 14px;
    }
  
  &:hover {
    background-color: var(--purpleColor);
   
    color : #f1f1f1;
  }
  
`
const LinkButton1 = styled.a`
 margin-top: 20px;
    padding: 15px 30px;
    color: var(--secondaryColor);
    width: auto;
    background-color: var(--thirdColor);
    text-align: center;
    border-radius: 6px;
  
    transition: all 0.1s ease-in-out;

    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
    @media (max-width:479px){
      padding: 12px 30px;
      font-size: 14px;
    }
  
  &:hover {
    background-color: var(--purpleColor);
   
    color : #f1f1f1;
  }
  `