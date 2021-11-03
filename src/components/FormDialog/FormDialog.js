import React from "react"
import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"
import LetsTalk from "../LetsTalk"
import Button from "@material-ui/core/Button"

import styled from "styled-components"
import "./formdialog.css"

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Wrapper id={props.id}>
      <div className="row">
        <div className="row_section">
          {!props.desc ? null : <h1 style={{fontWeight: "500"}}>{props.desc}</h1>}
        </div>
        <div className="button_class">
          <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            {props.title}
          </Button>
        </div>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        style={{ width: "100%" }}
      >
        <DialogContent
          style={{ backgroundColor: "var(--secondaryColor)", width: "auto" }}
        >
          <LetsTalk action={props.action} url={props.url} value={props.value} />
        </DialogContent>
      </Dialog>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: none;

  @media (max-width: 991px) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: auto;
    justify-content: center;
    align-items: center;
    margin-top: 0px !important;
    grid-area: 1/2/2/11;
    padding-bottom: 20px;
  }
  .MuiButton-root {
    font-family: "Montserrat" !important;
    border-radius: 6px !important;
  }

  h1 {
    font-size: 17px;
    @media (max-width: 767px) {
      grid-area: 1/2/2/11;
      font-size: 16px;
    }
  }
  .row_section {
    @media (max-width: 479px) {
      width: 100% !important;
    }
  }
  .row {
    flex-wrap: row wrap;
    grid-area: 1/2/2/11;
    @media (max-width: 767px) {
      flex-direction: column;
    }
  }
  .button_class {
    margin-left: 0px;
    @media (max-width: 479px) {
      margin: auto;
    }
  }
  button {
    width: auto;
    grid-area: 1/8/2/11;
    color: var(--secondaryColor);
    @media (max-width: 479px) {
      grid-area: 2/2/3/11;
    }
  }
  /* button:hover{
    background-color: var(--purpleColor);
    border-bottom-width: 0;
    border-top-width: 4px;
    color : #f1f1f1;
  } */
  .MuiButton-outlinedPrimary {
    color: var(--secondaryColor);
    background-color: var(--thirdColor);
    border: none;
    padding: 12px 40px;
    border-radius: 6px;

    transition: all 0.1s ease-in-out;
  }
  @media (max-width: 479px) {
    .MuiButton-outlinedPrimary {
      padding: 12px 30px;
    }
  }
  .MuiButton-outlinedPrimary:hover {
    background-color: var(--purpleColor);

    color: #f1f1f1;
  }

  .MuiPaper-root {
    background-color: black !important;
  }
  .MuiDialogContent-root:first-child {
    background-color: black !important;
  }
  .MuiDialogContent-root {
    background-color: black !important;
  }
  .MuiDialog-paperWidthSm {
    max-width: 100% !important;
    width: 80%;
  }
`
