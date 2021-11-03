import React from "react"
import ReactMarkdown from "react-markdown"
import styled from "styled-components"
import check from "../../images/check.png"
import FormDialog from "./DemoClassFormDialog/FormDialog"

function BootcampPricing({
  data,
  pricing,
  demo_class_info,
  slug,
  title,
  brochure,
  span,
}) {
  return (
    <Wrapper>
      <div className="bootcamp_pricing_heading">
        <span>{data.span}</span>
        <h1>{data.title}</h1>
      </div>
      <div className="bootcam_pricing_details_wrapper" id="benefits">
        <ReactMarkdown>{data.description}</ReactMarkdown>
        <div className="another_pricing_section">
          {pricing.map((p) => {
            return (
              <div
                className="another_pricing_inner_section"
                key={p.id}
                style={{ background: `${p.background_color_code}` }}
              >
                <div className="another_pricing_box">
                  <div className="pricing_text">
                    {p.title === "Starter" ? (
                      <h2 className="pricing_h2">{p.title}</h2>
                    ) : (
                      <h2 className="pricing1_h2">{p.title}</h2>
                    )}
                  </div>
                  <div className="pricing_short_description">
                    {p.title === "Starter" ? (
                      <p style={{ color: "#000" }}>{p.short_desc}</p>
                    ) : (
                      <p style={{ color: "#fff" }}>{p.short_desc}</p>
                    )}
                  </div>
                  <div className="pricing_pricing_amount_">
                    {p.title === "Starter" ? (
                      <span style={{ color: "#000" }}>Starts at</span>
                    ) : (
                      <span style={{ color: "#fff" }}>Starts at</span>
                    )}
                    <div className="pricing_amount_row">
                      {p.title === "Starter" ? (
                        <>
                          <span style={{ color: "#000" }}>{p.currency_icon}</span>
                          <h1 style={{ color: "#000" }}>{p.starts_at}</h1>
                        </>
                      ) : (
                        <>
                          <span style={{ color: "#fff" }}>{p.currency_icon}</span>
                          <h1 style={{ color: "#fff" }}>{p.starts_at}</h1>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="pricing_checkout_button">
                    <a href={p.stripe_price_id.slug_link} className="pricing1">
                      {p.stripe_price_id.button_label}
                    </a>
                  </div>
                </div>
                <div className="pricing_includes_section">
                  {p.title === "Starter" ? (
                    <h5 style={{ color: "#000" }}>
                      {p.everything_in_standard_plus}
                    </h5>
                  ) : (
                    <h5 style={{ color: "#fff" }}>
                      {p.everything_in_standard_plus}
                    </h5>
                  )}

                  <ul>
                    {p.points.map((l) =>
                      p.title === "Starter" ? (
                        <li
                          style={{ color: "#000", fontSize: "11.8623px" }}
                          key={l.id}
                        >
                          {l.title}
                        </li>
                      ) : (
                        <li
                          style={{ color: "#fff", fontSize: "11.8623px" }}
                          key={l.id}
                        >
                          {l.title}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

        <div className="demo_class_info_wrapper">
          {demo_class_info.make_visible && (
            <div className="demo_class_info_section">
              <div className="heading">
                <h2>{demo_class_info.title}</h2>
              </div>
              <div className="description">
                <ReactMarkdown>{demo_class_info.desciption}</ReactMarkdown>
              </div>
              <div className="demo_class_modal_button">
                <FormDialog
                  mailchimp={true}
                  demo_class={demo_class_info}
                  slug={slug}
                  title={title}
                  span={span}
                  brochure={brochure}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  )
}

export default BootcampPricing

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: auto;
  box-sizing: border-box;
  margin-top: 100px;
  background-color: #f1f1f1;
  padding: 60px 0;
  span {
    font-size: 26px;
    letter-spacing: 0.04em;
    font-weight: 300;
    @media (max-width: 767px) {
      font-size: 20px;
    }
  }
  h1 {
    padding-top: 0px !important;
    font-weight: bold;
    color: var(--secondaryColor);
    margin-top: 0px;
    font-size: 48px;
    letter-spacing: 0.04em;
    @media (max-width: 767px) {
      font-size: 30px;
    }
  }
  .bootcamp_pricing_heading {
    grid-area: 1/3/2/7;
    @media (max-width: 767px) {
      grid-area: 1/2/2/11;
    }
  }
  .bootcam_pricing_details_wrapper {
    grid-area: 2/3/3/10;
    @media (max-width: 767px) {
      grid-area: 2/2/3/11;
    }
  }
  li {
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0.03em;
    padding-bottom: 15px;
    @media (max-width: 767px) {
      font-size: 15px;
    }
  }
  ul {
    padding-bottom: 10px;
    @media (max-width: 767px) {
      padding-left: 0px;
    }
  }
  h2 {
    font-size: 26px;
    font-weight: 500;
    letter-spacing: 0.03em;
  }
  .bootcamp_pricing {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    @media (max-width: 479px) {
      flex-wrap: wrap;
    }
  }
  .pricing_main_section_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .pricing_main_secion {
    background: linear-gradient(
      180deg,
      rgba(29, 23, 82, 0.83) 0%,
      #191d38 100%
    );
    border-radius: 6px;
    width: 359.63px;
    height: 388.67px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 15px;
  }
  .bootcamp_pricing_amount {
    margin-left: 50px;
    @media (max-width: 479px) {
      margin-left: 0px;
    }
  }
  h3 {
    font-weight: 500;
    @media (max-width: 767px) {
      font-size: 22px;
    }
  }
  .bootcamp_register {
    display: flex;
    justify-content: center;
  }
  .pricing {
    width: auto;
    background-color: #d22b6e;
    padding: 15px 35px;
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    font-size: 14px;
    border-radius: 66.8944px;
  }
  .pricing1 {
    width: auto;
    background-color: var(--thirdColor);
    color: var(--secondaryColor);
    padding: 15px 35px;
    text-decoration: none;
    font-weight: 500;
    font-size: 14px;
    border-radius: 66.8944px;
  }
  h5 {
    font-weight: 500;
  }
  .bootcamp_logos_wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
  }
  .bootcamp_logos_section {
    display: block;
    width: 150px;
    height: 150px;
  }
  .logo_banner1 {
    max-width: 150px;
    @media (max-width: 767px) {
      width: 100px;
      margin-left: 10px;
    }
  }
  .bootcamp_audio_download {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    height: 120px;
    @media (max-width: 479px) {
      height: 150px;
    }
  }
  .bootcamp_audio_button {
    @media (max-width: 479px) {
      display: flex;
      text-align: center;
    }
  }
  .audio {
    background-color: #6f62df;
    color: #fff;
    padding: 15px 35px;
    border-radius: 66.8944px;
    text-decoration: none;
    width: auto;
  }
  .broucher {
    background-color: #fff;
    color: var(--secondaryColor);
    padding: 15px 35px;
    border-radius: 66.8944px;
    width: auto;
    border: 1px solid #6f62df;
    text-decoration: none;
  }
  .brouchre_link {
    margin-left: 10px;
  }
  @media (max-width: 479px) {
    h3 {
      text-align: center;
      margin-top: 0px;
    }
  }
  button {
    border: none;
    outline: none;
    cursor: pointer;
  }
  ul {
    list-style: none;
    padding-left: 0px;
  }
  li {
    background-image: url("${check}");
    background-size: 18px;
    letter-spacing: 0.04em;
    background-repeat: no-repeat;
    padding-left: 1.875rem;
    color: #000;
    font-weight: normal;
  }
  .another_pricing_section {
    display: flex;
    width: 100%;
    height: auto;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    h1 {
      font-size: 28px;
      letter-spacing: 0.04em;
      @media (max-width: 767px) {
        font-size: 6.06667vw;
      }
    }
    p {
      font-size: 11.8623px;
      font-weight: 300;
      letter-spacing: 0.04em;
    }
    span {
      font-size: 0.875rem;
      font-weight: 300;
    }
    h5 {
      font-weight: 300;
      font-size: 0.875rem;
      margin-bottom: 0px;
      margin-top: 0px;
    }
    .pricing_h2 {
      color: #000 !important;
      margin-bottom: 0px;
    }
    .pricing1_h2 {
      color: #fff !important;
      margin-bottom: 0px;
    }
  }
  .another_pricing_inner_section {
    display: flex;
    flex-direction: column;
    width: 305px;
    min-height: 450px;
    padding: 0 20px;
    border-radius: 6px;
    margin-bottom: 30px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.13);
  }
  .pricing_amount_row {
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    margin-bottom: 10px;
    span {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: 0.875rem;
      font-weight: 300;
    }
  }
  .another_pricing_box {
    display: flex;
    flex-direction: column;
  }
  .pricing_includes_section {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
  }
  .demo_class_info_wrapper {
    margin-top: 50px;
  }
  .demo_class_modal_button {
    display: flex;
    justify-content: center;
  }
`
