import {useState} from "react";
import { FiX , FiArrowRight} from "react-icons/fi";

const HeaderTopNews = () => {
    const [deactive, setClass] = useState('');
    return (
        <div >
            <div className="wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner">
                                <div className="content">
                                    {/* <span className="rn-badge">Limited Time Offer</span>
                                    <span className="news-text">Intro price. Get PorterIt for Big Sale <strong>-95% off.</strong></span> */}
                                </div>
                                <div className="right-button">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="icon-close">
                <button className="close-button" onClick={() => setClass('deactive')}><FiX /></button>
            </div> */}
        </div>
    )
}

export default HeaderTopNews;
