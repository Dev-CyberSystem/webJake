import React from "react";
import SEO from "../common/SEO";
import HeaderOne from "../common/header/HeaderOne";
import FooterTwo from "../common/footer/FooterTwo";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import { Accordion } from "react-bootstrap";
import AccordionOne from "../elements/accordion/AccordionOne";
const AboutUs = ({ customStyle }) => {
  return (
    <>
      <SEO title="About Us" />
      <main className="page-wrapper">
        <HeaderOne
          btnStyle="btn-small round btn-icon"
          HeaderSTyle="header-transparent"
        />

        {/* Start Slider Area  */}
        {/* <div
          className="slider-area slider-style-1 height-850 bg_image"
          data-black-overlay="7"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/about.png)`,
          }}
        ></div> */}
        {/* Start Service Area  */}
        <div className="rwt-contact-area rn-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 mb--40">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  title="Preguntas Frecuentes"
                  description=""
                />
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <AccordionOne />
              </div>
            </div>
          </div>
        </div>
        {/* End Service Area  */}

        <FooterTwo />
      </main>
    </>
  );
};

export default AboutUs;
