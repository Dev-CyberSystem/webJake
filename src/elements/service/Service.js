import React from "react";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";
import SectionTitle from "../sectionTitle/SectionTitle";
import ServiceOne from "./ServiceOne";
import ServiceThree from "./ServiceThree";
import Separator from "../separator/Separator";

const Service = () => {
  return (
    <>
      <SEO title="Service || " />
      <Layout>
        <BreadcrumbOne
          title="Menu"
          rootUrl="/"
          parentUrl="Inicio"
          currentUrl="Menu"
        />
        <div className="main-content">
          
          {/* Start Service Area  */}
          <div className="rn-service-area rn-section-gap ">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <SectionTitle
                    textAlign="text-center"
                    // radiusRounded = ""
                    // subtitle = "What we can do for you"
                    description="Con un enfoque en comida americana, nuestro menú cuenta con más <br /> de 50 opciones de platos para satisfacer los gustos de nuestros clientes. <br /> Contamos con alternativas vegetarianas, sin TACC y veggies."
                    title="Conocé nuestro menú completo:"
                  />
                </div>
              </div>
              <ServiceThree
                serviceStyle="service__style--2"
                textAlign="text-center"
              />
            </div>
          </div>
          {/* End Service Area  */}

          <Separator />

          {/* Start Service Area  */}
          <div className="rn-service-area rn-section-gap">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <SectionTitle
                    textAlign="text-center"
                    radiusRounded=""
                    subtitle="What we can do for you"
                    title="Services provide for you."
                    description="There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration."
                  />
                </div>
              </div>
              <ServiceOne
                serviceStyle="service__style--1 icon-circle-style"
                textAlign="text-center"
              />
            </div>
          </div>
          {/* End Service Area  */}
        </div>
      </Layout>
    </>
  );
};

export default Service;
