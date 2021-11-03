import React from "react"
import styled from "styled-components"
import { makeStyles } from "@material-ui/core/styles"
import FormHelperText from "@material-ui/core/FormHelperText"
import FormControl from "@material-ui/core/FormControl"
import NativeSelect from "@material-ui/core/NativeSelect"
import { BsGridFill } from "react-icons/bs"
import { BsViewList } from "react-icons/bs"
import { GatsbyImage } from "gatsby-plugin-image";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))
function UpcomingWebinar(props) {
  const classes = useStyles()
  const [state, setState] = React.useState({
    webinar: "all",
  })

  const handleChange = event => {
    const name = event.target.name
    setState({
      ...state,
      [name]: event.target.value,
    })
  }

  return (
    <Wrapper>
      <div className="select">
        <div className="title">
          <h2>upcoming webinar</h2>
        </div>
        <div className="icon_row">
          <div>
            <BsGridFill className="icon" />
          </div>
          <div>
            <BsViewList className="icon1" />
          </div>
          <FormControl className={classes.formControl}>
            <NativeSelect
              className={classes.selectEmpty}
              value={state.webinar}
              name="webinar"
              onChange={handleChange}
              inputProps={{ "aria-label": "webinar" }}
            >
              <option value="all">all</option>
              <option value="ai & ml">ai & ml</option>
              <option value="ethical hacking">ethical hacking</option>
            </NativeSelect>
            <FormHelperText></FormHelperText>
          </FormControl>
        </div>
        <div className="main_heading">
          <h1>Check Our Upcoming Webinar</h1>
        </div>
      </div>

      <div className="grid">
        {props.data.map(d =>
          d.featured && d.category === state.webinar ? (
            <div key={d.id} className="grid_section">
              <div className="box">
                <div className="main_title">{d.title}</div>
                <div className="image">
                  <GatsbyImage
                    image={d.image.childImageSharp.gatsbyImageData}
                    style={{ width: "350px", height: "360px" }} />
                </div>

                <div className="topic">
                  <h4>{d.topic}</h4>
                </div>
              </div>
            </div>
          ) : (
            d.featured &&
            state.webinar === "all" && (
              <div key={d.id} className="grid_section">
                <div className="box">
                  <div className="main_title">{d.title}</div>
                  <div className="image">
                    <GatsbyImage
                      image={d.image.childImageSharp.gatsbyImageData}
                      style={{ width: "350px", height: "360px" }} />
                  </div>

                  <div className="topic">
                    <h4>{d.topic}</h4>
                  </div>
                </div>
              </div>
            )
          )
        )}
      </div>
    </Wrapper>
  );
}

export default UpcomingWebinar

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: auto;

  .select {
    grid-area: 1/2/2/6;
    display: flex;
    flex-flow: column wrap;
  }
  .grid {
    grid-area: auto/2/auto/11;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .grid_section {
    display: flex;
    flex-direction: row;
  }
  .icon_row {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .icon {
    width: 35px;
    height: 35px;
    color: var(--primaryColor);
  }
  .icon1 {
    width: 35px;
    height: 35px;
    color: var(--primaryColor);
    margin-left: 15px;
  }
  .main_heading {
    grid-area: auto/1/auto/2;
  }
  .box {
    display: flex;
    flex-direction: column;
    padding-left: 25px;
  }
  .topic {
    width: 100%;
    z-index: 1;
    display: flex;
    justify-content: flex-end;
  }
  h4 {
    width: 90%;
    background-color: #f8f8f8;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
    color: #111111;
    height: auto;
    padding: 20px;
    margin-top: -25px;
    font-size: 12px;
    z-index: 1;
    font-weight: 400;
    @media (max-width: 991px) {
      width: 90%;
      font-size: 10px;
      height: auto;
    }
  }
  .grid_section{
    cursor:pointer;
  }
  .grid_section:hover {
    h4 {
      background-color: var(--primaryColor);
      color: white;
      transition: 0.5s ease-in-out;
    }
  }
`
