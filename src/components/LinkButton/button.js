import React from 'react'
import {Link} from "gatsby"
import styled from "styled-components"

function button(props) {
  return (
    <>
      <LinkButton to={props.to}>
          {props.linkTitle}
      </LinkButton>
    </>
  )
}

export default button

const LinkButton = styled(Link)`
 margin-top: 20px;
    padding: 15px 30px;
    color: var(--linkColor);
    transform: translate3d(0px, -1px, 0px);
    width: auto;
    background-color: #fff;
    border: 1px solid var(--thirdColor);
    text-align: center;
    border-radius: 6px;
    transition: transform 0.25s ease, box-shadow 0.25s ease,
      background-color 0.25s ease;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;

    @media (max-width: 479px){
      padding: 12px 30px;
      font-size: 14px;
    }
  
  &:hover {
    color: var(--secondaryColor);
    transform: translate3d(0px, -1px, 0px);
    background-color: var(--primaryColor);
    border: none;
    box-shadow: none;
  }
`