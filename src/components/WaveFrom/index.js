import React, { Component } from "react"
import styled from "styled-components"
import WaveSurfer from "wavesurfer.js"
import { FaPlay } from "@react-icons/all-files/fa/FaPlay"
import { FaPause } from "@react-icons/all-files/fa/FaPause"

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playing: false,
    }
  }

  componentDidMount() {
    const track = document.querySelector("#track")

    this.waveform = WaveSurfer.create({
      barWidth: 3,
      barRadius: 3,

      cursorWidth: 1,
      container: "#waveform",
      backend: "WebAudio",
      height: 80,
      progressColor: "#2D5BFF",
      responsive: true,
      waveColor: "#EFEFEF",
      cursorColor: "transparent",
      overflow: "hidden !important",
    })

    this.waveform.load(track)
  }

  handlePlay = () => {
    this.setState({ playing: !this.state.playing })
    this.waveform.playPause()
  }

  render() {
    return (
      <WaveformContianer>
        <PlayButton onClick={this.handlePlay}>
          {!this.state.playing ? <FaPlay /> : <FaPause />}
        </PlayButton>
        <Wave id="waveform" />
        {this.props.children}
      </WaveformContianer>
    )
  }
}

const WaveformContianer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100%;
  background: transparent;
  @media (max-width: 479px) {
    margin-top: 30px;
  }
`

const Wave = styled.div`
  width: 100%;
  height: 90px;
  flex-shrink: 0;
  #waveform wave {
    overflow: hidden !important;
  }
  @media (max-width: 479px) {
    height: auto;
  }
`

const PlayButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  max-width: 60px;
  width: 60px;
  flex-shrink: 0;
  background: var(--purpleColor);
  border-radius: 50%;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  @media (max-width: 479px) {
    width: 40px;
    height: 40px;
  }
  &:hover {
    transform: scale(0.9);
  }
  &:focus {
    background-color: none;
    outline: none !important;
  }
  svg {
    color: #fff;
    font-size: 1.5rem;

    @media (max-width: 479px) {
      font-size: 1rem;
    }
  }
`
