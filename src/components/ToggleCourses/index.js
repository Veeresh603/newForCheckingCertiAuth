import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { withStyles } from "@material-ui/core/styles"
import MuiAccordion from "@material-ui/core/Accordion"
import MuiAccordionSummary from "@material-ui/core/AccordionSummary"
import MuiAccordionDetails from "@material-ui/core/AccordionDetails"
import Typography from "@material-ui/core/Typography"
import Wrapper from "./togglecourses.style"


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
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}))

export default function SimpleAccordion({data}) {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState("panel1")

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }
  return (
    <Wrapper>
      <div className={classes.root}>
         {data.map(d => {
             return(
                <Accordion
                square
                expanded={expanded === `${d.panel}`}
                onChange={handleChange(`${d.panel}`)}
              >
                <AccordionSummary
                  aria-controls="panel2d-content"
                  id="panel2d-header"
                >
                  <Typography key={d.id}>
                    {d.title}
                
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {d.subtopic.map(l => (
                      <li key={l.id} className="lessons_panel">
                        {!l.topic ? l.subTopic : l.topic}
                      </li>
                    ))}
                  </Typography>
                </AccordionDetails>
              </Accordion>
             )
         })}
       
       
      </div>
    </Wrapper>
  )
}
