import React from "react";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import SectionTitle from "../../elements/sectionTitle/SectionTitle";
import GalleryOne from "../../elements/gallery/GalleryOne";

const PopupData = [
  {
    id: "01",
    image: "./images/portfolio/yerbas1.jpeg",
    popupLink: ["./images/portfolio/yerbas1.jpeg"],
  },
  {
    id: "02",
    image: "./images/portfolio/yerbas2.jpeg",
    popupLink: ["./images/portfolio/yerbas2.jpeg", ],
  },
  {
    id: "03",
    image: "./images/portfolio/yerbas3.jpeg",
    popupLink: ["./images/portfolio/yerbas3.jpeg"],
  },
  {
    id: "04",
    image: "./images/portfolio/yerbas4.jpeg",
    popupLink: ["./images/portfolio/yerbas4.jpeg"],
  },
  {
    id: "05",
    image: "./images/portfolio/yerbas6.jpeg",
    popupLink: ["./images/portfolio/yerbas6.jpeg"],
  },
  {
    id: "06",
    image: "./images/portfolio/yerbas8.jpeg",
    popupLink: ["./images/portfolio/yerbas8.jpeg"],
  },
  {
    id: "17",
    image: "./images/portfolio/yerbas9.jpeg",
    popupLink: ["./images/portfolio/yerbas9.jpeg"],
  },
  {
    id: "18",
    image: "./images/portfolio/yerbas10.jpeg",
    popupLink: ["./images/portfolio/yerbas10.jpeg"],
  },

  {
    id: "08",
    image: "./images/portfolio/yerbas11.jpeg",
    popupLink: ["./images/portfolio/yerbas11.jpeg"],
  },
  {
    id: "09",
    image: "./images/portfolio/yerbas12.jpeg",
    popupLink: ["./images/portfolio/yerbas12.jpeg"],
  },
  {
    id: "10",
    image: "./images/portfolio/yerbas13.jpeg",
    popupLink: ["./images/portfolio/yerbas13.jpeg"],
  },
  {
    id: "11",
    image: "./images/portfolio/yerbas14.jpeg",
    popupLink: ["./images/portfolio/yerbas14.jpeg"],
  },
  {
    id: "12",
    image: "./images/portfolio/yerbas15.jpeg",
    popupLink: ["./images/portfolio/yerbas15.jpeg"],
  },
  {
    id: "13",
    image: "./images/portfolio/yerbas16.jpeg",
    popupLink: ["./images/portfolio/yerbas16.jpeg"],
  },
];
const BlogGridView = () => {
  return (
    <>
      <SEO title="Jake Mate Yerbas " />
      <Layout>
        <div className="rn-service-area rn-section-gap ">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  // description="Con un enfoque en comida americana, nuestro menú cuenta con más <br /> de 50 opciones de platos para satisfacer los gustos de nuestros clientes. <br /> Contamos con alternativas vegetarianas, sin TACC y veggies."
                  title="Conocé algunos de nuestro productos."
                />
              </div>
            </div>
          </div>
        </div>
        <div className="main-content">
          {/* Start Blog Area  */}
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
      </Layout>
    </>
  );
};
export default BlogGridView;
