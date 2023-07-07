import React from "react";
import VideoTwo from "../video/VideoTwo";
import { FiCheck } from "react-icons/fi";

const PopupData = [
  {
    id: "01",
    image: "./images/bg/jakeFront.png",
    popupLink: ["https://www.youtube.com/watch?v=0auqM_zFyl8"],
  },
];

const AboutFour = ({ image }) => {
  return (
    <div className="about-area about-style-4 rn-section-gap">
      <div className="container">
        <div className="row row--40 align-items-center">
          <div className="col-lg-6">
            {PopupData.map((item) => (
              <img src={item.image} alt=""/>
              // <div className="video-btn" key={item.id}>
              //   <VideoTwo imagename={`${image}`} galleryItem={item} />
              // </div>
            ))}
          </div>
          <div className="col-lg-6 mt_md--40 mt_sm--40">
            <div className="content">
              <div className="inner">
                <h3 className="title">¡Bienvenidos!</h3>
                <ul className="feature-list">
                  <li>
                    {/* <div className="icon">
                      <FiCheck />
                    </div> */}
                    <div className="title-wrapper">
                      <span>
                        Bienvenidos a Jake Mate Yerbas Orgánicas, donde
                        encontrarás más de 70 yerbas orgánicas, mates,
                        bombillas, termos y accesorios. Nos dedicamos a llevar
                        el mate orgánico, un producto de consumo masivo en
                        Argentina, a un nivel superior. Nuestros productos son
                        de alta calidad, sostenibles y respetuosos con el medio
                        ambiente. Descubre nuestra amplia selección en línea y
                        únete a nuestra comunidad de amantes del mate orgánico.
                        ¡Te esperamos con los brazos abiertos!
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFour;
