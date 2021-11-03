import React from "react"
import styled from "styled-components"
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormControl from "@material-ui/core/FormControl"

function PricingAndPayment(props) {
  const { data } = props
  const defaultValue = data.choose_your_subject[0].title
  const [value, setValue] = React.useState(`${defaultValue}`)

  const handleChange = event => {
    setValue(event.target.value)
  }

  return (
    <Wrapper>
      <div className="topic">
        <h2>{data.main_title}</h2>
      </div>
      <div className="pricing_payment_wrapper">
        <div className="pricing_payment_left_section">
          <h3>Choose your subject</h3>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="subjects"
              name="subject1"
              value={value}
              onChange={handleChange}
            >
              {data.choose_your_subject.map(d => (
                <FormControlLabel
                  value={d.title}
                  control={<Radio />}
                  label={d.title}
                  key={d.id}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </div>
        <div className="pricing_payment_right_section">
          {/* <ReactMarkdown>{data.pricing_details}</ReactMarkdown> */}
          <h3>Pricing</h3>
          <div className="pricing_payment_right_section_wrapper">
            {props.pricing.map(p => {
              return(
                <div className="pricing_payment_right_section_section">
                <div className="pricing_payment_details">
                  <h4 style={{textAlign: "center"}}>{p.title}</h4>
                  <h5 style={{fontWeight: "500"}}>
                   {p.description}
                  </h5>
                </div>
                <div className="pricing_payment_details_register">
                     <p>{p.amount_entry}</p>
                     <h6>{p.gst_included}</h6>
                     <a className="register_link" href={p.payment_register_link}>
                    Register
                  </a>
                </div>
              </div>
              )
            })}
           
          
          
            
          </div>
        </div>
      
      </div>
      <div className="payment_register">
      <a className="brouchre_button" href={props.brouchre.slug_link}>
            {props.brouchre.button_label}
          </a>
      </div>
      <div className="border_line">
        <div className="line" />
      </div>
      <div className="update_payment_details">
        <div>
          <h3>Update payment details here</h3>
        </div>
        <div className="update_details_desc">
          <p style={{ textAlign: "center" }}>
            {data.update_details_description}
          </p>
        </div>
      </div>
      <div className="update_details_button">
        <a className="update_link" href={data.update_details_link}>
          update details
        </a>
      </div>
    </Wrapper>
  )
}

export default PricingAndPayment

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: auto;
  width: 100%;
  height: auto;
  background-color: #f1f1f1;
  padding: 50px 0;
  @media (max-width: 767px) {
    margin-top: 60px;
  }
  .topic {
    grid-area: 1/2/2/11;
  }
  h4{
    color: #fff;
  }
  .pricing_payment_wrapper {
    grid-area: 2/1/3/12;
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: auto;
    width: 100%;
    height: auto;
    background-color: #f1f1f1;
    padding: 50px 0;
    @media (max-width: 767px) {
      padding: 0px;
      margin-top: -20px;
    }
  }
  .pricing_payment_left_section {
    grid-area: 1/2/2/11;
    /* padding-right: 30px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 30px;
    @media (max-width: 767px) {
      grid-area: 1/2/2/11;
    }
  }
  .pricing_payment_right_section {
    grid-area: 2/2/3/11;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    /* @media (max-width: 767px) {
      grid-area: 2/2/3/11;
      text-align: center;
    } */
  }
  .pricing_payment_right_section_wrapper {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .pricing_payment_right_section_section {
    width: 250px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
    border-radius: 6px;
    margin: 30px 0;
    /* background-color: #002F54; */

    @media (min-width: 1200px){
       width: 300px;
    }
    @media (max-width: 767px){
       width: 100%;
    }
  }

  .pricing_payment_details {
    border-radius: 6px;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height:200px;
    max-height: 400px;
  }
  .pricing_payment_right_section_section:nth-child(odd) > .pricing_payment_details {
    background-color: #E6571A;

  }
  .pricing_payment_right_section_section:nth-child(even) > .pricing_payment_details {
    background-color: #002F54;

  }
  /* .pricing_payment_right_section_wrapper:nth-child(even), .pricing_payment_details{
    background-color: #002F54;

  } */
  .pricing_payment_details_register{
    display:flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    width:100%;
    height:auto;
    padding-bottom: 20px;
    border-radius: 6px;
  }
  h5 {
    text-align: center;
    color: white;
    margin-top: 0;
  }
  h6{
    margin-top: 0px;
  }
  .brouchre_link {
    grid-area: 3/9/4/11;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 767px) {
      grid-area: 3/2/4/11;
    }
  }
  a {
    text-decoration: none;
  }
  .brouchre_button {
    width: auto;
    padding: 15px 25px;
    background-color: none;
    color: var(--secondaryColor);
    text-decoration: none;
    border-radius: 6px;
    border: 1px solid var(--thirdColor);
  }
  .update_details_desc {
    padding: 0 200px;
    margin-top: -30px;
    @media (max-width: 767px) {
      padding: 0px;
    }
  }
  h3 {
    font-size: 30px;
    text-align:center;
    font-weight: 600;

    @media (max-width: 767px) {
      font-size: 21px;
      text-align: center;
    }
  }
  h2 {
    font-weight: 600;
    font-size: 22px;
  }
  .MuiRadio-colorSecondary.Mui-checked {
    color: var(--thirdColor);
  }
  .MuiFormGroup-root {
    display: flex;
    flex-direction: row;
  }
  .MuiFormControlLabel-root {
    min-width: 300px;
    max-width: 350px;
    width: auto;
  }
  .MuiTypography-body1 {
    font-family: var(--family) !important;
    font-size: 20px !important;
    font-weight: 500;
    @media (max-width: 479px) {
      font-size: 15px !important;
    }
  }
  .payment_register {
    grid-area: 3/2/4/11;
    display: flex;
    justify-content: center;
  }
  .register_link {
    text-decoration: none;
    padding: 20px 50px;
    background-color: var(--thirdColor);
    color: var(--secondaryColor);
    border-radius: 6px;
  }
  .borderLeftRight {
    display: inline-block;
    position: relative;
    cursor: pointer;
  }
  .borderLeftRight::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: hsl(243, 80%, 62%);
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }
  .borderLeftRight:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  .line {
    width: 500px;
    height: 3px;
    background-color: var(--secondaryColor);
    border-radius: 6px;
    @media (max-width: 767px) {
      width: 80%;
    }
  }
  .border_line {
    grid-area: 4/2/5/11;
    display: flex;
    justify-content: center;
    margin-top: 60px;
  }
  .update_payment_details {
    grid-area: 5/2/6/11;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    @media (max-width: 767px) {
      grid-area: 5/2/6/11;
    }
  }
  .update_details_button {
    display: flex;
    justify-content: center;
    grid-area: 6/2/7/11;
  }
  .update_link {
    text-decoration: none;
    padding: 20px 50px;
    background-color: none;
    color: var(--secondaryColor);
    border-radius: 6px;
    border: 1px solid var(--thirdColor);
  }
`
