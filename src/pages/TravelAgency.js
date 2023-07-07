import React from "react";
import SEO from "../common/SEO";
import { Button } from "react-bootstrap";

// import HeaderTopNews from '../common/header/HeaderTopNews';
import HeaderOne from "../common/header/HeaderOne";
import FooterTwo from "../common/footer/FooterTwo";
import Copyright from "../common/footer/Copyright";
import Slider from "react-slick";
import { BannerActivation } from "../utils/script";
import Separator from "../elements/separator/Separator";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import AboutFour from "../elements/about/AboutFour";
import GalleryOne from "../elements/gallery/GalleryOne";
import BlogClassicData from "../data/blog/BlogList.json";
var BlogListData = BlogClassicData.slice(0, 3);

const BannerData = [
  {
    image: "/images/bg/porterPrincipal.png",
    // title: "Porter Brew House",
    // description: "Primera cerveceria artesanal de Tucumán"
  },
  {
    image: "/images/bg/principalPorter2.png",
    // title: "Winter Season.",
    // description: "We help our clients succeed by creating brand identities, <br /> digital experiences, and print materials."
  },
  {
    image: "/images/bg/principalPorter3.png",
    // title: "Travel Agency.",
    // description: "We help our clients succeed by creating brand identities, <br />  digital experiences, and print materials."
  },
];

const CumpleData = [
  {
    id: "01",
    image: "./images/portfolio/CUMPLE_PORTER_1.jpeg",
    popupLink: ["./images/portfolio/CUMPLE_PORTER_1.jpeg"],
  },
  {
    id: "01",
    image: "./images/portfolio/CUMPLE_PORTER_2.jpeg",
    popupLink: ["./images/portfolio/CUMPLE_PORTER_2.jpeg"],
  },
  {
    id: "01",
    image: "./images/portfolio/CUMPLE_PORTER_3.jpeg",
    popupLink: ["./images/portfolio/CUMPLE_PORTER_3.jpeg"],
  },
  {
    id: "01",
    image: "./images/portfolio/CUMPLE_PORTER_4.jpeg",
    popupLink: ["./images/portfolio/CUMPLE_PORTER_4.jpeg"],
  },
  {
    id: "01",
    image: "./images/portfolio/CUMPLE_PORTER_5.jpeg",
    popupLink: ["./images/portfolio/CUMPLE_PORTER_5.jpeg"],
  },
];

const PopupData = [
  {
    id: "01",
    image: "./images/portfolio/promoLaGaceta.png",
    popupLink: ["./images/portfolio/promoLaGaceta.png"],
  },
  // {
  //   id: "02",
  //   image: "./images/portfolio/promoGin.png",
  //   popupLink: ["./images/portfolio/promoGin.png"],
  // },
  {
    id: "03",
    image: "./images/portfolio/promomujeres.png",
    popupLink: ["./images/portfolio/promomujeres.png"],
  },
  {
    id: "04",
    image: "./images/portfolio/ABRIL-GIN-AL-COSTO-PORTER.png",
    popupLink: ["./images/portfolio/ABRIL-GIN-AL-COSTO-PORTER.png"],
  },
  // {
  //   id: "05",
  //   image: "./images/portfolio/basesSorteoMundial.png",
  //   popupLink: ["./images/portfolio/basesSorteoMundial.png"],
  // },
];

const TravelAgency = () => {
  return (
    <>
      <SEO title="Porter BH" />
      <main className="page-wrapper">
        {/* <HeaderTopNews /> */}
        <HeaderOne btnStyle="btn-small" HeaderSTyle="header-transparent" />

        {/* Start Slider Area  */}
        <Slider
          className="slider-area slider-style-4 slider-dot rn-slick-dot rn-slick-arrow"
          {...BannerActivation}
        >
          {BannerData.map((data, index) => (
            <div key={index} className="single-slide">
              <div
                className="height-950 bg_image"
                data-black-overlay="2"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL} ${data.image})`,
                }}
              >
                {/* data-black-overlay="5" esto va adentro del div para opacar la imagen del slider */}
                <div className="container">
                  <div className="row row--30 align-items-center">
                    <div className="col-12">
                      <div className="inner text-center">
                        <h1
                          className="title"
                          dangerouslySetInnerHTML={{ __html: data.title }}
                        ></h1>
                        <p
                          className="description"
                          dangerouslySetInnerHTML={{ __html: data.description }}
                        ></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <Separator />

        <AboutFour image="./images/bg/cervezas.jpg" />

        {/* Start Elements Area  */}
        <div className="rwt-gallery-area rn-section-gapBottom">
          <div className="container">
            <div className="row mb--20">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="Promos"
                  title="PROMOCIONES Y DESCUENTOS"
                  description="¡Conocé todos nuestros días de promociones y descuentos <span> IDEALES PARA DISFRUTAR DE TU EXPERIENCIA EN
                  NUESTRAS SUCURSALES! </span><br/> 
                  Recordá siempre consultar los detalles de las promociones en nuestras redes sociales."
                  id="promociones"
                />
              </div>
            </div>
            <div className="row mt_dec--30 row--15">
              {PopupData.map((item) => (
                <div
                  className="col-lg-4 col-md-6 col-sm-6 col-12 mt--30"
                  key={item.id}
                >
                  <GalleryOne galleryItem={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End Elements Area  */}

        <Separator />
        {/* Start Elements Area  */}
        <div className="rwt-testimonial-area rn-section-gap">
          <div className="container">
            <div className="row mb--20">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="Cumple en Porter"
                  title="FESTEJA TU CUMPLE CON NOSOTROS."
                  description="Mirá todo lo que tenés <br /> para pasar un cumple increíble."
                />

                <div
                  className="row mt_dec--30 row--15"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  {CumpleData.map((item) => (
                    <div
                      className="col-lg-4 col-md-6 col-sm-6 col-12 mt--30"
                      key={item.id}
                    >
                      <GalleryOne galleryItem={item} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <Separator />

            {/* <TestimonialThree teamStyle="" /> */}
            <div className="rwt-testimonial-area rn-section-gap">
              <div className="container">
                <div className="row mb--20">
                  <div className="col-lg-12 mt-4">
                    <SectionTitle
                      textAlign="text-center"
                      radiusRounded=""
                      subtitle="Reservas"
                      title="HACE TU RESERVA"
                      description="“Podés realizar tu reserva todos los días a través de nuestro sistema de reservas en el siguiente link” <br /> *Podés reservar para venir con tus amigos, una reunión, tu cumple, una cita, o cualquiera sea el motivo que los encuentre. <br />
                  *Las reservas se toman hasta el mismo día de la reservación a las 19:00hs.<br />
                  *Recordá que tenés 15 minutos de tolerancia luego de tu horario de reserva.<br />
                   Ante cualquier inconveniente para realizar tu reserva, podés comunicarte a nuestras sucursales de Lunes a Domingo a partir de las 19hs. <br />
                  Barrio Norte 4840812 / Yerba buena 4858001"
                      id="reservas"
                    />
                  </div>
                  <div className="button-group  mt--30 ">
                    <Button
                      className="btn-default "
                      href="https://web.turn-app.com/comercios/porter(yerbabuena)"
                      target="_blank"
                    >
                      Yerba Buena
                    </Button>

                    <Button
                      className="btn-default"
                      href="https://web.turn-app.com/comercios/porterbrewhouse(barrionorte)"
                      target="_blank"
                    >
                      Barrio Norte
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Elements Area  */}

        <Separator />

        <FooterTwo />
        <Copyright />
      </main>
    </>
  );
};

export default TravelAgency;
