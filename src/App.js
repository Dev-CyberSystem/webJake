import React from "react";
import { Route, Routes } from "react-router-dom";
// import PageScrollTop from './elements/pageToTop/PageScrollTop'

// Pages import Here
// import Splash from "./pages/Splash";
// import HomeDefault from "./pages/HomeDefault";
// import BusinessConsulting2 from "./pages/BusinessConsulting2";
// import Corporate from "./pages/Corporate";
// import Business from "./pages/Business";
// import DigitalAgency from "./pages/DigitalAgency";
// import Finance from "./pages/Finance";
// import Company from "./pages/Company";
// import Marketing from "./pages/Marketing";
// import TravelAgency from "./pages/TravelAgency";
// import Consulting from "./pages/Consulting";
// import SeoAgency from "./pages/SeoAgency";
// import PersonalPortfolio from "./pages/PersonalPortfolio";
// import EventConference from "./pages/EventConference";
// import CreativePortfolio from "./pages/CreativePortfolio";
// import Freelancer from "./pages/Freelancer";
// import InternationalConsulting from "./pages/InternationalConsulting";
import Startup from "./pages/Startup";
// import WebAgency from "./pages/WebAgency";

// import CategoryList from "./pages/CategoryList";
// import TagList from "./pages/TagList";
// import Author from "./pages/Author";
import AboutUs from "./pages/AboutUs";

// Elements import Here

// import Elements from "./elements/elements/Elements";
// import Button from "./elements/button/Button";
// import Service from "./elements/service/Service";
// import CounterUp from "./elements/counterup/CounterUp";
// import Progressbar from "./elements/progressbar/Progressbar";

import Portfolio from "./elements/portfolio/Portfolio";
//import portfolioThreeColumn from "./elements/portfolio/PortfolioThreeColumn";
 import PortfolioFullWidth from "./elements/portfolio/PortfolioFullWidth";
 import PortfolioGrid from "./elements/portfolio/PortfolioGrid";
 import PortfolioBoxLayout from "./elements/portfolio/PortfolioBoxLayout";
import PortfolioDetails from "./pages/PortfolioDetails";
// import Social from "./elements/social/Social";
import Team from "./elements/team/Team";
// import Timeline from "./elements/timeline/Timeline";
// import Testimonial from "./elements/testimonial/Testimonial";
// import RnAccordion from "./elements/accordion/RnAccordion";
// import Tab from "./elements/tab/Tab";
// import Pricing from "./elements/pricing/Pricing";
// import Split from "./elements/split/Split";
// import CalltoAction from "./elements/calltoaction/CalltoAction";
// import Video from "./elements/video/Video";
import Gallery from "./elements/gallery/Gallery";
import Contact from "./elements/contact/Contact";
// import Brand from "./elements/brand/Brand";
// import AdvanceTab from "./elements/advancetab/AdvanceTab";
// import AdvancePricing from "./elements/advancePricing/AdvancePricing";

import BlogGridView from "../src/components/blog/BlogGridView";
// "./elements/blog/BlogGridView";
import BlogListView from "../src/components/blog/BlogListView";
// import BlogGridSidebar from "./elements/blog/BlogGridSidebar";
// import BlogListSidebar from "./elements/blog/BlogListSidebar";
import BlogDetails from "./pages/BlogDetails";
import Error from "./pages/Error";

// Import Css Here
import "./assets/scss/style.scss";

const App = () => {
  return (
    <Routes>
      <Route
        path={`${process.env.PUBLIC_URL + "/menu"}`}
        exact
        element={<BlogGridView />}
      />
      <Route
        path={`${process.env.PUBLIC_URL + "/blog-details/:id"}`}
        exact
        element={<BlogDetails />}
      />
      <Route
        path={`${process.env.PUBLIC_URL + "/blog-grid"}`}
        exact
        element={<BlogListView />}
      />
      {/* <Route path={`${process.env.PUBLIC_URL + "/"}`} exact element={Splash}/>
                    <Route path={`${process.env.PUBLIC_URL + "/business-consulting"}`} exact element={HomeDefault}/>
                    <Route path={`${process.env.PUBLIC_URL + "/business-consulting-2"}`} exact element={BusinessConsulting2}/>
                    <Route path={`${process.env.PUBLIC_URL + "/corporate"}`} exact element={Corporate}/>
                    <Route path={`${process.env.PUBLIC_URL + "/business"}`} exact element={Business}/>
                    <Route path={`${process.env.PUBLIC_URL + "/digital-agency"}`} exact element={DigitalAgency}/>
                    <Route path={`${process.env.PUBLIC_URL + "/finance"}`} exact element={Finance}/>
                    <Route path={`${process.env.PUBLIC_URL + "/company"}`} exact element={Company}/>
                    <Route path={`${process.env.PUBLIC_URL + "/marketing"}`} exact element={Marketing}/> */}
      <Route
        path={`${process.env.PUBLIC_URL + "/"}`}
        exact
        element={<Startup />}
      />
      {/* <Route path={`${process.env.PUBLIC_URL + "/consulting"}`} exact element={Consulting}/>
                    <Route path={`${process.env.PUBLIC_URL + "/seo-agency"}`} exact element={SeoAgency}/>
                    <Route path={`${process.env.PUBLIC_URL + "/personal-portfolio"}`} exact element={PersonalPortfolio}/>
                    <Route path={`${process.env.PUBLIC_URL + "/event-conference"}`} exact element={EventConference}/>
                    <Route path={`${process.env.PUBLIC_URL + "/creative-portfolio"}`} exact element={CreativePortfolio}/>
                    <Route path={`${process.env.PUBLIC_URL + "/freelancer"}`} exact element={Freelancer}/>
                    <Route path={`${process.env.PUBLIC_URL + "/international-consulting"}`} exact element={InternationalConsulting}/>
                    <Route path={`${process.env.PUBLIC_URL + "/startup"}`} exact element={Startup}/>
                    <Route path={`${process.env.PUBLIC_URL + "/web-agency"}`} exact element={WebAgency}/> */}

      {/* Blog Part  */}
      {/* <Route path={`${process.env.PUBLIC_URL + "/blog-grid"}`} exact element={BlogGridView}/>
                    <Route path={`${process.env.PUBLIC_URL + "/blog-list-view"}`} exact element={BlogListView}/>
                    <Route path={`${process.env.PUBLIC_URL + "/blog-grid-sidebar"}`} exact element={BlogGridSidebar}/>
                    <Route path={`${process.env.PUBLIC_URL + "/blog-list-sidebar"}`} exact element={BlogListSidebar}/>
                    <Route path={`${process.env.PUBLIC_URL + "/blog-details/:id"}`} exact element={BlogDetails}/>
                    <Route path={`${process.env.PUBLIC_URL + "/category/:slug"}`} exact element={CategoryList}/>
                    <Route path={`${process.env.PUBLIC_URL + "/archive/:slug"}`} exact element={Author}/>
                    <Route path={`${process.env.PUBLIC_URL + "/tag/:slug"}`} exact element={TagList}/>

                    <Route path={`${process.env.PUBLIC_URL + "/elements"}`} exact element={Elements}/>
                    <Route path={`${process.env.PUBLIC_URL + "/button"}`} exact element={Button}/>
                    <Route path={`${process.env.PUBLIC_URL + "/service"}`} exact element={Service}/>
                    <Route path={`${process.env.PUBLIC_URL + "/counter"}`} exact element={CounterUp}/>
                    <Route path={`${process.env.PUBLIC_URL + "/progressbar"}`} exact element={Progressbar}/>
                    <Route path={`${process.env.PUBLIC_URL + "/social-share"}`} exact element={Social}/>
                    <Route path={`${process.env.PUBLIC_URL + "/team"}`} exact element={Team}/>
                    <Route path={`${process.env.PUBLIC_URL + "/testimonial"}`} exact element={Testimonial}/>
                    <Route path={`${process.env.PUBLIC_URL + "/timeline"}`} exact element={Timeline}/>
                    <Route path={`${process.env.PUBLIC_URL + "/accordion"}`} exact element={RnAccordion}/>
                    <Route path={`${process.env.PUBLIC_URL + "/tab"}`} exact element={Tab}/>
                    <Route path={`${process.env.PUBLIC_URL + "/pricing"}`} exact element={Pricing}/>
                    <Route path={`${process.env.PUBLIC_URL + "/split"}`} exact element={Split}/>
                    <Route path={`${process.env.PUBLIC_URL + "/call-to-action"}`} exact element={CalltoAction}/>
                    <Route path={`${process.env.PUBLIC_URL + "/video-popup"}`} exact element={Video}/>
                    <Route path={`${process.env.PUBLIC_URL + "/gallery"}`} exact element={Gallery}/>
                    <Route path={`${process.env.PUBLIC_URL + "/brand"}`} exact element={Brand}/>
                    <Route path={`${process.env.PUBLIC_URL + "/advance-tab"}`} exact element={AdvanceTab}/>
                <Route path={`${process.env.PUBLIC_URL + "/advance-pricing"}`} exact element={AdvancePricing}/> */}
      <Route
        path={`${process.env.PUBLIC_URL + "/preguntas-frecuentes"}`}
        exact
        element={<AboutUs />}
      />
      <Route
        path={`${process.env.PUBLIC_URL + "/contacto"}`}
        exact
        element={<Contact />}
      />
      <Route
        path={`${process.env.PUBLIC_URL + "/gallery"}`}
        exact
        element={<Gallery />}
      />

      <Route
        path={`${process.env.PUBLIC_URL + "/error"}`}
        exact
        element={<Error />}
      />

      <Route
        path={`${process.env.PUBLIC_URL + "/portfolio"}`}
        exact
        element={<Portfolio />}
      />
      <Route
        path={`${process.env.PUBLIC_URL + "/portfolio-three-column"}`}
        exact
        element={<portfolioThreeColumn />}
      />
      <Route
        path={`${process.env.PUBLIC_URL + "/portfolio-full-width"}`}
        exact
        element={<PortfolioFullWidth />}
      />
      <Route
        path={`${process.env.PUBLIC_URL + "/portfolio-grid-layout"}`}
        exact
        element={<PortfolioGrid />}
      />
      <Route
        path={`${process.env.PUBLIC_URL + "/portfolio-box-layout"}`}
        exact
        element={<PortfolioBoxLayout />}
      />
      <Route
        path={`${process.env.PUBLIC_URL + "/portfolio-details/:id"}`}
        exact
        element={<PortfolioDetails/>}
      />
    </Routes>
  );
};

export default App;
