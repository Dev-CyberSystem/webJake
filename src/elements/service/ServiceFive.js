import React from 'react';
import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const ServiceList = [
    {
        image: '/images/service/galery-image-07.png',
        title: 'Product Study',
        description: 'Is part of the product development process and its a crucial step on it that helps identify customer needs and if your idea can meet market demand.'
    },
    {
        image: '/images/service/galery-image-06.png',
        title: 'Product Design',
        description: ' It’s the process of designing your product.This phase includes research, process planning, designing and creating prototypes, and later the final design.'
    },
    {
        image: '/images/service/galery-image-05.png',
        title: 'System Development',
        description: `Its purpose is the effective and efficient production of a software product that satisfies the user's requirements. <br /> <br /><br />`
    },
    {
        image: '/images/service/galery-image-08.png',
        title: 'Final Product',
        description:`It is the final version of the product. It’s ready for the purpose for which it was developed. <br /> <br /><br />`
    }
   
]
const ServiceFive = ({textAlign, serviceStyle}) => {
    return (
        <div className="row row--15 service-wrapper">
              {ServiceList.map( (val , i) => (
                <div className="col-lg-3 col-md-6 col-sm-12 col-12" key={i}>
                    <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}>
                        <div className={`service ${serviceStyle} ${textAlign}`}>
                            <div className="inner">
                                <div className="content">
                                    <h4 className="title">
                                        <Link to="#service" dangerouslySetInnerHTML={{__html: val.title}}></Link>
                                    </h4>
                                    <p className="description" dangerouslySetInnerHTML={{__html: val.description}}></p>
                                </div>
                                <div className="image">
                                    <img src={`${val.image}`} alt="card Images" />
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
    )
}
export default ServiceFive;