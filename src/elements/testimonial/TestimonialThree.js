import React from 'react';
import Slider from "react-slick";
import { slickDot } from "../../utils/script";

const TestimonialData = [
    {
        form: "Reserva",
        description: "Festeja tu cumple en Porter",
        name: "como tenes que hacer?",
        // subtitle: "App Developer",
        image: "cumple1"
    },
    {
        form: "Que dias puedo festejar?",
        description: "Podes festejar durante toda la semana de tu cumple",
        // name: "John Due",
        // subtitle: "App Developer",
        image: "cumple2"
    },
    {
        form: "2 a 9 personas",
        description: "Chupitos para todos, postre para cumpleañero, Extension happy hour hasta las 21hs, Gin Tonic $250 toda la noche",
        // name: "John Due",
        // subtitle: "App Developer",
        image: "cumple5"
    },
    {
        form: "10 a 20 personas",
        description: "Chupitos para todos, postre para cumpleañero, Extension happy hour hasta las 21hs, Gin Tonic $250 toda la noche + botellon para el cumpleañero",
        // name: "Janen",
        // subtitle: "App Developer",
        image: "cumple4"
    },
    {
        form: "+21 personas",
        description: "Chupitos para todos, postre para cumpleañero, Extension happy hour hasta las 21hs, Gin Tonic $250 toda la noche + botellon para el cumpleañero",
        // name: "Janen",
        // subtitle: "App Developer",
        image: "cumple2"
    },
]
const TestimonialThree = ({teamStyle}) => {
    return (
        <div className="row">
            <div className="col-lg-12">
                <Slider className="slick-space-gutter--15 rn-slick-dot rn-slick-arrow mb--60" {...slickDot}>
                    {TestimonialData.map((data, index) => (
                        <div key={index} className={`testimonial-style-two ${teamStyle}`}>
                            <div className="row align-items-center row--20">
                                <div className="order-2 order-md-1 col-lg-6 col-md-8 offset-lg-1">
                                    <div className="content mt_sm--40">
                                        <span className="form">{data.form}</span>
                                        <p className="description">{data.description}</p>
                                        <div className="client-info">
                                            <h4 className="title">{data.name}</h4>
                                            <h6 className="subtitle">{data.subtitle}</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="order-1 order-md-2 col-lg-4 col-md-4">
                                    <div className="thumbnail">
                                        <img className="w-100" src={`./images/testimonial/${data.image}.png`} alt="Beneficios Cumple Porter" />
                                    </div>
                                </div>
                            </div> 
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}
export default TestimonialThree;




















