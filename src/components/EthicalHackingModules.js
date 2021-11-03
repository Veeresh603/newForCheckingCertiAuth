import React from 'react'
import styled from "styled-components"

function EthicalHackingModules() {
    return (
        <Wrapper>
        <div className="overview">
            <h2>overview</h2>
        </div>
        <div className="modules">
            <h2 style={{fontSize:"20px"}}>CORE MODULES FOR</h2>
        </div>
        <div className="ethical_hacking">
            <h2 style={{fontSize:"30px"}}>ETHICAL HACKING </h2>
        </div>
        <div className="section_left">

        </div>
        <div className="section_right">

        </div>
        </Wrapper>
    )
}

export default EthicalHackingModules

const Wrapper = styled.div`
display: grid;
grid-template-columns: repeat(11, 1fr);
grid-template-rows: auto;
/* grid-column-gap: 15px; */
grid-row-gap: 0px; 
width:100%;
height:auto;

.overview{
    grid-area: auto/2/auto/4;
}
.modules{
    grid-area: auto/2/auto/4;
}
.ethical_hacking{
    grid-area: auto/2/auto/4;
}
.section_left{
    background-color:black;
    grid-area: auto/2/auto/6;
    height:500px;
}
.section_right{
    background-color:black;
    grid-area: auto/7/auto/11;
    height:500px;
}
`