import React, { useState, useContext } from "react"
import links from "../constants/links"
import styled from "styled-components"
import { Link, navigate } from "gatsby"
import FormDialog from "../components/FormDialogcopy/FormDialog"
import "./navbar.css"
import { UserContext } from "../components/UseToken"
import { RiShoppingCart2Line } from "@react-icons/all-files/ri/RiShoppingCart2Line"

const Navbar = ({ Logo }) => {
  const [isOpen, setNav] = useState(false)
  const [colorChange, setColorchange] = useState(false)

  const { cart, token } = useContext(UserContext)
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true)
    } else {
      setColorchange(false)
    }
  }
  React.useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor)

    return () => window.removeEventListener("scroll", changeNavbarColor)
  }, [])

  const removeToken = () => {
    sessionStorage.removeItem("token")
    setTimeout(() => {
      window.location.href = "/"
    }, 1000)
  }
  const toggleNav = () => {
    setNav((isOpen) => !isOpen)
  }
  return (
    <NavStyles className={colorChange ? "navbar colorChange" : "navbar"}>
      <div className="masthead">
        <Link to="/">
          <img src={Logo} alt="Analogica Logo" />
        </Link>
        <button
          className={isOpen ? "toggle-btn toggle-btn-active" : "toggle-btn"}
          type="button"
          onClick={toggleNav}
          aria-label="Menu Button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
        {links.map((item, index) => {
          return (
            <li key={index}>
              <Link onClick={toggleNav} to={item.path} className={item.class}>
                {item.text}
              </Link>
            </li>
          )
        })}
        <li>
          <Link onClick={toggleNav} to="/course-list">
            demo courses
          </Link>
        </li>
        {token && (
          <li>
            <Link onClick={toggleNav} to="/profile" className="courses">
              profile
            </Link>
          </li>
        )}
        {token ? (
          <li>
            <button onClick={removeToken}>logout</button>
          </li>
        ) : (
          <li>
            <Link onClick={toggleNav} to="/login" className="courses">
              login
            </Link>
          </li>
        )}
        {cart && (
          <li className="cart_wrapper">
            <Link onClick={toggleNav} to="/cart" className="cart_icon_link">
              <RiShoppingCart2Line className="cart_icon" />
            </Link>
            <span>{cart.length ? cart.length : null}</span>
          </li>
        )}

        {/* <FormDialog
          id="letstalk"
          title="let's talk"
          action="https://formspree.io/f/mnqlqnrp"
          value="lets talk"
          url="https://certisured.com"
        /> */}
      </ul>
    </NavStyles>
  )
}

export const NavStyles = styled.nav`
  position: fixed;
  z-index: 999;
  top: 0;
  display: flex;
  width: 100%;
  left: 0;
  right: 0;
  padding-top: 0px;
  /* padding-left: 7rem;
    padding-right: 7rem; */
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  /* grid-template-rows: 70px; */
  grid-column-gap: 5px;
  box-sizing: border-box;
  .cart_wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;

    span {
      position: absolute;
      right: -25%;
      top: -20%;
    }
    h3 {
      margin: 0;
      padding: 0;
      font-weight: 600;
      font-size: 1.2rem;
    }
  }
  .cart_icon {
    font-size: 1.6rem;
  }
  .cart_icon_link {
    border: 1px solid var(--secondaryColor);
    display: flex;
    padding: 5px;
    border-radius: 50%;
  }
  @media (max-width: 991px) {
    /* padding-left: 2px; */
  }
  .masthead {
    grid-area: 1/2/2/3;
    z-index: 3;
    width: 100%;
    height: 80px;
    display: flex;
    @media (max-width: 991px) {
      align-items: center;
    }
    img {
      margin-left: 0px;
      width: 200px !important;
      margin-top: 0px;
      @media (min-width: 768px) {
        width: 100px;
      }
      @media (max-width: 991px) {
        /* margin-left:30px; */
      }
      @media (min-width: 1200px) {
        width: 120px;
      }
    }
  }
  .nav-links {
    grid-area: 1/5/2/11;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    position: fixed;
    text-align: center;
    background: #f1f1f1;
    margin: 0;
    height: 70%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transform: translateX(100%);
    transition: 0.3s ease-in;
    list-style: none;
    padding-left: 0;
    place-items: center;
    li {
      list-style: none;
      font-size: 18px;
      font-weight: 500;
      margin-left: 0;
      padding: 0px;

      @media (max-width: 991px) {
        margin-top: 2rem;
      }
      button {
        outline: none;
        box-shadow: none;
        background: none;
        border: none;
        font-size: 18px;
        font-weight: 500;
        cursor: pointer;
      }
      a {
        text-decoration: none;
        text-transform: lowercase;
        color: black;
        transition: 0.3s;

        &.active {
          color: var(--thirdColor);
        }
      }
      &:hover {
        cursor: pointer;
        a {
          color: #2cde80;
        }
      }

      button {
        text-decoration: none;
        text-transform: lowercase;
        color: black;
        transition: 0.3s;

        &.active {
          color: var(--thirdColor);
        }
      }
      &:hover {
        cursor: pointer;

        button {
          color: #2cde80;
        }
      }
    }
    &.show-nav {
      transform: translateX(0%);
    }
  }
  /* a {
    text-decoration: none;
    text-transform: lowercase;
    color: black;
    transition: 0.3s;
    cursor: pointer;
    &.active {
      color: var(--thirdColor);
    }
  }
  a:hover {
    color: #2cde80;
  } */

  .toggle-btn {
    position: absolute;
    right: 30px;
    width: 40px;
    height: 40px;
    padding: 5px;
    background-color: #000000;
    border: none;
    cursor: pointer;
    @media (max-width: 479px) {
      top: 20px;
    }
    span {
      display: block;
      width: 30px;
      height: 2px;
      background-color: #fff;
      transition: 0.2s ease-in;
      &:nth-child(1) {
        transform: translateY(-5px);
      }
      &:nth-child(3) {
        transform: translateY(5px);
      }
    }
    &.toggle-btn-active {
      span {
        &:nth-child(1) {
          transform: translateY(2px) rotate(45deg);
        }
        &:nth-child(2) {
          opacity: 0;
          transform: translateX(-100%);
        }
        &:nth-child(3) {
          transform: translateY(-2px) rotate(-45deg);
        }
      }
    }
  }

  @media (min-width: 992px) {
    .masthead {
      flex-direction: column;
      justify-content: center;
    }
    .toggle-btn {
      display: none;
    }
    .nav-links {
      background: transparent;
      flex-direction: row;
      margin-left: auto;
      position: relative;
      transform: translateX(0);
      transition: none;
      li {
        margin-left: 2rem;
      }
    }
  }
  /* .courses {
    transition: 0.1s ease-in-out;
    border: 1px solid #fff;
    padding: 10px 10px;
    border-radius: 5px;
  }
  .courses:hover {
    background: #fff;
    color: var(--secondaryColor) !important;
  } */
`

export default Navbar
