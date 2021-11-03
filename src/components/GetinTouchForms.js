import React from "react"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import styled from "styled-components"

function Forms(props) {
  return (
    <Wrapper>
      <Form action={!props.action ? `https://formspree.io/f/xwkaeakp` : props.action} method="POST">
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="name" name="name" placeholder="name" required={true} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalPassword">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="email"
              name="_replyto"
              placeholder="email"
              required={true}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalPassword">
          <Form.Label name="phone" column sm={2}>
            Phone
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="phone"
              placeholder="+91-1234567890"
              required={true}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formHorizontalPassword">
          <Form.Label column sm={2}>
            Message
          </Form.Label>
          <Col sm={10}>
            <textarea
              name="message"
              rows="5"
              placeholder="message"
              className="form-control"
              required={true}
            ></textarea>
          </Col>
        </Form.Group>
        <input
          type="hidden"
          name="_next"
          value={!props.url ? `https://certisureed.com/what-we-do` : props.url}
        />
        <input type="hidden" name="_subject" value={!props.value ? `get in touch contact form` : props.value} />
        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }} style={{width: "100%", display: "flex", justifyContent: "center"}}>
            <Button type="submit">Submit</Button>
          </Col>
        </Form.Group>
      </Form>
    </Wrapper>
  )
}

export default Forms

const Wrapper = styled.div`
  .form-group {
    display: flex;
    align-items: center;
    padding: 20px;
     color: #ffffff;
  }
  .form-control {
    border: none;
    background: none;
    border-bottom: 1px solid #fff;
  }
  .form-label {
    width: 100px;
  }
  input,
  textarea {
    width: 100%;
    padding: 0px;
    margin-left: 30px;
    box-sizing: border-box;
    background: none;
    outline: none;
    resize: none;
    border: 0;
    font-family: "Montserrat", sans-serif;
    transition: all 0.3s;
    border-bottom: 2px solid var(--secondaryColor);
    color: #ffffff;
    font-weight: 900;
    @media (max-width: 479px) {
      width: 84%;
    }
    ::placeholder{
      color:var(--secondaryColor)
    }
  }
  input:focus {
    border-bottom: 2px solid #78788c;
  }
`
