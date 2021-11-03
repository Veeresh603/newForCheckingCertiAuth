import React from "react"
import styled from "styled-components"
import linkedin from "../images/linkedin.svg"
import twitter from "../images/twitter.svg"
import ReactMarkdown from "react-markdown"
import loadable from "@loadable/component"
import AudioWave from "../components/WaveFrom/index"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import remarkGfm from 'remark-gfm'
import SEo from "../components/Seo/seo"
import rehypeRaw from 'rehype-raw'

const Slider = loadable(() => import("../components/helper/react-slick"))

function SingleBlogPage({ data, location }) {
  const { blogs_categories, title, Descrption, blog_author, Seo } =
    data.strapiBlogs
  const [authorL, setAuthorL] = React.useState()
  const [length, setLength] = React.useState()
  const l = length - Math.round(length)
  const readTime = Math.round(l * 10)
  const s = Descrption.length / 200
  const s1 = s - Math.round(s)
  const single = Math.round(s1 * 10)
  const keys = []
  const keys1 =
    Seo === null ? { title } : Seo.keywords.map((k) => keys.push(k.title))


  React.useEffect(() => {
    const Bloglength = data.allStrapiBlogAuthors.nodes.filter(
      (d) => d.name_and_surname === blog_author.name_and_surname
    )
    console.log(Bloglength[0].blogs.length)
    setAuthorL(Bloglength[0].blogs.length)
  }, [])

  var settings = {
    dots: true,
    infinite: true,
    centerPadding: "0px",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <Wrapper>
      {Seo && (
        <SEo
          title={Seo.title}
          description={Seo.short_description}
          location={`${location.pathname}`}
          image={Seo.image.url}
          keywords={keys}
        />
      )}
      <div className="heading">
        <a to="/blogs" href="/blogs">
          blogs
        </a>
      </div>

      {/* title and category */}

      <div className="title_categories">
        <div className="categories">
          {blogs_categories.map((d) => (
            <h6>{d.category_name}</h6>
          ))}
        </div>
        <div className="title">
          <h1>{title}</h1>
        </div>
      </div>

      {/* author profile */}

      <div className="author_profile">
        <div className="author_name_and_pic">
          <div className="author_pic">
            <GatsbyImage
              image={
                blog_author.image.localFile.childImageSharp.gatsbyImageData
              }
              alt={blog_author.name_and_surname}
            />
          </div>
          <div className="author_name">
            <h3>{blog_author.name_and_surname}</h3>
            <h5>{`${data.strapiBlogs.published_date} - ${single} min read`}</h5>
          </div>
        </div>
        <div className="links_wrapper">
          <a href={blog_author.linkedin_url}>
            <img src={linkedin} alt="" />
          </a>
          <a href={blog_author.twitter_url}>
            <img src={twitter} alt="" />
          </a>
        </div>
      </div>

      {/* audio file */}
      {!data.strapiBlogs.audio_file
        ? null
        : data.strapiBlogs.audio_file.show_or_hide && (
            <div className="audio_file">
              <h4 style={{ fontWeight: "600", fontSize: "1.3rem" }}>
                {data.strapiBlogs.audio_file.title}
              </h4>
              <AudioWave>
                <audio
                  id="track"
                  src={data.strapiBlogs.audio_file.audio_file.url}
                />
              </AudioWave>
            </div>
          )}

      {/* description */}
      <div className="blog_desc">
        <ReactMarkdown children={Descrption} rehypePlugins={[rehypeRaw]} remarkPlugins={[ remarkGfm]} />
      </div>

      {/* about the author card */}

      <div className="about_the_author">
        <div className="heading_heading">
          <h6>about the author</h6>
        </div>
        <div className="author_wrapper">
          <div className="author_image">
            <GatsbyImage
              image={
                blog_author.image.localFile.childImageSharp.gatsbyImageData
              }
              alt=""
            />
          </div>
          <div className="author_desc_wrapper">
            <div className="name_and_links">
              <h3>{blog_author.name_and_surname}</h3>
              <div className="links">
                <a href={blog_author.linkedin_url}>
                  <img src={linkedin} alt="" />
                </a>
                <a href={blog_author.twitter_url}>
                  <img src={twitter} alt="" />
                </a>
              </div>
            </div>
            <div className="desc">
              <p>{blog_author.short_description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* related blogs  */}

      {authorL <= 2 ? (
        <div
          style={{
            gridArea: "8/2/9/11",
            width: "100px",
            height: "100px",
          }}
        />
      ) : (
        <div className="related_blogs">
          <div className="related_blogs_heading">
            <h6>related blogs</h6>
          </div>
          <div className="related_blogs_container_container">
            {data.allStrapiBlogAuthors.nodes.map(
              (d) =>
                d.name_and_surname === blog_author.name_and_surname &&
                (authorL < 3 ? (
                  d.blogs.map((b) => {
                    setLength(b.Descrption.length / 200)
                    return (
                      <div className="related_blogs_container">
                        <a href={`/blogs/${b.blog_slug}`}>
                          <div className="title">
                            <h2>{b.title}</h2>
                          </div>
                          <div className="timeline">
                            <h6
                              style={{ fontWeight: "400", fontSize: "14.26px" }}
                            >
                              {`June 10 - ${readTime} min read`}
                            </h6>
                          </div>

                          <div className="author_bio_wrapper">
                            <div className="author_image">
                              <GatsbyImage
                                image={
                                  d.image.localFile.childImageSharp
                                    .gatsbyImageData
                                }
                                alt=""
                              />
                            </div>
                            <div className="name_and_surname">
                              <div className="name">
                                <h4>{d.name_and_surname}</h4>
                              </div>
                              <div className="name">
                                <h5>{d.designation}</h5>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    )
                  })
                ) : (
                  <Slider {...settings}>
                    {d.blogs.map((b) => {
                      setLength(b.Descrption.length / 200)
                      return (
                        <div className="related_blogs_container">
                          <a href={`/blogs/${b.blog_slug}`}>
                            <div className="title">
                              <h2>{b.title}</h2>
                            </div>
                            <div className="timeline">
                              <h6
                                style={{
                                  fontWeight: "400",
                                  fontSize: "14.26px",
                                }}
                              >
                                {`${b.published_date} - ${readTime} min read`}
                              </h6>
                            </div>

                            <div className="author_bio_wrapper">
                              <div className="author_image">
                                <GatsbyImage
                                  image={
                                    d.image.localFile.childImageSharp
                                      .gatsbyImageData
                                  }
                                  alt=""
                                />
                              </div>
                              <div className="name_and_surname">
                                <div className="name">
                                  <h4>{d.name_and_surname}</h4>
                                </div>
                                <div className="name">
                                  <h5>{d.designation}</h5>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      )
                    })}
                  </Slider>
                ))
            )}
          </div>
        </div>
      )}
    </Wrapper>
  )
}

export default SingleBlogPage

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: auto;
  height: auto;
  margin-top: 150px;

  .slick-slider {
    display: grid;
    grid-template-columns: repeat(11, 1fr);
  }

  .slick-list {
    grid-area: 1/1/2/12;
    padding-bottom: 50px;
  }

  .slick-slide {
    margin: 0 20px;
    @media (max-width: 479px) {
      margin: 0 5px;
    }
  }

  .slick-track {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .heading {
    grid-area: 1/2/2/11;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    a {
      font-weight: 600;
      font-size: 17.88px;
      color: #000000;
      text-decoration: none;
      position: relative;
      transition: 0.2s ease-in-out;
    }

    a::before {
      content: "";
      position: absolute;
      top: 0;
      left: -15px;
      bottom: 0;
      width: 20px;
      height: 20px;
      background-color: transparent;
      transform: rotate(-45deg);
      border: 1px aliceblue;
      border-left: 1px solid black;
      border-top: 1px solid black;
    }
    a:hover {
      transform: scale(1.1);
    }
  }

  .title_categories {
    grid-area: 2/3/3/10;
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
    @media (max-width: 771px) {
      grid-area: 2/2/3/11;
    }

    .categories {
      display: flex;
      flex-direction: row;
      min-width: 200px;
      justify-content: flex-start;
      h6 {
        font-weight: 700;
        color: var(--purpleColor);
        font-size: 12px;
        margin-right: 6px;
      }
    }

    .title {
      h1 {
        font-weight: 600;
        font-size: 42px;
        color: #151515;
        margin-top: 0px;
        @media (max-width: 767px) {
          font-size: 38px;
        }
        @media (max-width: 550px) {
          font-size: 24px;
        }
      }
    }
  }
  .author_profile {
    grid-area: 3/4/4/9;
    width: 100%;
    display: grid;
    grid-template-columns: 80% 20%;
    grid-template-rows: auto;

    @media (max-width: 991px) {
      grid-area: 3/3/4/10;
    }

    @media (max-width: 767px) {
      grid-area: 3/2/4/11;
    }
    @media (max-width: 479px) {
      grid-template-columns: 1fr;
    }
    .author_name_and_pic {
      grid-area: 1/1/2/2;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      @media (max-width: 479px) {
        grid-area: 2/1/3/3;
        margin-top: 20px;
      }
      .author_pic {
        display: block;
        width: 99.95px;
        height: 99.95px;
        margin-right: 10px;
        border-radius: 50%;

        @media (max-width: 479px) {
          width: 76px;
          height: 76px;
        }
        .gatsby-image-wrapper,
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
        }
      }
      .author_name {
        display: flex;
        flex-direction: column;

        h3 {
          font-weight: 600;
          font-size: 24px;
          letter-spacing: 0.07em;
          color: #000000;

          @media (max-width: 550px) {
            font-size: 20px;
          }
        }
        h5 {
          margin: -18px 0;
          font-weight: normal;
          font-size: 13px;
          line-height: 16px;
          letter-spacing: 0.07em;

          color: #a4a4a4;
        }
      }
    }

    .links_wrapper {
      grid-area: 1/2/2/3;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      @media (max-width: 479px) {
        grid-area: 1/1/2/3;
        justify-content: flex-start;
      }
      a {
        text-decoration: none;
      }
      a:hover {
        img {
          transform: translateY(-2px) scale(1.1);
        }
      }
      img {
        width: 23.29px;
        height: 23.29px;
        margin-right: 10px;
        transition: 0.2s ease-in-out;
      }
    }
  }

  .audio_file {
    grid-area: 4/4/5/9;
    margin-top: 30px;
    h4 {
      @media (max-width: 479px) {
        margin-bottom: 0px;
        font-size: 1rem !important;
      }
    }
    @media (max-width: 991px) {
      grid-area: 4/3/5/10;
    }
    @media (max-width: 991px) {
      grid-area: 4/2/5/11;
    }
  }

  .blog_desc {
    grid-area: 5/4/6/9;
    margin-top: 0px;
    
    @media (max-width: 479px) {
      margin-top: 20px;
      h1 {
        font-size: 24px;
        font-weight: 600;
      }
      h2 {
        font-size: 22px;
        font-weight: 500;
      }
      h3 {
        font-size: 20px;
        font-weight: 500;
      }
    }
    @media (max-width: 991px) {
      grid-area: 5/3/6/10;
    }

    @media (max-width: 767px) {
      grid-area: 5/2/6/11;
    }
    h1 {
      font-weight: 600;
      font-size: 24px;
      letter-spacing: 0.07em;
      color: var(--secondaryColor);
    }
    h2 {
      font-weight: 500;
      font-size: 22px;
      letter-spacing: 0.07em;
      color: var(--secondaryColor);
    }
    h3 {
      font-weight: 500;
      font-size: 20px;
      letter-spacing: 0.07em;
      color: var(--secondaryColor);
    }
    h4 {
      font-weight: 500;
      font-size: 18px;
      letter-spacing: 0.07em;
      color: var(--secondaryColor);
    }
    h5 {
      font-weight: 500;
      font-size: 16px;
      letter-spacing: 0.07em;
      color: var(--secondaryColor);
    }
    li{
      margin: 0.75rem 0;
      letter-spacing: 0.07em;
    }
    blockquote{
       border-left: 6px solid var(--purpleColor);
       margin: 0;
       padding-left: 1rem;
    }
    a {
      font-weight: 700;
      font-size: 18px;
      letter-spacing: 0.07em;
      @media (max-width: 550px) {
        font-size: 17px;
      }
    }

    p {
      font-size: 18px;
      font-weight: 400;
      letter-spacing: 0.07em;
      margin: 2rem 0;
      @media (max-width: 550px) {
        font-size: 17px;
      }
      @media (max-width: 479px) {
        margin: 1rem 0;
      }
    }

    img {
      width: 100%;
      margin: 2rem 0;
    }
  }

  .about_the_author {
    grid-area: 7/4/8/9;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    @media (max-width: 991px) {
      grid-area: 7/3/8/10;
    }
    @media (max-width: 991px) {
      grid-area: 7/2/8/11;
    }
    .heading_heading {
      h6 {
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;

        /* identical to box height */
        letter-spacing: 0.07em;
        @media (max-width: 550px) {
          font-size: 14px;
        }
      }
    }
    .author_wrapper {
      display: grid;
      grid-template-columns: auto;
      grid-template-rows: auto;
      grid-column-gap: 20px;
      background: #f8f8f8;
      border-radius: 5px;
      padding: 20px;
      .author_image {
        grid-area: auto/1/auto/2;
        display: block;
        width: 86.01px;
        height: 86.01px;
        border-radius: 92.3163px;
        @media (max-width: 479px) {
          width: 45px;
          height: 45px;
        }
        .gatsby-image-wrapper {
          width: 100%;
          height: 100%;
          border-radius: 92.3163px;
        }
      }
    }
    .author_desc_wrapper {
      grid-area: auto/2/auto/3;

      .name_and_links {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        .links {
          @media (max-width: 479px) {
            display: none;
          }
        }

        h3 {
          font-weight: 500;
          font-size: 26.8127px;
          line-height: 33px;
          letter-spacing: 0.07em;

          color: #000000;
          @media (max-width: 550px) {
            font-size: 16px;
          }
          @media (max-width: 479px) {
            margin-bottom: 0px;
            margin-top: 0px;
          }
        }

        a {
          text-decoration: none;
        }
        a:hover {
          img {
            transform: translateY(-2px) scale(1.1);
          }
        }
        img {
          width: 23.29px;
          height: 23.29px;
          margin-right: 10px;
          transition: 0.2s ease-in-out;
        }
      }
      .desc {
        grid-area: auto/2/auto/3;

        p {
          font-weight: 300;
          font-size: 17.8751px;
          line-height: 148.9%;

          /* or 27px */
          letter-spacing: 0.07em;

          color: #000000;

          @media (max-width: 550px) {
            font-size: 12px;
          }
        }
      }
    }
  }
  .related_blogs {
    grid-area: 8/2/9/11;

    padding: 50px 0;

    .related_blogs_heading {
      h6 {
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;

        color: #191d38;

        @media (max-width: 550px) {
          font-size: 14px;
        }
      }
    }
    .related_blogs_container_container {
      display: flex;
      justify-content: space-evenly;
      h4,
      h5,
      h6,
      h2 {
        margin: 0px;
      }

      a {
        text-decoration: none;
      }
      a::selection {
        background-color: transparent;
      }

      a:focus {
        @media (max-width: 479px) {
          color: transparent;
          background-color: transparent;
          outline: none;
        }
      }
      a:hover {
        .title::before {
          width: 60px;
        }
      }
    }

    .related_blogs_container {
      display: flex;
      flex-direction: column;
      width: 363.44px;
      background: #f8f8f8;
      box-shadow: 0px 2.97919px 6.70318px rgba(0, 0, 0, 0.25);
      padding: 8px;

      @media (max-width: 479px) {
        width: auto;
      }

      .title {
        padding: 10px;
        position: relative;
        transition: 0.2s all ease-in-out;

        h2 {
          font-weight: 500;
          font-size: 20.8543px;
          line-height: 25px;

          color: #151515 !important;
          @media (max-width: 550px) {
            font-size: 17px;
          }
        }
      }
      .title::before {
        position: absolute;
        content: "";
        bottom: 0;
        width: 50px;
        height: 8px;
        background-color: var(--purpleColor);
        transition: 0.2s all ease-in-out;
      }
      .timeline {
        padding: 10px;
        h6 {
          font-weight: normal;
          font-size: 14.2px;
          line-height: 17px;

          /* identical to box height */

          color: #000 !important;
          @media (max-width: 550px) {
            font-size: 12px !important;
          }
        }
      }
    }

    .author_bio_wrapper {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      padding: 5px;
      .author_image {
        display: block;
        width: 68.92px;
        height: 68.92px;
        @media (max-width: 479px) {
          width: 57.35px;
          height: 57.35px;
        }
        .gatsby-image-wrapper {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .name_and_surname {
        display: flex;
        flex-direction: column;

        .name {
          padding: 2px 14px;
        }

        h4 {
          font-weight: 500;
          font-size: 16px;
          line-height: 20px;

          /* identical to box height */

          color: #000000;
          @media (max-width: 550px) {
            font-size: 14px;
          }
        }
        h5 {
          font-weight: normal;
          font-size: 12px;
          line-height: 15px;
          font-style: italic;
          /* identical to box height */

          color: #000000;
          @media (max-width: 550px) {
            font-size: 10px;
          }
        }
      }
    }
  }
`
export const query = graphql`
  query MyQuery($blog_slug: String) {
    strapiBlogs(blog_slug: { eq: $blog_slug }) {
      title
      Descrption
      blog_slug
      published_date
      Seo {
        short_description
        keywords {
          title
          id
        }
        title
        image {
          url
        }
      }
      audio_file {
        title
        show_or_hide
        audio_file {
          url
        }
      }
      blog_author {
        name_and_surname
        short_description
        twitter_url
        linkedin_url
        designation
        image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      blogs_categories {
        category_name
      }
    }
    allStrapiBlogAuthors {
      nodes {
        name_and_surname
        short_description
        twitter_url
        linkedin_url
        designation
        image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        blogs {
          title
          Descrption
          blog_slug
          published_date
        }
      }
    }
  }
`
