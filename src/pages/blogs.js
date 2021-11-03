import React from "react"
import styled from "styled-components"
import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import ReactPaginate from "react-paginate"
import {GatsbyImage} from "gatsby-plugin-image"

function Blogs({ data }) {
  const emptyQuery = ""
  const allPosts = data.allStrapiBlogs.nodes
  //filtered Data
  const [state, setState] = React.useState({
    filteredData: [],
    query: emptyQuery,
  })

  //to set a variable
  const [category, setCategory] = React.useState("")
  const [tags, setTags] = React.useState("")

  //length of the nodes
  const [allTags, setAllTags] = React.useState(0)
  const [allCategory, setAllCategory] = React.useState(0)

  // to show category or tags or all
  const [show, setShow] = React.useState(true)
  const [showCat, setShowCat] = React.useState(false)
  const [showTag, setShowTag] = React.useState(false)

  //Pagination
  const [offset, setOffset] = React.useState(0)
  const [perPage] = React.useState(4)
  const [pageCount, setPageCount] = React.useState(0)

  // console.log(`allcategory = ${allCategory}`)
  // console.log(`allTags = ${allTags}`)
  // console.log(`pageCount = ${pageCount}`)
  // console.log(`category = ${category}`)
  // console.log(`tags = ${tags}`)
  const length = show
    ? data.allStrapiBlogs.nodes.length
    : showTag
    ? allTags
    : showCat
    ? allCategory
    : null

  React.useEffect(() => {
    setPageCount(Math.ceil(length / perPage))
  }, [offset, perPage, length])

  const handleTags = (tag) => {
    const length = data.allStrapiBlogTags.nodes.filter(
      (c) => c.tag_title === tag
    )
    setAllTags(length[0].blogs.length)
    setTags(tag)
    setShow(false)
    setShowCat(false)
    setShowTag(true)
    setCategory("")
    window.scrollTo({ behavior: "smooth", top: "0px" })
  }

  const handleCat = (cat) => {
    const length = data.allStrapiBlogsCategories.nodes.filter(
      (c) => c.category_name === cat
    )
    setAllCategory(length[0].blogs.length)
    setCategory(cat)
    setShow(false)
    setShowTag(false)
    setShowCat(true)
    setTags("")
    window.scrollTo({ behavior: "smooth", top: "0px" })
  }

  const handlePageClick = (e) => {
    const selectedPage = e.selected
    setOffset(selectedPage + 1)
    setOffset(0)
    window.scrollTo({ behavior: "smooth", top: "0px" })
  }

  const handleInputChange = (event) => {
    console.log(event.target.value)
    const query = event.target.value

    const posts = data.allStrapiBlogs.nodes || []
    const category = data.allStrapiBlogsCategories.nodes || []

    const filteredData = posts.filter((post) => {
      const { title, shortDescrption } = post

      return (
        title.toLowerCase().includes(query.toLowerCase()) ||
        shortDescrption.toLowerCase().includes(query.toLowerCase())
      )
    })

    setState({
      query,
      filteredData,
    })
  }

  const { filteredData, query } = state

  const hasSearchResults = filteredData && query !== emptyQuery
  const posts = hasSearchResults ? filteredData : allPosts

  return (
    <Container>
      <div className="heading">
        <h1>Blogs</h1>
      </div>
      <Wrapper>
        <div className="right_section_section">
          <div className="right_section">
            {/* search container */}
            <div className="search__container">
              <input
                className="search__input"
                type="text"
                placeholder="search for blogs"
                onChange={handleInputChange}
              />
              <div className="search_icon">
                <AiOutlineSearch />
              </div>
            </div>

            {/* categories container */}

            <div className="categories_container_container">
              <div className="categories_container">
                <h3>Categories</h3>
                <div className="categories_links">
                  {data.allStrapiBlogsCategories.nodes.map((c, id) => (
                    <button
                      type="button"
                      className="btn"
                      key={id}
                      onClick={() => handleCat(c.category_name)}
                    >
                      {c.category_name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            {/* tags container */}
            <div className="tags_container_container">
              <div className="tags_container">
                <h3>Popular tag</h3>
                <div className="tag_links">
                  {data.allStrapiBlogTags.nodes.map((c, id) => (
                    <button key={id} onClick={() => handleTags(c.tag_title)}>
                      {c.tag_title}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* blogs main container */}
        <div className="blogs_container_container">
          <div className="search__container_mobile">
            <input
              className="search__input"
              type="text"
              placeholder="search for blogs"
              onChange={handleInputChange}
            />
            <div className="search_icon">
              <AiOutlineSearch />
            </div>
          </div>
          {posts.slice(offset, offset + perPage).map((d) => {
            return d.blogs_categories.map((c) => {
              return (
                c.category_name === category && (
                  <div className="blogs_container">
                    <Link to={`${d.blog_slug}`}>
                      <div className="blog_image">
                        <GatsbyImage image={d.image.localFile.childImageSharp.gatsbyImageData} alt="" />
                      </div>
                      <h4 style={{ textTransform: "uppercase" }}>
                        {c.category_name}
                      </h4>
                      <p>{d.shortDescrption}</p>
                    </Link>
                  </div>
                )
              )
            })
          })}

          {posts.slice(offset, offset + perPage).map((d) => {
            return d.blog_tags.map((c) => {
              return (
                c.tag_title === tags && (
                  <div className="blogs_container">
                    <Link to={`${d.blog_slug}`}>
                      <div className="blog_image">
                        <GatsbyImage image={d.image.localFile.childImageSharp.gatsbyImageData} alt="" />
                      </div>
                      <h4 style={{ textTransform: "uppercase" }}>
                        {d.blogs_categories[0].category_name}
                      </h4>
                      <p>{d.shortDescrption}</p>
                    </Link>
                  </div>
                )
              )
            })
          })}
          {show &&
            posts.slice(offset, offset + perPage).map((d) => (
              <div className="blogs_container">
                <Link to={`${d.blog_slug}`}>
                  <div className="blog_image">
                    <GatsbyImage image={d.image.localFile.childImageSharp.gatsbyImageData} alt="" />
                  </div>
                  <h4 style={{ textTransform: "uppercase" }}>
                    {d.blogs_categories[0].category_name}
                  </h4>
                  <p>{d.shortDescrption}</p>
                </Link>
              </div>
            ))}
        </div>
        <div className="blog_paginate">
          <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </div>
      </Wrapper>
    </Container>
  )
}

export default Blogs

export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        Descrption
        blog_slug
        shortDescrption
        title
        image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        blog_tags {
          tag_title
          id
        }
        blogs_categories {
          category_name
          id
        }
      }
    }
    allStrapiBlogsCategories {
      nodes {
        category_name
        id
        blogs {
          blog_slug
          title
          shortDescrption
          id
        }
      }
    }
    allStrapiBlogTags {
      nodes {
        tag_title
        blogs {
          title
          shortDescrption
          blog_slug
          id
        }
        id
      }
    }
  }
`
const Container = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: auto;
  margin-top: 100px;
  margin-bottom: 100px;
  .heading {
    grid-area: 1/2/2/11;
  }
`
const Wrapper = styled.div`
  width: 100%;
  grid-area: 1/2/2/11;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto;
  grid-gap: 60px;
  height: auto;
  margin-top: 150px;
  @media (max-width: 991px) {
    margin-top: 60px;
  }
  /* a::selection {
    background-color: transparent;
    color: transparent;
  } */
  button {
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  button:focus {
    outline: none !important;
  }
  .right_section_section {
    grid-area: 1/2/2/3;
    position: relative;
    margin-bottom: 90px;

    @media (max-width: 991px) {
      grid-area: 4/1/5/3;
    }
  }
  .right_section {
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 0%;
    .search__container {
      display: flex;
      flex-direction: row;
      background: #f8f8f8;
      box-shadow: 0px 2.70041px 2.70041px rgba(0, 0, 0, 0.1);
      border-radius: 69.3284px;
      @media (max-width: 991px) {
        display: none;
      }
      .search__input {
        width: 100%;
        padding: 20px 24px;
        border: none;
        background-color: transparent;
        transition: transform 250ms ease-in-out;
        font-size: 14px;
        line-height: 18px;
        outline: none;
        color: var(--secondaryColor);

        backface-visibility: hidden;
      }
      .search_icon {
        display: flex;
        width: 70px;
        background-color: var(--purpleColor);
        justify-content: center;
        align-items: center;
        border-radius: 69.3284px;

        svg {
          color: #fff;
          font-size: 30px;
        }
      }
      .search__input::placeholder {
        color: rgba(87, 87, 86, 0.8) !important;
        text-transform: lowercase;
        letter-spacing: 1.5px;
      }
    }
    .categories_container_container {
      min-height: 300px;
      display: flex;
      background: #f8f8f8;
      box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.15);
      border-radius: 20px;
      margin-top: 50px;
      @media (max-width: 991px) {
        min-height: 1px;
      }
      .categories_container {
        flex-direction: column;
        padding: 20px;
        h3 {
          font-size: 24px;
          font-weight: 600;
          letter-spacing: 0.03em;
          margin-left: 15px;
        }
      }
      .categories_links {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        button {
          min-width: 100px;
          margin: 15px;
          text-decoration: none;
          color: var(--secondaryColor);
          transition: 0.2s ease-in-out;
          font-size: 16px;
          font-weight: 500;
          letter-spacing: 0.03em;
          outline: none;
          border: none;
          cursor: pointer;
          background: none;
          box-shadow: none;
          -webkit-tap-highlight-color: transparent;
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
        button:hover {
          color: var(--purpleColor);
          transform: scale(1.1);
        }
        button:active {
          color: black !important;
        }
        button:focus {
          color: black;
          outline: none;
        }
      }
    }
    .tags_container_container {
      display: flex;
      margin-top: 50px;
      min-height: 300px;
      background: #f8f8f8;
      box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.15);
      border-radius: 20px;
      @media (max-width: 991px) {
        min-height: 1px;
      }
      .tags_container {
        flex-direction: column;
        padding: 20px;

        h3 {
          font-size: 24px;
          font-weight: 600;
          letter-spacing: 0.03em;
          margin-left: 15px;
        }
      }
      .tag_links {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        button {
          margin: 15px;
          min-width: 100px;
          text-decoration: none;
          position: relative;
          padding: 15px;
          border: 1px solid var(--purpleColor);
          border-radius: 17.5px;
          transition: 0.3s ease;
          color: var(--secondaryColor);
          font-size: 12px;
          font-weight: 400;
          letter-spacing: 0.03em;
          display: flex;
          justify-content: center;
          outline: none;
          cursor: pointer;
        }
        button:hover {
          font-weight: 600;
        }
        button:focus {
          color: black;
          font-weight: 600;
          border: none;
        }
      }
    }
  }

  .blogs_container_container {
    grid-area: 1/1/2/2;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 70px;
    grid-column-gap: 50px;
    height: auto;
    width: 100%;
    @media (max-width: 991px) {
      grid-area: 2/1/3/3;
    }
    .search__container_mobile {
      grid-area: 1/1/2/3;
      display: none;
      flex-direction: row;
      background: #f8f8f8;
      box-shadow: 0px 2.70041px 2.70041px rgba(0, 0, 0, 0.1);
      border-radius: 69.3284px;
      @media (max-width: 991px) {
        display: flex;
      }
      .search__input {
        width: 100%;
        padding: 18px 24px;
        border: none;
        background-color: transparent;
        transition: transform 250ms ease-in-out;
        font-size: 14px;
        line-height: 18px;
        outline: none;
        color: var(--secondaryColor);

        backface-visibility: hidden;
      }
      .search_icon {
        display: flex;
        width: 70px;
        background-color: var(--purpleColor);
        justify-content: center;
        align-items: center;
        border-radius: 69.3284px;

        svg {
          color: #fff;
          font-size: 30px;
        }
      }
      .search__input::placeholder {
        color: rgba(87, 87, 86, 0.8) !important;
        text-transform: lowercase;
        letter-spacing: 1.5px;
      }
    }
    a {
      text-decoration: none;
      color: #000000;
      transition: 1s ease-in-out;
      outline: none;
      -webkit-tap-highlight-color: transparent;
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

    a:active {
      h4 {
        color: var(--purpleColor);
      }
    }

    img {
      width: 100%;
      height: 100%;
      border-radius: 6px;
      transition: 0.2s ease-in-out;
      object-fit: cover;
    }
    a:hover {
      .blog_image {
        transform: translateX(0px);
      }
    }
    .blogs_container {
      grid-area: auto;
      display: flex;
      flex-direction: column;
      height: auto;
      width: 100%;
      @media (max-width: 767px) {
        grid-area: auto/1/auto/3;
      }
      h4 {
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.03em;
        color: #000000;
        margin-bottom: 0;
        transition: 0.3s ease-out;
        color: var(--purpleColor);
        @media (max-width: 479px) {
          font-size: 14px;
        }
      }
      p {
        font-weight: 500;
        font-size: 24px;
        letter-spacing: 0.045em;

        @media (max-width: 479px) {
          font-size: 20px;
        }
      }
      .blog_image {
        display: block;
        height: 340px;
        transition: 0.5s ease-in-out;
        transform: translateX(-10px);
          .gatsby-image-wrapper{
            width: 100%;
            height: 100%;
          }
        @media (max-width: 479px) {
          transform: translateX(0px);
          height: 305px;
        }
      }
    }
  }
  .blog_paginate {
    grid-area: 2/1/3/2;

    @media (max-width: 991px) {
      grid-area: 3/1/4/3;
    }
    li {
      margin-left: 14px;
    }
    ul {
      padding-left: 0px;
    }
    a {
      border-radius: 6px !important;
    }
    .pagination {
      margin: 15px auto;
      display: flex;
      list-style: none;
      outline: none;
    }
    .pagination > .active > a {
      background-color: var(--purpleColor);
      border-color: var(--purpleColor);
      color: #fff;
    }
    .pagination > li > a {
      border: 1px solid var(--purpleColor);
      padding: 8px 20px;
      outline: none;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 500;
      color: var(--secondaryColor);
      border-radius: 6px;
    }
    .pagination > .active > a,
    .pagination > .active > span,
    .pagination > .active > a:hover,
    .pagination > .active > span:hover,
    .pagination > .active > a:focus,
    .pagination > .active > span:focus {
      background-color: var(--purpleColor);
      border-color: var(--purpleColor);
      outline: none;
    }
    .pagination > li > a,
    .pagination > li > span {
      color: var(--secondaryColor);
    }
    .pagination > li:first-child > a,
    .pagination > li:first-child > span,
    .pagination > li:last-child > a,
    .pagination > li:last-child > span {
      border-radius: unset;
    }
  }
`
