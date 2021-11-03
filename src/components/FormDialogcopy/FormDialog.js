import React from "react"
import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"

import styled from "styled-components"
import LetsTalk from "../LetsTalk"
import "./formdialog.css"
import MailChimpForm from "../Mailchimp"

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Wrapper>
      <Button variant="outlined" color="primary" onClick={handleClickOpen} style={props.mailchimp && { borderRadius: "66.8944px", padding: "20px 23px", fontSize: "14px", minWidth: "200px" }}>
        {props.mailchimp ? props.title.button_label : props.title}
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        style={{ width: "100%" }}
      >
        <DialogContent
          style={{ backgroundColor: "var(--secondaryColor)", width: "auto" }}
        >
          {props.mailchimp ? <MailChimpForm data={props.title} slug={props.slug}  /> : (
            <LetsTalk
              action={props.action}
              url={props.url}
              value={props.value}
            />
          )}
        </DialogContent>
      </Dialog>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .MuiButton-root {
    font-family: "Montserrat" !important;
  }

  button {
    width: auto;
    grid-area: 1/10/2 / auto;

    @media (max-width: 479px) {
      grid-area: 2/2/3/11;
    }
  }
  .MuiButton-outlinedPrimary {
    color: #fff;
    background-color: var(--primaryColor) !important;
    width: auto;
    padding: 10px 10px;
    margin: -11px 20px;
    text-transform: lowercase;
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
const Button = styled.button`
  width: auto;
  background-color: var(--thirdColor);
  text-align: center;
  text-decoration: none;
  align-items: center;
  align-self: center;
  justify-content: center;
  margin-left: 2rem;
  color: var(--secondaryColor);
  font-size: 18px;
  border: none;
  cursor: pointer;
  font-family: var(--family);
  padding: 12px 45px;
  border-radius: 6px;

  transition: all 0.1s ease-in-out;

  @media (max-width: 991px) {
    margin-top: 2rem;
  }

  &:hover {
    background-color: var(--purpleColor);

    color: #f1f1f1;
  }
  @media (max-width: 991px) {
    margin-top: 15px;
    margin-left: 1px;
  }
`
