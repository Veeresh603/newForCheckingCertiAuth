import React from "react"
import { withStyles } from "@material-ui/core/styles"
import MuiAccordion from "@material-ui/core/Accordion"
import MuiAccordionSummary from "@material-ui/core/AccordionSummary"
import MuiAccordionDetails from "@material-ui/core/AccordionDetails"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import styled from "styled-components"
import ReactMarkdown from "react-markdown"
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
    background: "#F5F4FD",
    marginBottom: -1,
    minHeight: 56,
    boxShadow: "0px 1.45516px 4.36547px rgba(0, 0, 0, 0.25)",

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
    background: "#F5F4FD",
  },
}))(MuiAccordionDetails)

export default function CustomizedAccordions({ data }) {
  const panel = data[0].title || "panel1"
  const [expanded, setExpanded] = React.useState(`${panel}`)

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <Wrapper>
      {data.map((d) => (
        <Accordion
          square
          expanded={expanded === d.title}
          onChange={handleChange(`${d.title}`)}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography className="bootcamp_accordion_title">
              {d.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ReactMarkdown>{d.session}</ReactMarkdown>
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
    @media (max-width: 479px){
      font-size: 16px
    }
  }
  .MuiCollapse-container.MuiCollapse-entered {
    box-shadow: 0px 1.45516px 4.36547px rgba(0, 0, 0, 0.25);
  }
  h4 {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.03em;
  }
  .MuiAccordion-root{
    @media (max-width: 479px){
      padding-left: 0px !important;
      padding-right: 0px !important;

    }
  }
`
