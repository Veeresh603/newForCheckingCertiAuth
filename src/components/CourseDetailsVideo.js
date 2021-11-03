import React from "react"
import styled from "styled-components"
import { makeStyles } from "@material-ui/core/styles"
import { withStyles } from "@material-ui/core/styles"
import MuiAccordion from "@material-ui/core/Accordion"
import MuiAccordionSummary from "@material-ui/core/AccordionSummary"
import MuiAccordionDetails from "@material-ui/core/AccordionDetails"
import Typography from "@material-ui/core/Typography"

const list = [{}]
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

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails)
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}))
function CourseContentAccordion(props) {
  const { ended } = props
  const { data, handleSubmit } = props
  const [count, setCount] = React.useState(1)
  const [checked, setChecked] = React.useState(false)
  console.log(count)
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState("panel 1")
  const [subtopicIndex, setSubtopicIndex] = React.useState(0)
  const [curriculumIndex, setCurriculunIndex] = React.useState(0)
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }
  // const handleSubmit = (id, i) => {
  //     setCurriculunIndex(i)
  //     setSubtopicIndex(id)

  // }
  React.useEffect(() => {
    const a = data.curriculum.map((d) =>
      d.subtopic.map((l) => list.push(!l.topic ? l.subTopic : l.topic))
    )
  }, [])

  const handleCheckboxChange = (e) => {
    e.target.checked ? setCount(count + 1) : setCount(count - 1)
  }

  return (
    <div className={classes.root}>
      <h4>{list.length - count}</h4>
      {data.curriculum.map((d, i) => {
        return (
          <Accordion
            square
            expanded={expanded === `${d.panel}`}
            onChange={handleChange(`${d.panel}`)}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography key={d.id}>{d.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {d.subtopic.map((l, id) => {
                  return (
                    <div className="lessons_panel">
                      <input
                        type="checkbox"
                        id={id}
                        name={!l.topic ? l.subTopic : l.topic}
                        handleChange={(e) => handleCheckboxChange(e)}
                      />

                      <ul
                        onClick={() => handleSubmit(id, i)}
                        key={l.id}
                        style={{ cursor: "pointer" }}
                      >
                        <li>{!l.topic ? l.subTopic : l.topic}</li>
                      </ul>
                    </div>
                  )
                })}
              </Typography>
            </AccordionDetails>
          </Accordion>
        )
      })}
    </div>
  )
}

export default CourseContentAccordion

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  .course_content_not_visible_desktop {
    opacity: 0;
    visibility: hidden;
    display: none;
  }
`
