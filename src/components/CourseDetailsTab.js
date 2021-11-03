import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import CourseDetailsVideo from "./CourseDetailsVideo"
import styled from "styled-components"
import Overview from "./Overview/overview"
import Notes from "./Notes"
function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}))

export default function ScrollableTabsButtonAuto(props) {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Wrapper>
    <div className={classes.root}>
      <div className="course_details_desktop_version">

        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="Overview" {...a11yProps(0)} />
            <Tab label="Notes" {...a11yProps(1)} />
            <Tab label="Announcements" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Overview
            overview={props.data.overview}
            ReadMoreProps={props.ReadMoreProps}
          />{" "}
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Notes
            elapsedTime={props.elapsedTime}
            onPlayPause={props.OnPlayPause}
            showNotes={props.showNotes}
            handleCancel={props.handleCancel}
          />{" "}
        </TabPanel>
        <TabPanel value={value} index={2}>
          <h2>Announcements</h2>
        </TabPanel>
      </div>
      <div className="course_details_tablet_version">
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="Course content" {...a11yProps(0)} />
            <Tab label="Overview" {...a11yProps(1)} />

            <Tab label="Notes" {...a11yProps(1)} />
            <Tab label="Announcements" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
        <CourseDetailsVideo data={props.data} handleSubmit={props.handleSubmit} />

        </TabPanel>
        <TabPanel value={value} index={1}>
          <Overview
            overview={props.data.overview}
            ReadMoreProps={props.ReadMoreProps}
          />{" "}
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Notes
            elapsedTime={props.elapsedTime}
            onPlayPause={props.OnPlayPause}
            showNotes={props.showNotes}
            handleCancel={props.handleCancel}
          />{" "}
        </TabPanel>
        <TabPanel value={value} index={3}>
          <h2>Announcements</h2>
        </TabPanel>
      </div>
    </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  /*        
        .MuiTab-wrapper{
            color:white;
        }
         */
  width: 100%;
  height: auto;
  .course_details_tablet_version {
    display: none;
  }
  .MuiTabs-scroller {
    width: 50%;
    position: absolute;
    right: 0;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    background: var(--secondaryColor);
    z-index: 2;
    @media (max-width: 991px) {
      width: 100%;
    }
  }
  .MuiPaper-elevation4 {
    box-shadow: none !important;
  }
  .MuiPaper-root {
    margin-top: -21px;
    @media (max-width:767px){
      margin-top: 0px;
    }
  }
  .MuiTab-textColorPrimary.Mui-selected {
    color: #fff;
  }
  .PrivateTabIndicator-colorPrimary-33 {
    background-color: #fff;
  }
  .MuiTab-root {
    font-weight: 500;
  }
  .MuiTab-textColorPrimary {
    color: #fff;
  }
  .MuiTabs-root {
    background: #fff;
  }
  .MuiBox-root {
    padding: 30px 0px !important;
  }

  @media (max-width: 767px) {
    .course_details_desktop_version {
      display: none;
    }
    .course_details_tablet_version {
      display: block;
    }
  }
`
