import React from "react"
import styled from "styled-components"


function banner(props) {
  const { data } = props
  const {
    background_pic,
    title,
    event_date,
    banner_top_logo,
    In_association_with,
  } = data
  return (
    <Wrapper>
       <div className="banner_section_hero">
          <img className="banner_desktop" src={background_pic[0].url} alt="" />
          {/* <img className="banner_mobile" src={bannerImgMobile} alt="" /> */}

        </div>
      <div className="banner_section">
       
        <div className="banner_section_top_logo">
          <img className="logo_banner" src={banner_top_logo.url} alt="" />
        </div>
        <div className="banner_section_heading">
          <h1>{title}</h1>
        </div>
        <div className="banner_section_event">
          <h3>{event_date}</h3>
        </div>
          <p style={{fontWeight: "600", color: "var(--secondaryColor)"}}>in association with</p>
          <div className="banner_section_in_association">

          {In_association_with.map(d => 
            <div className="in_association_one" key={d.id}>
                <img className="logo_banner1" src={d.logos.url} alt="" />
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  )
}

export default banner

const Wrapper = styled.div`
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: auto;
  width: 100%;
  height: auto;
  
  @media (max-width:767px){
  
    height: auto;
    }
   .banner_section_hero{
     grid-area: 1/1/2/12;
     display:flex;
     @media (max-width:767px){
  
      grid-area: 1/1/2/12;
  }
   }
   .banner_desktop{
     width: 100%;
     /* @media (max-width:767px){
       display: none;
      } */
   }
   /* .banner_mobile{
     width: 100%;
     object-fit: contain;
     @media (min-width:767px){
       display: none;
      }
   } */
   .banner_section_top_logo{
      margin-left: -27px;
   }
  .banner_section {
    grid-area: 1/2/2/7;
    display: flex;
    flex-direction: column;
    @media (max-width:767px){
  
      grid-area: 2/2/3/11;
}
  }
  h1 {
    font-size: 50px;
    font-weight: 600;

    @media (max-width:767px){
      font-size: 20px;
    }
  }
  h3{
    font-weight: 500;
    @media (max-width:767px){
      font-size: 15px;
    }
  }
  .banner_section_in_association{
      display: flex;
      flex-direction: row;
      align-items: center;
  }
  .in_association_one:nth-child(even){
      margin-left: 10px;
  }
  .logo_banner{
    width: 60%;
    @media (max-width: 767px){
      width: 70%;
    }
  }
  .logo_banner1{
    width: 75%;
    @media (max-width: 767px){
      width: 100%;
    }
  }
`
