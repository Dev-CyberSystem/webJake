import React from "react";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import Separator from "../separator/Separator";
import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";
import SectionTitle from "../sectionTitle/SectionTitle";
import GalleryOne from "../gallery/GalleryOne";

export const PopupData = [
  {
    id: "01",
    image: "./images/team/busquedaPersonal.jpg",
    popupLink: ["./images/team/busquedaPersonal.jpg"],
  },
];

const Team = () => {
  return (
    <>
      <SEO title="Team || " />
      <Layout>
        <div className="main-content">
          {/* Start Elements Area  */}
          <div className="rwt-team-area rn-section-gap">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <SectionTitle
                    textAlign="text-center"
                    radiusRounded=""
                    subtitle="Team."
                    title="Vos podés ser parte de nuestro team."
                    description='Enviá tu CV actualizado a <a href="mailto:cerveceria.porter@gmail.com"> cerveceria.porter@gmail.com </a> Y EN EL ASUNTO ACLARÁ EL PUESTO
                    PARA EL QUE TE POSTULÁS. <br />
                    FORMÁ PARTE DEL TEAM PORTER'
                  />
                  <div className="main-content">
                    {/* Start Blog Area  */}
                    <div style={{ display: "flex", justifyContent: "center" }}>
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
              </div>
            </div>
          </div>
          {/* End Elements Area  */}

          <Separator />
        </div>
      </Layout>
    </>
  );
};
export default Team;
