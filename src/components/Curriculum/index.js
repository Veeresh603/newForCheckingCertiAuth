import React from "react"
import { withStyles } from "@material-ui/core/styles"
import MuiAccordion from "@material-ui/core/Accordion"
import MuiAccordionSummary from "@material-ui/core/AccordionSummary"
import MuiAccordionDetails from "@material-ui/core/AccordionDetails"
import Typography from "@material-ui/core/Typography"
import styled from "styled-components"
import { BsLock } from "@react-icons/all-files/bs/BsLock"
import { Link } from "gatsby"
import AuthContext from "../context/AuthContext"
// import { API_URL } from "../../../utils/auth"

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion)

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary)

const AccordionDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails)

export default function CustomAccordion(props) {
  // const [auth, setAuth] = React.useState(true)
  const {ids, setId} = React.useContext(AuthContext)
  const { curriculum, slug, button, id } = props
  const [orders, setOrders] = React.useState([])
  // console.log(curriculum)

  const [expanded, setExpanded] = React.useState("panel1")

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  // React.useEffect(() => {
  //   const token = Cookie.get("token");
  //       const fetchOrders = async () => {
  //     const { data } = await axios.get('http://localhost:1337/orders', {
  //       headers: {
  //         Authorization:
  //           `Bearer ${token}`,
  //       },
  //     });
  //     // console.log(data);
  //     const singleLesson = data[0].courses.map(d => `Course_${d.id}`)

  //     const lessonFilter = singleLesson.filter(a => a === id)

  //     setOrders(lessonFilter[0])
  //     setId(lessonFilter[0])
  //   }
  //   fetchOrders()
  // }, [])
  // console.log(orders);
  // console.log(ids);
  return (
    <Wrapper>
      <div className="curriculum">
        {curriculum.map(l => {
          return (
            <Accordion
              square
              expanded={expanded === `${l.panel}`}
              onChange={handleChange(`${l.panel}`)}
            >
              <AccordionSummary
                aria-controls="panel2d-content"
                id="panel2d-header"
              >
                <Typography key={l.id}>
                  {l.title}
                  <BsLock className="lock_icon" />
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {l.subtopic.map(d => (
                    <li key={d.id} className="lessons_panel">
                      {/* {orders === id ?  ( */false ? 
                        <Link style={{ backgroundColor: "transparent" }} href={`${slug}/${l.id}/learn/lecture/${d.id}`}>
                          {!d.topic ? d.subTopic : d.topic}

                        </Link>
                       :
                        !d.topic ? d.subTopic : d.topic

                      }
                    </li>
                  ))}
                </Typography>
              </AccordionDetails>
            </Accordion>
          )
        })}
        <Link className="link" to={`https://certisured.com${button.slug_link}`}>
          {button.button_label}
        </Link>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  margin-top: 20px;
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: auto;

  @media (max-width: 479px) {
    width: 100%;
    padding: 0px;
  }
  .MuiCollapse-entered {
    background-color: #c4c4c4;
  }
  li {
    width: 100%;
    list-style: none;
    font-size: 16px;
    font-family: var(--family);
    padding: 10px 0;
  }

  .lessons_panel {
    background-color: #d9f8ff;
    margin-bottom: 5px;
    padding-left: 5px;
    color: var(--secondaryColor);
    padding-left: 16px;
    font-weight: 400;
  }
  .lessons_panel:nth-child(odd) {
    background-color: #deeffe;
    color: var(--secondaryColor);
  }

  .MuiCollapse-entered {
    width: 100%;
    padding: 0px;
  }
  .link {
    margin-top: 20px;
    border-radius: 6px;
  }
  .curriculum {
    padding-bottom: 40px;
    grid-area: 1/2/2/11;
  }
  a {
    background-color: var(--thirdColor);
    width: auto;
    padding: 15px;
    text-decoration: none;
    color: var(--secondaryColor);
    margin-top: 50px;
  }
  .MuiCollapse-entered
    > div:nth-child(1)
    > div:nth-child(1)
    > div:nth-child(1)
    > div:nth-child(1)
    > p:nth-child(1) {
    width: 100%;
    padding: 0px;
  }
  .MuiCollapse-entered {
    padding: 0px;
    background-color: #ffffff;
  }
  div.MuiPaper-root {
    font-size: 20px;
    color: var(--secondaryColor);
  }
  /* .MuiCollapse-entered > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > p:nth-child(1){
          color: #000000;
          padding-left: 16px;
          background-color: #ffffff;
        } */
  .lock_icon {
    color: black;
  }
  div.MuiPaper {
    color: var(--primaryColor);
  }
  div.MuiPaper-root {
    margin-bottom: 20px !important;
  }
  .MuiTypography-body1 {
    font-weight: 500 !important;
  }

`
