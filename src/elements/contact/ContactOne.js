import React from "react";
import ContactForm from "./ContactForm";
import GoogleMapStyle from "./GoogleMapStyle";
import { FiHeadphones, FiMail, FiMapPin } from "react-icons/fi";

const ContactOne = () => {
  return (
    <>
      <div className="row row--15">
        <div className="col-lg-12">
          <div className="rn-contact-address mt_dec--30">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                <div className="rn-address">
                  <div className="icon">
                    <FiHeadphones />
                  </div>
                  <div className="inner">
                    <h4 className="title">Telefono</h4>
                    <p>
                      <a href="tel: 4840812">Barrio Norte - 4840812</a>
                    </p>
                    <p>
                      <a href="tel: 4858001">San Martin - 4858001</a>
                    </p>
                    <br />
                    <br />
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12">
                <div className="rn-address">
                  <div className="icon">
                    <FiMail />
                  </div>
                  <div className="inner">
                    <h4 className="title">Email</h4>
                    <p>
                      <a href="mailto:ventas@jakemate.com">
                        ventas@jakemate.com
                      </a>
                    </p>
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12">
                <div className="rn-address">
                  <div className="icon">
                    <FiMapPin />
                  </div>
                  <div className="inner">
                    <h4 className="title">Donde Estamos?</h4>
                    <p>Marcos Paz 336, San Miguel de Tucumán</p>
                    <p>San Martin 4496,  San Miguel de Tucumán</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt--40 row--15">
        <div className="col-lg-12">
          <ContactForm formStyle="contact-form-1" />
        </div>
        {/* <div className="col-lg-5 mt_md--30 mt_sm--30">
                    <GoogleMapStyle />
                </div> */}
      </div>
    </>
  );
};
export default ContactOne;
