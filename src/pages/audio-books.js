import React from 'react'
import styled from 'styled-components'
import {Banner, AudioBookCarousel, PodcastCarousel} from "../components/AudioBook/index"

function AudiBooks() {
    return (
        <Wrapper>
            <Banner />
            <AudioBookCarousel />
        </Wrapper>
    )
}

export default AudiBooks


const Wrapper = styled.div`
  display: grid;
  margin-top: 100px;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: 100px;
  width: 100%;
  height: auto;

`