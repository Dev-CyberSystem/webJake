import React from 'react';
import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const ServiceList = [
    {
        image: '/images/service/menu1.png',
        title: 'Picadas',
        description: 'There are many variations variats  of passages of Lorem Ipsum available, but the majority.'
    },
    {
        image: '/images/service/menu2.png',
        title: 'Pizzas',
        description: 'Passages there are many variatin Lorem Ipsum available, but the majority have suffered.'
    },
    {
        image: '/images/service/menu3.png',
        title: 'Papas',
        description: 'Variations There are many of pass ages of Lorem Ipsum available, but the majority but the majority.'
    },
    {
        image: '/images/service/menu4.png',
        title: 'Veggie',
        description: 'Variations There are many of pass ages of Lorem Ipsum available, but the majority but the majority.'
    },
    {
        image: '/images/service/menu5.png',
        title: 'Burgers',
        description: 'Variations There are many of pass ages of Lorem Ipsum available, but the majority but the majority.'
    }
]
const ServiceThree = ({textAlign, serviceStyle}) => {
    return (
        <div className="row row--15 service-wrapper">
              {ServiceList.map( (val , i) => (
                <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                    <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}>
                        <div className={`service ${serviceStyle} ${textAlign}`}>
                            <div className="inner">
                                <div className="image">
                                    <img src={`${val.image}`} alt="card Images" />
                                </div>
                                <div className="content">
                                    <h4 className="title"><Link to="#service" dangerouslySetInnerHTML={{__html: val.title}}></Link></h4>
                                    <p className="description b1 color-gray mb--0" dangerouslySetInnerHTML={{__html: val.description}}></p>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
    )
}
export default ServiceThree;