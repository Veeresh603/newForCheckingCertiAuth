import React from "react"
import styled from "styled-components"

function BlogList(props) {
  const [next, setNext] = React.useState(9)
  const { data } = props

  const handleShow = () => {
    setNext(next + 3)
  }
  return (
    <Wrapper>
      <div className="blog_list_wrapper">
        {data.slice(0, next).map(d => {
          return (
            <div className="blog_list_section">
              <div className="blog_section_image">
                <img
                  className="blog_image"
                  src={d.blog_cover_image[0].url}
                  alt={d.title}
                  style={{ borderRadius: "6px" }}
                />
              </div>
              <div className="blog_section_short_desc">
                <h4>{d.shortDescrption}</h4>
              </div>
            </div>
          )
        })}
        <div className="blog_list_show_more">
          <button className="load_more" onClick={handleShow}>
            Load more
          </button>
        </div>
      </div>
    </Wrapper>
  )
}

export default BlogList

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  margin-top: 100px;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: auto;
  align-items: center;

  .blog_list_wrapper {
    grid-area: 1/2/2/11;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .blog_list_section {
    display: flex;
    flex-direction: column;
    width: 380px;
    height: auto;
    align-items: center;
    justify-content: center;
  
    @media (min-width: 1600px){
      width: 420px;
    }
    @media (min-width: 1700px){
      width: 450px;
    }
    @media (min-width: 1900px){
      width: 500px;
    }
    @media (max-width: 1500px){
      width: 500px;
    }
    @media (max-width: 1200px){
      width: 450px;
    }
    @media (max-width: 1120px){
      width: 100%;
    }
  }
  .blog_image {
    width: 100%;
    height: 323.84px;
  }
  .blog_list_section:nth-child(odd) .blog_image {
    width: 100%;
    height: 383.84px;
  }
  .blog_section_short_desc {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-top: -80px;
  }
  h4 {
    width: 85%;
    background-color: #f8f8f8;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    padding: 15px;
  }
  .blog_list_show_more {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
  .load_more {
    width: auto;
    display: block;
    padding: 15px;
    background-color: var(--thirdColor);
    color: var(--secondaryColor);
    border: none;
    box-shadow: none;
    border-radius: 6px;
  }
`
