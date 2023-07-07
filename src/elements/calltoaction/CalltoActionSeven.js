import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import logo from "../../assets/images/logo/logoJake1.png";

const CalltoActionSeven = () => {
  return (
    <div className="rn-callto-action clltoaction-style-default style-7">
      <div className="container">
        <div className="row row--0 align-items-center content-wrapper">
          <div className="col-lg-12 col-md-12">
            <div className="inner">
              <div className="content text-center">
                <img src={logo} alt="" style={{ width: 200 }} />
                <ScrollAnimation
                  animateIn="fadeInUp"
                  animateOut="fadeInOut"
                  animateOnce={true}
                >
                </ScrollAnimation>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <ScrollAnimation
              animateIn="fadeInUp"
              animateOut="fadeInOut"
              animateOnce={true}
            >
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CalltoActionSeven;
