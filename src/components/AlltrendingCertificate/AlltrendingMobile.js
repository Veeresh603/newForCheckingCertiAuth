import React from "react"
import AlltrendingCarousel from "./AlltrendingCarousel"
import MuiAccordion from "@material-ui/core/Accordion"
import MuiAccordionSummary from "@material-ui/core/AccordionSummary"
import MuiAccordionDetails from "@material-ui/core/AccordionDetails"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { withStyles } from "@material-ui/core/styles"

import styled from "styled-components"
import trending from "../../images/trending 2.svg"

const Accordion = withStyles({
  root: {
    border: "none",
    boxShadow: "none",
    padding: "10px",

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
    background: "var(--thirdColor)",
    marginBottom: -1,
    minHeight: 56,
    boxShadow: "0px 1.45516px 4.36547px rgba(0, 0, 0, 0.25)",
    borderRadius: "6px",
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

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    background: "#fff",
  },
}))(MuiAccordionDetails)

export default function AlltrendingMobile({ data, value }) {
  const [expanded, setExpanded] = React.useState("popular course")

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <Wrapper>
      <Accordion
        square
        expanded={expanded === "popular course"}
        onChange={handleChange("popular course")}
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          expandIcon={<ExpandMoreIcon />}
          className={`topics_icon_wrapper1 ${
            expanded === "popular course" && "active-btn"
          }`}
        >
          <div className="icon">
            <img src={trending} alt="certificate popular course" />
          </div>
          <Typography className="bootcamp_accordion_title">
            popular course
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AlltrendingCarousel data={data} expanded={expanded} popular={true} />
     
        </AccordionDetails>
      </Accordion>
      {data.map((d) => (
        <Accordion
          square
          expanded={expanded === `${d.main_title}`}
          onChange={handleChange(`${d.main_title}`)}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
            expandIcon={<ExpandMoreIcon />}
            className={`topics_icon_wrapper1 ${
              expanded === d.main_title && "active-btn"
            }`}
          >
            <div className="icon">
              <img src={d.icon.url} alt="certificate popular course" />
            </div>
            <Typography className="bootcamp_accordion_title">
              {d.main_title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <AlltrendingCarousel
              data={data}
              expanded={expanded}
              popular={false}
            />
          </AccordionDetails>
        </Accordion>
      ))}
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .MuiTypography-root.bootcamp_accordion_title.MuiTypography-body1 {
    font-size: 18px;
    font-weight: 500;
    font-family: var(--family);
  }
  .MuiCollapse-container.MuiCollapse-entered {
    box-shadow: 0px 1.45516px 4.36547px rgba(0, 0, 0, 0.25);
  }
  h4 {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.03em;
  }
  .MuiAccordionDetails-root {
    @media (max-width: 479px) {
      padding-top: 10px;
      padding-left: 0px;
      padding-right: 0px;
      padding-bottom: 10px;
    }
  }
  .MuiTypography-body1 {
    display: flex;
    width: 100%;
    justify-content: center;
  }
  .course_certificate_mobile {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;

    @media (max-width: 479px) {
      height: 216px;
    }
  }
  a {
    @media (max-width: 479px) {
      font-size: 12px;
    }
  }
  .course_certification_details {
    background-color: #f1f1f1;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    padding: 10px 20px;
    min-height: 260px;
  }
  .MuiCollapse-entered {
    box-shadow: none !important;
  }
  .MuiAccordionSummary-content {
    align-items: center;
  }
  .bootcamp_accordion_title {
    @media (max-width: 479px) {
      font-size: 14px !important;
    }
  }
`
